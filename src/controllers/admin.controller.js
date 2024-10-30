import { Product } from "../models/product.model.js";
import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import {
  deleteFromCloudinary,
  uploadMultipleOnCloudinary,
} from "../utils/cloudinary.js";

// users
const getAllUserController = asyncHandler(async (req, res) => {
  const users = await User.find({}).select("-refreshToken -password");
  return res
    .status(200)
    .json(new ApiResponse(200, "All users fetched successfully", users));
});

const getUserController = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  console.log("user id", userId);
  if (!userId) throw new ApiError(401, "invalid user id  ");

  const user = await User.findById(userId).select("-password -refreshToken");

  res.status(200).json(new ApiResponse(201, "user fetched successfully", user));
});

const deleteUserController = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  console.log(userId);

  if (!userId) throw new ApiError(401, "invalid user id");
  const user = await User.findById(userId).select(" avatar ");
  if (!user) throw new ApiError(401, "cannot find avatar url");
  console.log("url :::: ", user.avatar);
  await deleteFromCloudinary(user.avatar);
  // await User.deleteOne();

  res.status(200).json(new ApiResponse(201, "user deleted successfully", {}));
});

// products

const addProductController = asyncHandler(async (req, res) => {
  const { title, description, catagory, quantity, price } = req.body;
  //   console.log(title, description, catagory, quantity, price);
  if (
    [title, description, catagory, quantity, price].some(
      (fields) => fields.trim() === "",
    )
  )
    throw new ApiError(401, `All fields are required`);

    // console.log("req.files : ", req.files);
  const imagesPath = req.files?.map((imgs) => {
    return imgs.path;
  });
    // console.log("images :", imagesPath);
  if (!imagesPath) throw new ApiError(401, "Image field is required");

  const images = await uploadMultipleOnCloudinary(imagesPath);
  if (!images)
    throw new ApiError(401, error?.message || "cannot get image urls");
  // console.log("final res :", images);

  const newProduct = await Product.create({
    title,
    description,
    catagory: catagory.toLowerCase(),
    images,
    quantity,
    price,
  });
  return res
    .status(200)
    .json(new ApiResponse(200, "success add product", newProduct));
});

const updateProductController = asyncHandler(async (req, res) => {
  // client any data receieve
  const { title, description, price, quantity } = req.body;
  console.log("req.body :", req.body);

  const productId = req.params.id;
  console.log("productId :", productId);

  // if (
  //   [title, description, price, quantity].some((fields) => {
  //     fields.trim() === "";
  //   })
  // )
  //   throw new ApiError(401, "All fields are required");

  const imagesPath = req.files?.map((imgs) => {
    return imgs.path;
  });
  //   console.log("images :", imagesPath);
  if (!imagesPath) throw new ApiError(401, "Image field is required");

  const product = await Product.findById(productId);
  console.log("Previous Images : ", previousImages);
  console.log("array of previousImages :", previousImages.images);

  const images = await uploadMultipleOnCloudinary(imagesPath);
  if (!images)
    throw new ApiError(401, error?.message || "cannot get image urls");

  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    {
      $set: {
        title,
        description,
        price,
        images,
        quantity,
      },
    },
    {
      new: true,
    },
  );
  console.log("updated product: ", updatedProduct);

  return res
    .status(200)
    .json(new ApiResponse(201, "Product Updated successfully", updatedProduct));
}); //work in progress

export {
  getAllUserController,
  getUserController,
  deleteUserController,
  addProductController,
  updateProductController,
};
