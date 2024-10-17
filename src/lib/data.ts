import { Product, User } from "./models";
import { ConnectToDB } from "./utils";

export const fetchUsers = async () => {
  try {
    await ConnectToDB();
    const users = await User.find();
    return users;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(`Failed to fetch users: ${err.message}`);
    } else {
      throw new Error("Failed to fetch users: Unknown error");
    }
  }
};

export const fetchProducts = async () => {
  try {
    await ConnectToDB();
    const products = await Product.find();
    return products;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(`Failed to fetch products: ${err.message}`);
    } else {
      throw new Error("Failed to fetch products: Unknown error");
    }
  }
};
