import clsx from "clsx";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const NavLinks = () => {
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
      <div className="nav_icon block text-xl sm:hidden">
        <FaBars />
      </div>
    </nav>
  );
};

export default NavLinks;
