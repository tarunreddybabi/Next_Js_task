import mongoose, { Schema } from "mongoose";

interface UserDocument {
  username: string;
  email: string;
  password: string;
  img?: string;
  isAdmin?: string;
  isActive?: string;
  phone?: string;
  address?: string;
}

const userSchema = new Schema<UserDocument>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: String,
    },
    isActive: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

interface ProductDocument {
  title: string;
  desc: string;
  price: number;
  stock: number;
  img?: string;
  color?: string;
  size?: string;
}

const productSchema = new Schema<ProductDocument>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User =
  mongoose.models.User || mongoose.model<UserDocument>("User", userSchema);
export const Product =
  mongoose.models.Product ||
  mongoose.model<ProductDocument>("Product", productSchema);
