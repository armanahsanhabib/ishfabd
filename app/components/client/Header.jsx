import { LuNut } from "react-icons/lu";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="flex flex-col border-b border-gray-100">
      <div className="top_bar bg-gray-50">
        <div className="container mx-auto flex justify-between px-2 py-3 sm:px-4 sm:py-4 md:px-8">
          <div className="logo flex items-center gap-2 sm:text-xl">
            <LuNut className="rotate-12 text-3xl text-amber-600 hover:animate-pulse" />
            <span className="font-bold">Ishfa</span>{" "}
            <span className="font-medium">bd</span>
          </div>
          <NavLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
