import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const ActionsMenu = () => {
  return (
    <div className="flex items-center gap-5 text-2xl">
      <Link href={"/my-cart"} className="cart relative text-green-600">
        <BsCart2 />
        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-[11px] font-medium text-white">
          0
        </span>
      </Link>
      <Link href={"/profile"} className="profile rounded-full">
        <FaUserCircle className="text-green-600" />
      </Link>
    </div>
  );
};

export default ActionsMenu;
