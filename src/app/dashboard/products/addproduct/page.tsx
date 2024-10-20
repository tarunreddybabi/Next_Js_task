import { addProduct } from "@/lib/actions";

export default function AddProductPage() {
  return (
    <div className="bg-bgSoft p-5 rounded-lg mt-5">
      <form action={addProduct} className="flex flex-wrap justify-between">
        <input
          type="text"
          placeholder="title"
          name="title"
          required
          className="p-8 w-5/12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-md mb-8"
        />
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
        <input
          type="number"
          placeholder="price"
          name="price"
          className="p-8 w-5/12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-md mb-8 "
        />
        <input
          type="number"
          placeholder="stock"
          name="stock"
          className="p-8 w-5/12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-md mb-8"
        />
        <input
          type="text"
          placeholder="color"
          name="color"
          className="p-8 w-5/12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-md mb-8"
        />
        <input
          type="text"
          placeholder="size"
          name="size"
          className="p-8 w-5/12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-md mb-8"
        />
        <textarea
          name="desc"
          id="desc"
          rows={10}
          placeholder="Description"
          className="w-full p-8 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-md mb-8"
        ></textarea>
        <button
          type="submit"
          className="w-full p-8 bg-teal-500 text-white border-none rounded-md cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
