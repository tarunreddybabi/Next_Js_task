import { updateUser } from "@/lib/actions";
import { fetchUser } from "@/lib/data";
import Image from "next/image";

const SingleUserPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className="flex gap-12 mt-5">
      <div className="flex-[1] bg-bgSoft p-5 rounded-lg font-bold text-textSoft max-h-max">
        <div className="w-full h-72 relative rounded-lg overflow-hidden mb-5">
          <Image src={user.img || "/noavatar.png"} alt="noavatar" fill />
        </div>
        {user.username}
      </div>
      <div className="flex-[3] bg-bgSoft p-5 rounded-lg">
        <form action={updateUser} className="flex flex-col">
          <input type="hidden" name="id" value={user._id} />
          <label className="text-sm">Username</label>
          <input
            type="text"
            placeholder={user.username}
            name="username"
            className="p-5 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white my-2"
          />
          <label className="text-sm">Email</label>
          <input
            type="email"
            placeholder={user.email}
            name="email"
            className="p-5 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white my-2"
          />
          {/* <label className="text-sm">Password</label>
          <input
            type="password"
            name="password"
            className="p-5 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white my-2"
          /> */}
          <label className="text-sm">Phone</label>
          <input
            type="number"
            placeholder={user.phone}
            name="phone"
            className="p-5 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white my-2"
          />
          <label className="text-sm">Address</label>
          <textarea
            name="address"
            id="address"
            placeholder={user.address}
            // value={user.address}
            rows={8}
            className="w-full p-2 bg-[#151c2c] text-white border-2 border-lightBlack rounded-md mb-8 my-2"
          ></textarea>
          <label className="text-sm">Is Admin?</label>
          <select name="isAdmin" className="p-5 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white my-2">
            <option value="true" selected={user.isAdmin === "true"}>
              Yes
            </option>
            <option value="false" selected={user.isAdmin === "false"}>
              No
            </option>
          </select>
          <label className="text-sm">Is Active?</label>
          <select name="isActive" className="p-5 border-2 border-lightBlack rounded-md bg-[#151c2c] text-white my-2">
            <option value="true" selected={user.isActive === "true"}>
              Yes
            </option>
            <option value="false" selected={user.isActive === "false"}>
              No
            </option>
          </select>
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

export default SingleUserPage;
