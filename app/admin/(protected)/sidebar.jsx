import Link from "next/link";
import { AiOutlineInbox } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuUsers } from "react-icons/lu";
import { MdOutlinePayments } from "react-icons/md";
import NavLink from "./navlink";

const Sidebar = () => {
  const links = [
    {
      icon: <GoHome />,
      text: "ড্যাশবোর্ড",
      link: "/admin/dashboard",
    },
    {
      icon: <HiOutlineShoppingBag />,
      text: "অর্ডারস",
      link: "/admin/dashboard/orders",
    },
    {
      icon: <MdOutlinePayments />,
      text: "পেমেন্টস",
      link: "/admin/dashboard/payments",
    },
    {
      icon: <AiOutlineInbox />,
      text: "প্রোডাক্টস",
      link: "/admin/dashboard/products",
    },
    {
      icon: <LuUsers />,
      text: "কাস্টমারস",
      link: "/admin/dashboard/customers",
    },
  ];

  return (
    <div className="flex h-full w-64 flex-col border border-gray-200 bg-white px-3 *:border-b *:py-4 first:*:py-2 last:*:border-none">
      <section className="logo text-center">
        <Link href={"/admin/dashboard"}>
          <h3 className="text-xl font-bold sm:text-2xl">
            <span className="text-orange-500">ইশফাবিডি</span>.কম
          </h3>
          <p className="text-sm text-slate-600">
            বাংলাদেশের সর্ববৃহৎ ড্রাই ফ্রুটস শপ
          </p>
        </Link>
      </section>
      <section className="space-y-2">
        {links.map((item, index) => (
          <NavLink item={item} key={index} />
        ))}
      </section>
    </div>
  );
};

export default Sidebar;
