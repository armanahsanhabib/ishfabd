import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Header = ({ title }) => {
  return (
    <div className="header flex items-center justify-between bg-gray-50 px-8 py-3 shadow">
      <div className="start">
        <h3 className="text-xl font-bold text-violet-500">{title}</h3>
      </div>
      <div className="end flex items-center gap-5">
        <Link
          href={"/admin/dashboard/orders"}
          className="orders relative text-2xl"
        >
          <HiOutlineShoppingBag />
          <span className="absolute right-0 top-0 ms-1 flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-rose-500"></span>
          </span>
        </Link>
        <div className="user flex items-center gap-2">
          <div className="size-8 rounded-full bg-gray-300"></div>
          <div className="flex flex-col">
            <span className="font-semibold leading-none text-slate-800">
              আহসান হাবিব
            </span>
            <span className="text-xs leading-none text-slate-600">
              Admin, Ishfabd
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
