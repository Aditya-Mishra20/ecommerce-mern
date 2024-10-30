import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    catagory: {
      type: String,
      required: true,
      trim: true,
    },
    images: {
      type: Array,
    },
    quantity: {
      type: Number,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    embeddings:{
      type: Array,
      
    }
  },
  { timestamps: true },
);

export const Product = mongoose.model("Product", productSchema);
