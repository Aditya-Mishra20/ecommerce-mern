import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    items: [
      {
        productDetails: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          min: [1, "Quantity can not be less then 1."],
          default: 1,
        },
        price: {
          type: Number,
        },
      },
    ],
    bill: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export const Cart = mongoose.model("Cart", cartSchema);
