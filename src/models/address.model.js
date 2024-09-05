import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    address_1: {
      type: String,
    },
    address_2: {
      type: String,
    },
    city: {
      type: String,
    },
    postal_code: {
      type: Number,
    },
    country: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Address = mongoose.model("Address", addressSchema);
