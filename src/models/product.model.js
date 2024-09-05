import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    catagory: {
      type: String,
    },
    images: {
      type: Array,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true },
);

export const Product = mongoose.model("Product", productSchema);
