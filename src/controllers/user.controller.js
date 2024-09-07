import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    user.save({ validateBeforeSave: false });
    return { refreshToken, accessToken };
  } catch (error) {
    throw new ApiError(401, "error while generating access and refresh token");
  }
};

const registerController = asyncHandler(async (req, res) => {
  //check correct data is received
  const {
    first_name,
    last_name,
    email,
    password,
    username,
    phone_no,
    date_of_birth,
  } = req.body;
  // console.log(first_name, last_name, email, password, username, phone_no,date_of_birth);

  if (
    [first_name, last_name, email, password, username].some((fields) => {
      fields.trim() === "";
    })
  )
    throw new ApiError(402, "All fields are required");

  // check for valid email
  if (!email.includes("@")) throw new ApiError(401, "invalid email");

  //phone number digits must 10
  if (phone_no.length !== 10)
    throw new ApiError(401, "Phone number must be 10 digits");

  //check for user already exists
  const userExists = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (userExists) throw new ApiError(409, "User already exists");

  // check for avatar file received
  // console.log("Avatar file path:", req.file);
  const avatarLocalPath = req.file?.path;
  if (!avatarLocalPath) throw new ApiError(401, "cannot find avatar file path");

  // upload avatar on cloudinary
  const avatarUpload = await uploadOnCloudinary(avatarLocalPath);
  if (!avatarUpload)
    throw new ApiError(401, "error in avatar uploading on cloudinary");

  //convert date to format(DD-MM-YYYY)
  //from frontend

  //create new user
  const user = await User.create({
    first_name,
    last_name,
    username,
    email,
    password,
    avatar: avatarUpload.url || "",
    phone_no,
    date_of_birth,
  });

  // send res
  const userCreated = await User.findById(user?._id).select(
    "-refreshToken -password",
  );
  res
    .status(200)
    .json(new ApiResponse(201, "User registered successfully", userCreated));
});

const loginController = asyncHandler(async (req, res) => {
  // req.body email password from client
  const { email, password, username } = req.body;
  console.log(email, password, username);
  if ([email, password].some((fields) => fields.trim() === ""))
    throw new ApiError(401, "All fields required.");

  // check for user existence
  const user = await User.findOne({
    $or: [{ email }, { username }],
  });
  if (!user) throw new ApiError(401, "User does not exist.");

  // match password
  const isPCorrect = await user.isPasswordCorrect(password);
  if (!isPCorrect) throw new ApiError(401, "incorrect password");

  // generate access and refresh token, save refresh token to db
  const { refreshToken, accessToken } = await generateAccessAndRefreshToken(
    user._id,
  );

  //send cookie
  const options = {
    httpOnly: true,
    secure: true,
  };

  // send res excludes refresh and password
  const loggedInUser = await User.findById(user._id).select(
    "-refreshToken -password",
  );

  return res
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .cookie("accessToken", accessToken, options)
    .json(
      new ApiResponse(200, "User logged in successfully.", {
        user: loggedInUser,
        accessToken,
        refreshToken,
      }),
    );
});

const logoutController = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    },
  );

  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .clearCookie("refreshToken", options)
    .clearCookie("accessToken", options)
    .json(new ApiResponse(200, "User logged out successfully", {}));
});

export { registerController, loginController, logoutController };
