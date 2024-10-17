import Image from "next/image";

export default function SingleUserPage() {
  return (
    <div className="flex gap-12 mt-5">
      <div className="flex-[1] bg-bgSoft p-5 rounded-lg font-bold text-textSoft max-h-max">
        <div className="w-full h-72 relative rounded-lg overflow-hidden mb-5">
          <Image src="/noavatar.png" alt="noavatar" fill />
        </div>
        Ramesh
      </div>
      <div className="flex-[3] bg-bgSoft p-5 rounded-lg">
        <form className="flex flex-col">
          <label className="text-sm">Username</label>
          <input
            type="text"
            placeholder="Ramesh"
            name="username"
            className="p-5 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white my-2"
          />
          <label className="text-sm">Email</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="p-5 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white my-2"
          />
          <label className="text-sm">Password</label>
          <input
            type="password"
            placeholder="***"
            name="password"
            className="p-5 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white my-2"
          />
          <label className="text-sm">Phone</label>
          <input
            type="number"
            placeholder="1234567890"
            name="phone"
            className="p-5 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white my-2"
          />
          <label className="text-sm">Address</label>
          <textarea
            name="address"
            id="address"
            placeholder="address"
            rows={8}
            className="w-full p-2 bg-[#151c2c] text-white border-2 border-lightBlack rounded-md mb-8 my-2"
          ></textarea>
          <label className="text-sm" >Is Admin?</label>
          <select className="p-5 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white my-2">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label className="text-sm" >Is Active?</label>
          <select className="p-5 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white my-2">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <button type="submit" className="p-5 w-full bg-teal-500 text-white border-none rounded-md cursor-pointer mt-5">Update</button>
        </form>
      </div>
    </div>
  );
}
