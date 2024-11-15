import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!token) throw new ApiError(401, "Unauthorized Request");
    console.log("token :", token);

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log("decodedtoken :", decodedToken);

    const user = await User.findById(decodedToken?.id).select(
      "-refreshToken -password",
    );
    console.log("user :", user);
    
    if (!user) throw new ApiError(401, "Invalid Access Token");

    req.user = user;

    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "invalid access token");
  }
});

