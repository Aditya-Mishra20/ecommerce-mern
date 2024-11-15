import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

dotenv.config({
  path: "./.env",
});

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  secure: true,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("file successfully uploaded", response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.log("error while uploading file on cloudinary", error);
    fs.unlinkSync(localFilePath);
    return null;
  }
};

const uploadMultipleOnCloudinary = async (localFilePaths) => {
  const imageURLs = new Array();
  try {
    if (!Array.isArray(localFilePaths)) return null;
    for (const path in localFilePaths) {
      const response = await cloudinary.uploader.upload(localFilePaths[path], {
        resource_type: "auto",
      });
      // console.log("res :", response);
      // console.log("res URL :", response.url);

      imageURLs.push(response.url);
      fs.unlinkSync(localFilePaths[path]);
    }
    // console.log("image urls :", imageURLs);

    return imageURLs;
  } catch (error) {
    for (const path in localFilePaths) fs.unlinkSync(localFilePaths[path]);
    console.log(
      error?.message || "error while uploading multiple images on cloudinary",
    );
    return null;
  }
};

const deleteFromCloudinary = async (imagePublicStringArray) => {
  try {
    if (!imagePublicStringArray) return null;
    const response = await cloudinary.api.delete_resources(
      imagePublicStringArray,
    ); // returns json-object
    console.log(" image deleted successfully res: ", response);
    return response;
  } catch (error) {
    console.log("error while deleting images", error);
  }
};

export { uploadOnCloudinary, uploadMultipleOnCloudinary, deleteFromCloudinary };
