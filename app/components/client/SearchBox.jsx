import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div className="search relative flex-grow">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="search here..."
        className="w-full rounded-md border py-1 pl-8 text-sm focus:shadow-inner focus:outline focus:outline-green-500 sm:py-2 sm:focus:outline-2"
      />
      <button
        type="button"
        className="absolute left-2 top-1/2 w-max -translate-y-1/2 hover:text-green-600 sm:right-4"
      >
        <IoSearch className="text-lg sm:text-xl" />
      </button>
    </div>
  );
};

export default SearchBox;
