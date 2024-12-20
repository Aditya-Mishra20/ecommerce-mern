import { Product } from "../models/product.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

const getLatestProducts = asyncHandler(async (req, res) => {
  const latestProducts = await Product.find({})
    .sort({ createdAt: -1 })
    .limit(5);

  return res
    .status(200)
    .json(new ApiResponse(200, "latest products fetched", latestProducts));
});

const getSingleProduct = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  if (!productId) throw new ApiError(401, "invalid product id.");

  const product = await Product.findById(productId);

  if (!product) throw new ApiError("error while getting a product details.");

  res
    .status(200)
    .json(new ApiResponse(201, "single product fetched successfully", product));
});

const getProductCategories = asyncHandler(async (req, res) => {
  const categories = await Product.distinct("catagory");
  console.log("categories : ", categories);
  
  if (!categories) throw new ApiError(404, "categories not found");



  return res
    .status(200)
    .json(new ApiResponse(201, "categories fetched successfully.", categories));
}); // work in progress
export { getLatestProducts, getSingleProduct, getProductCategories };
