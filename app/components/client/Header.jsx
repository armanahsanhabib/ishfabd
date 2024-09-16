import CategoriesMenu from "./CategoriesMenu";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="flex flex-col border-b border-gray-100">
      <div className="top_bar bg-gray-50">
        <div className="container mx-auto flex justify-between px-2 py-3 sm:px-4 sm:py-4 md:px-8">
          <CategoriesMenu />
          <NavLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
