import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import { MdAccountBox, MdLocationOn, MdSettings } from "react-icons/md";
import SignoutButton from "./signout-button";

export default function MyAccountLayout({ children }) {
  return (
    <div className="bg-gray-50 pb-16 pt-4">
      <div className="container mx-auto flex min-h-[50vh] flex-col gap-5 px-2 sm:flex-row sm:px-4 md:px-8">
        <div className="nav flex flex-none overflow-hidden rounded-md border border-gray-200 bg-white text-sm *:flex *:items-center *:gap-1 *:border-b *:px-3 *:py-2 last:*:border-none hover:*:bg-gray-100 last:hover:*:bg-rose-500 last:hover:*:text-white sm:w-52 sm:flex-col [&>*:nth-child(5)]:hover:bg-white">
          <Link href={"/my-account"}>
            <MdAccountBox className="text-lg text-gray-600" /> আমার একাউন্ট
          </Link>
          <Link href={"/my-account/orders"}>
            <IoMdCart className="text-lg text-gray-600" />
            পূর্ববর্তী অর্ডার সমূহ
          </Link>
          <Link href={"/my-account/address"}>
            <MdLocationOn className="text-lg text-gray-600" />
            ডেলিভারি এড্রেস
          </Link>
          <Link href={"/my-account/settings"}>
            <MdSettings className="text-lg text-gray-600" />
            একাউন্ট সেটিংস
          </Link>
          <div className="hidden flex-grow hover:bg-transparent sm:block"></div>
          <SignoutButton />
        </div>
        <div className="flex-grow rounded-md border border-gray-200 bg-white p-3 sm:p-5">
          {children}
        </div>
      </div>
    </div>
  );
}
