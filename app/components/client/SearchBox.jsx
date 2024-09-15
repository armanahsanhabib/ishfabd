import { IoSearch } from 'react-icons/io5'

const SearchBox = () => {
  return (
    <div className="search relative flex-grow">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="search here..."
        className="w-full rounded-md border px-2 py-1 text-sm focus:outline focus:outline-green-500 sm:px-4 sm:py-2 sm:focus:outline-2"
      />
      <button
        type="button"
        className="absolute right-2 top-1/2 -translate-y-1/2 hover:text-green-600 sm:right-4"
      >
        <IoSearch className="text-lg sm:text-xl" />
      </button>
    </div>
  )
}

export default SearchBox
