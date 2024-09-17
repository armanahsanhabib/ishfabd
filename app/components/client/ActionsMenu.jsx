import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

const ActionsMenu = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex items-center gap-5 text-2xl text-gray-800 sm:text-3xl">
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
      <Link href={"/my-account"}>
        <Image
          src={session?.user.image || "/avatar-default.png"}
          alt="User Profile"
          width={50}
          height={50}
          className="size-7 rounded-full ring-gray-600 sm:ring-2 sm:ring-offset-1"
        />
      </Link>
    </div>
  );
};

export default ActionsMenu;
