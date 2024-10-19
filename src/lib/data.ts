import { Product, User } from "./models";
import { ConnectToDB } from "./utils";

export const fetchUsers = async (q: string, page: number) => {
  const regex = new RegExp(q, "i");
  const Item_Per_Page = 2;
  try {
    await ConnectToDB();
    const count = await User.find({
      username: { $regex: regex },
    }).countDocuments();
    const users = await User.find({ username: { $regex: regex } })
      .limit(Item_Per_Page)
      .skip(Item_Per_Page * (page - 1));
    return { count, users };
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(`Failed to fetch users: ${err.message}`);
    } else {
      throw new Error("Failed to fetch users: Unknown error");
    }
  }
};

export const fetchProducts = async (q: string, page: number) => {
  const regex = new RegExp(q, "i");
  const Item_Per_Page = 2;

  try {
    await ConnectToDB();
    const count = await Product.find({
      title: { $regex: regex },
    }).countDocuments();

    const products = await Product.find({ title: { $regex: regex } })
      .limit(Item_Per_Page)
      .skip(Item_Per_Page * (page - 1));
    return { count, products };
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(`Failed to fetch products: ${err.message}`);
    } else {
      throw new Error("Failed to fetch products: Unknown error");
    }
  }
};
