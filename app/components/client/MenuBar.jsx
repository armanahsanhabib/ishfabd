import ActionsMenu from './ActionsMenu'
import CategoriesMenu from './CategoriesMenu'
import SearchBox from './SearchBox'

const MenuBar = () => {
  return (
    <div className="search_bar sticky top-0 z-50 h-auto w-full border-b bg-white">
      <div className="container mx-auto flex items-center justify-between gap-3 px-2 py-3 sm:gap-8 sm:px-4 sm:py-4 md:px-8 lg:gap-16">
        <CategoriesMenu />
        <SearchBox />
        <ActionsMenu />
      </div>
    </div>
  )
}

export default MenuBar
