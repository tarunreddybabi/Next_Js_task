import Image from "next/image";

export default function SingleProductPage() {
  return (
    <div className="flex gap-12 mt-5">
      <div className="flex-[1] bg-bgSoft p-5 rounded-lg font-bold text-textSoft max-h-max">
        <div className="w-full h-72 relative rounded-lg overflow-hidden mb-5">
          <Image src="/noavatar.png" alt="noavatar" fill />
        </div>
        Product name
      </div>
      <div className="flex-[3] bg-bgSoft p-5 rounded-lg">
        <form className="flex flex-col">
          <label className="text-sm">Title</label>
          <input
            type="text"
            placeholder="title"
            name="title"
            className="p-5 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white my-2"
          />
          <label className="text-sm">Price</label>
          <input
            type="number"
            placeholder="price"
            name="price"
            className="p-5 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white my-2"
          />
          <label className="text-sm">Stock</label>
          <input
            type="number"
            placeholder="Stock"
            name="stock"
            className="p-5 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white my-2"
          />
          <label className="text-sm">Color</label>
          <input
            type="text"
            placeholder="Color"
            name="color"
            className="p-5 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white my-2"
          />
          <label className="text-sm">Size</label>
          <input
            type="text"
            placeholder="Size"
            name="size"
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
            placeholder="description"
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
}
