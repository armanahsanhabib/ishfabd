import NavLinks from './NavLinks'

const Header = () => {
  return (
    <header className="flex flex-col">
      <div className="top_bar bg-green-100">
        <div className="container mx-auto flex justify-between px-2 py-3 sm:px-4 sm:py-4 md:px-8">
          <div className="logo sm:text-xl">
            <span className="font-semibold text-green-800">Minaret</span>{' '}
            <span>Shop</span>
          </div>
          <NavLinks />
          <div className="contact hidden font-medium text-green-800 lg:block">
            Call us:{' '}
            <a
              href="tel:+8801704428814"
              className="hover:text-green-600 hover:underline"
            >
              +880 1704-428814
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
