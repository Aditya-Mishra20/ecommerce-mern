import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "Please enter your first name."],
      trim: true,
    },
    second_name: {
      type: String,
      required: [true, "Please enter your first name."],
      trim: true,
    },
    username: {
      type: String,
      unique: true,
      required: [true, "Please enter your first name."],
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Please enter password."],
    },
    password: {
      type: String,
      required: [true, "Please enter password."],
      minlength: [6, "minimum length should be of 6 characters"],
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    phone_no: {
      type: String,
    },
    dob: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = await bcrypt.hash(this.password, 10);
  } catch (error) {
    console.log("error while hashing password", error);
  }
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  jwt.sign(
    {
      id: this._id,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    },
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      id: this._id,
      email: this.email,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY },
  );
};

export const User = mongoose.model("User", userSchema);
