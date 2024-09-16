import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const ActionsMenu = () => {
  return (
    <div className="flex items-center gap-2 text-2xl text-gray-800 sm:gap-5 sm:text-3xl">
      <Link href={"/search"} className="search rounded-full sm:hidden">
        <IoSearch className="hover:drop-shadow-lg" />
      </Link>
      <div className="cart relative">
        <Link href={"/my-cart"}>
          <BsCart2 className="hover:drop-shadow-lg" />
        </Link>
        <div className="absolute -right-1 -top-1 h-4 w-4 place-content-center rounded-full bg-orange-500 text-center text-xs font-medium text-white shadow sm:h-5 sm:w-5 sm:text-sm">
          0
        </div>
      </div>
      <Link href={"/profile"} className="profile rounded-full">
        <FaUserCircle className="hover:drop-shadow-lg" />
      </Link>
    </div>
  );
};

export default ActionsMenu;
