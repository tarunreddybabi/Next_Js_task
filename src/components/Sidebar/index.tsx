import {
  MdDashboard,
  MdShoppingBag,
  MdSupervisedUserCircle,
} from "react-icons/md";

import Image from "next/image";
import MenuLink from "../MenuLink";

export default function Sidebar() {
  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        // {
        //   title: "Transactions",
        //   path: "/dashboard/transactions",
        //   icon: <MdAttachMoney />,
        // },
      ],
    },
    // {
    //   title: "Analytics",
    //   list: [
    //     {
    //       title: "Revenue",
    //       path: "/dashboard/revenue",
    //       icon: <MdWork />,
    //     },
    //     {
    //       title: "Reports",
    //       path: "/dashboard/reports",
    //       icon: <MdAnalytics />,
    //     },
    //     {
    //       title: "Teams",
    //       path: "/dashboard/teams",
    //       icon: <MdPeople />,
    //     },
    //   ],
    // },
    // {
    //   title: "User",
    //   list: [
    //     {
    //       title: "Settings",
    //       path: "/dashboard/settings",
    //       icon: <MdOutlineSettings />,
    //     },
    //     {
    //       title: "Help",
    //       path: "/dashboard/help",
    //       icon: <MdHelpCenter />,
    //     },
    //   ],
    // },
  ];
  return (
    <div className="sticky top-10">
      <div className="flex items-center gap-5 mb-5">
        <Image
          className="object-cover rounded-full"
          src="/noavatar.png"
          alt="user"
          width="50"
          height="50"
        />
        <div className="flex flex-col">
          <span className="font-medium">User</span>
          <span className="text-xs text-textSoft">Administration</span>
        </div>
      </div>
      <ul className="">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-textSoft font-bold text-sm my-2.5 mx-0">
              {cat.title}
            </span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      {/* <button className="p-5 flex my-2.5 mx-0 items-center gap-2.5 hover:cursor-pointer rounded-lg border-none w-full	bg-none hover:bg-lightBlack">
        <MdLogout /> Logout
      </button> */}
    </div>
  );
}
