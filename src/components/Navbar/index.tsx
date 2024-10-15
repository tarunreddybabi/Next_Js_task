"use client";

import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="flex justify-between items-center rounded-lg bg-bgSoft font-bold p-5">
      <div className="capitalize text-textSoft">{pathName.split("/").pop()}</div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2.5 bg-lightBlack p-2.5 rounded-lg">
          <MdSearch />
          <input className="bg-transparent border-none text-white" type="text" placeholder="Search..." />
        </div>
        <div className="flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
}
