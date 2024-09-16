import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

const CategoriesMenu = ({ isCategoryMenuOpen, setIsCategoryMenuOpen }) => {
  return (
    <div
      className="categories_menu"
      onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
    >
      <button
        type="button"
        className="flex items-center gap-2 font-medium text-green-600 transition-all hover:underline"
      >
        <div className="icon">
          <HiOutlineBars3CenterLeft className="text-2xl" />
        </div>
        <div>সমস্ত ক্যাটাগরি</div>
      </button>
    </div>
  );
};

export default CategoriesMenu;
