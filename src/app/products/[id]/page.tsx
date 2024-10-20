import { updateProduct } from "@/lib/actions";
import { fetchProduct } from "@/lib/data";
import Image from "next/image";

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div className="flex gap-12 mt-5">
      <div className="flex-[1] bg-bgSoft p-5 rounded-lg font-bold text-textSoft max-h-max">
        <div className="w-full h-72 relative rounded-lg overflow-hidden mb-5">
          <Image src={product.img || "/noavatar.png"} alt="noavatar" fill />
        </div>
        {product.title}
      </div>
      <div className="flex-[3] bg-bgSoft p-5 rounded-lg">
        <form action={updateProduct} className="flex flex-col">
          <input type="hidden" name="id" value={product._id} />
          <label className="text-sm">Title</label>
          <input
            type="text"
            // placeholder="title"
            placeholder={product.title}
            name="title"
            className="p-5 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white my-2"
          />
          <label className="text-sm">Price</label>
          <input
            type="number"
            // placeholder="price"
            name="price"
            placeholder={product.price}
            className="p-5 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white my-2"
          />
          <label className="text-sm">Stock</label>
          <input
            type="number"
            // placeholder="Stock"
            name="stock"
            placeholder={product.stock}
            className="p-5 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white my-2"
          />
          <label className="text-sm">Color</label>
          <input
            type="text"
            // placeholder="Color"
            name="color"
            placeholder={product.color}
            className="p-5 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white my-2"
          />
          <label className="text-sm">Size</label>
          <input
            type="text"
            // placeholder="Size"
            name="size"
            placeholder={product.size}
            className="p-5 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white my-2"
          />
          <label>Category</label>
          <select
            name="cat"
            id="cat"
            className="w-5/12 p-8 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-md mb-8"
          >
            <option value="general">Choose a Category</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <label className="text-sm">Description</label>
          <textarea
            name="desc"
            id="desc"
            placeholder={product.desc}
            rows={8}
            className="w-full p-2 bg-[#151c2c] text-white border-2 border-lightBlack rounded-md mb-8 my-2"
          ></textarea>
          <button
            type="submit"
            className="p-5 w-full bg-teal-500 text-white border-none rounded-md cursor-pointer mt-5"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
