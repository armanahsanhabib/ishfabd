"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.link}
      className={`flex items-center gap-2 rounded-md px-3 py-2 hover:bg-violet-100 hover:text-violet-500 ${item.link === pathname && "bg-violet-500 font-semibold text-slate-50 hover:bg-violet-600 hover:text-white"}`}
    >
      <span className={`text-xl`}>{item.icon}</span>
      <span>{item.text}</span>
    </Link>
  );
};

export default NavLink;
