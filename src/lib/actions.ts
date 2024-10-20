"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { ConnectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

interface UserFields {
  username?: string;
  password?: string;
  email?: string;
  phone?: string;
  address?: string;
  isAdmin?: boolean;
  isActive?: boolean;
}

interface ProductFields {
  title?: string;
  desc?: string;
  price?: number;
  stock?: number;
  color?: string;
  size?: string;
}

export const addUser = async (formData: FormData) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const address = formData.get("address") as string;
  const isAdmin = formData.get("isAdmin") === "true";
  const isActive = formData.get("isActive") === "true";

  try {
    await ConnectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      password: hashedPassword,
      email,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await newUser.save();
  } catch (err: unknown) {
    console.log(err);
    throw new Error("Failed to create user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData: FormData) => {
  const id = formData.get("id") as string;
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;
  const email = formData.get("email") as string | null;
  const phone = formData.get("phone") as string | null;
  const address = formData.get("address") as string | null;
  const isAdmin = formData.get("isAdmin") === "true";
  const isActive = formData.get("isActive") === "true";

  try {
    await ConnectToDB();
    const updateFields: UserFields = {
      ...(username && { username }),
      ...(password && {
        password: await bcrypt.hash(password, await bcrypt.genSalt(10)),
      }),
      ...(email && { email }),
      ...(phone && { phone }),
      ...(address && { address }),
      isAdmin,
      isActive,
    };

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err: unknown) {
    console.log(err);
    throw new Error("Failed to update user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData: FormData) => {
  const id = formData.get("id") as string;

  try {
    await ConnectToDB();
    await User.findByIdAndDelete(id);
  } catch (err: unknown) {
    console.log(err);
    throw new Error("Failed to delete user");
  }
  revalidatePath("/dashboard/users");
};

export const addProduct = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const desc = formData.get("desc") as string;
  const price = Number(formData.get("price"));
  const stock = Number(formData.get("stock"));
  const color = formData.get("color") as string;
  const size = formData.get("size") as string;

  try {
    await ConnectToDB();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });
    await newProduct.save();
  } catch (err: unknown) {
    console.log(err);
    throw new Error("Failed to create product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData: FormData) => {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const desc = formData.get("desc") as string;
  const price = Number(formData.get("price"));
  const stock = Number(formData.get("stock"));
  const color = formData.get("color") as string;
  const size = formData.get("size") as string;

  try {
    await ConnectToDB();
    const updateFields: ProductFields = {
      ...(title && { title }),
      ...(desc && { desc }),
      ...(price && { price }),
      ...(stock && { stock }),
      ...(color && { color }),
      ...(size && { size }),
    };

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err: unknown) {
    console.log(err);
    throw new Error("Failed to update product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData: FormData) => {
  const id = formData.get("id") as string;

  try {
    await ConnectToDB();
    await Product.findByIdAndDelete(id);
  } catch (err: unknown) {
    console.log(err);
    throw new Error("Failed to delete product");
  }
  revalidatePath("/dashboard/products");
};
