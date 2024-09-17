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
      link: "/products",
      title: "আমাদের প্রোডাক্টস",
    },
    {
      link: "/my-account",
      title: "আমার প্রোফাইল",
    },
    {
      link: "/my-account/orders",
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
        <div className="fixed right-0 top-0 z-[60] h-full w-64 border-r bg-gray-100 shadow">
          <div className="header flex items-center justify-between border-b p-3 text-lg font-medium">
            <h3 className="text-orange-500">ন্যাভ মেনু</h3>
            <button
              type="button"
              className="rounded p-1 hover:bg-white hover:text-red-500"
              onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
            >
              <LiaTimesSolid />
            </button>
          </div>
          <ul className="*:border-b *:border-gray-200 *:bg-white hover:*:text-orange-500">
            {links.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="inline-block w-full px-3 py-2 font-medium transition-all hover:text-orange-500"
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
