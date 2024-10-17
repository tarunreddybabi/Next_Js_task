import { Product, User } from "./models";
import { ConnectToDB } from "./utils";

export const fetchUsers = async () => {
  try {
    await ConnectToDB();
    const users = await User.find();
    return users;
  } catch (err: any) {
    throw new Error(`Failed to fetch users: ${err.message}`); 
  }
};

export const fetchProducts=async()=>{
  try{
    await ConnectToDB()
    const products=await Product.find()
    return products
  }catch(err:any){
    throw new Error(`Failed to fetch products: ${err.message}`); 
  }
}