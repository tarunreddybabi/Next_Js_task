import { addUser } from "@/lib/actions";

export default function AddUserPage() {
  return (
    <div className="bg-bgSoft p-5 rounded-lg mt-5">
      <form action={addUser} className="flex flex-wrap justify-between">
        <input
          type="text"
          placeholder="username"
          name="username"
          required
          className="p-8 w-5/12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-md mb-8"
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          className="p-8 w-5/12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-md mb-8 "
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="p-8 w-5/12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-md mb-8"
        />
        <input
          type="number"
          placeholder="phone"
          name="phone"
          className="p-8 w-5/12 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-md mb-8"
        />
        <select
          name="isAdmin"
          id="isAdmin"
          className="w-5/12 p-8 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-md mb-8"
        >
          <option value="false" selected>
            Is Admin?
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <select
          name="isActive"
          id="isActive"
          className="w-5/12 p-8 bg-[#151c2c] text-white border-2 border-[#2e374a] rounded-md mb-8"
        >
          <option value="false" selected>Is Active?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows={16}
          placeholder="address"
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
