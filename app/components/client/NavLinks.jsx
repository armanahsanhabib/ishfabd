import clsx from "clsx";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";

const NavLinks = ({ isNavMenuOpen, setIsNavMenuOpen }) => {
  const links = [
    {
      link: "/",
      title: "হোম",
    },
    {
      link: "/all-products",
      title: "আমাদের প্রোডাক্টস",
    },
    {
      link: "/my-account",
      title: "আমার প্রোফাইল",
    },
    {
      link: "/my-orders",
      title: "অর্ডার",
    },
  ];

  return (
    <nav>
      <ul className={clsx("hidden items-center gap-8 sm:flex")}>
        {links.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className="font-medium transition-all hover:text-orange-500 hover:underline"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="nav_icon block text-xl sm:hidden"
        onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
      >
        <FaBars />
      </button>
      {isNavMenuOpen && (
        <div className="fixed right-0 top-0 z-[60] h-full w-64 border-r bg-gray-100 p-3 shadow">
          <div className="header mb-2 flex items-center justify-between border-b pb-1 text-lg font-medium">
            <h3 className="text-orange-500">সমস্ত ক্যাটাগরি</h3>
            <button
              type="button"
              className="rounded p-1 hover:bg-white hover:text-red-500"
              onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
            >
              <LiaTimesSolid />
            </button>
          </div>
          <ul className="list-inside list-disc space-y-2 hover:*:text-orange-500 hover:*:underline">
            {links.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="font-medium transition-all hover:text-orange-500 hover:underline"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavLinks;
