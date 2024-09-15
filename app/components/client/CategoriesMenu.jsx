import { HiOutlineBars3CenterLeft } from 'react-icons/hi2'

const CategoriesMenu = () => {
  return (
    <div className="categories_menu">
      <button
        type="button"
        className="flex items-center gap-2 font-medium text-green-600 transition-all"
      >
        <div className="icon">
          <HiOutlineBars3CenterLeft className="text-2xl" />
        </div>
        <div className="text hidden sm:block">All Categories</div>
      </button>
    </div>
  )
}

export default CategoriesMenu
