"use client";

import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { TbPointFilled } from "react-icons/tb";

const Filters = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [showCategoryFilter, setShowCategoryFilter] = useState(true);
  const [showPriceFilter, setShowPriceFilter] = useState(true);
  const [showRatingFilter, setShowRatingFilter] = useState(true);
  const [showSortBy, setShowSortBy] = useState(true);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const categories = [
    { name: "RoboLab Products", url: "robolab-products" },
    { name: "Basic Components", url: "basic-components" },
    { name: "Robotics & Arduino", url: "robotics-arduino" },
    { name: "Power Source", url: "power-source" },
    { name: "All Modules", url: "all-modules" },
    { name: "Project Kits", url: "project-kits" },
    { name: "Drone/Plane Parts", url: "drone-plane" },
    { name: "Micro-controller & IC", url: "micro-controller-and-ic" },
    { name: "Tools and Accessories", url: "tools-accessories" },
  ];

  const ratings = [5, 4, 3, 2, 1];

  const sortOptions = [
    { label: "Rating", value: "rating" },
    { label: "Newest", value: "new" },
    { label: "Price (Low to High)", value: "price-asc" },
    { label: "Price (High to Low)", value: "price-desc" },
    { label: "Discount", value: "discount" },
  ];

  const handleSearch = (key, value) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleCategoryClick = (category) => {
    handleSearch("category", category);
  };

  const handlePriceRangeSubmit = () => {
    if (minPrice || maxPrice) {
      handleSearch("minPrice", minPrice);
      handleSearch("maxPrice", maxPrice);
    }
  };

  const handleRatingClick = (rating) => {
    handleSearch("rating", rating);
  };

  const handleSortByChange = (sortBy) => {
    handleSearch("sort", sortBy);
  };

  const clearFilters = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("category");
    params.delete("minPrice");
    params.delete("maxPrice");
    params.delete("rating");
    params.delete("sort");
    router.replace(`${pathname}?${params.toString()}`);
  };

  const selectedCategory = searchParams.get("category");
  const selectedRating = searchParams.get("rating");
  const selectedSort = searchParams.get("sort");

  return (
    <>
      {/* Category Filter */}
      <div className="rounded-md border bg-gray-50 px-5 py-3">
        <div className="heading">
          <button
            className="flex w-full items-center justify-between"
            onClick={() => setShowCategoryFilter((prev) => !prev)}
          >
            <h3 className="text-md font-medium">Category</h3>
            <IoMdArrowDropdown
              className={clsx("text-xl transition-transform", {
                "rotate-180": showCategoryFilter,
              })}
            />
          </button>
          {showCategoryFilter && <hr className="mt-2" />}
        </div>
        <ul
          className={clsx("mt-2 flex flex-col text-sm font-light", {
            hidden: !showCategoryFilter,
          })}
        >
          {categories.map((category) => (
            <li key={category.url}>
              <button
                type="button"
                onClick={() => handleCategoryClick(category.url)}
                className={clsx(
                  "my-1 flex w-full items-center gap-2 py-1 text-left",
                  {
                    "font-medium text-blue-600":
                      selectedCategory === category.url,
                  },
                )}
              >
                <TbPointFilled />
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range Filter */}
      <div className="rounded-md border bg-gray-50 px-5 py-3">
        <div className="heading">
          <button
            className="flex w-full items-center justify-between"
            onClick={() => setShowPriceFilter((prev) => !prev)}
          >
            <h3 className="text-md font-medium">Price Range</h3>
            <IoMdArrowDropdown
              className={clsx("text-xl transition-transform", {
                "rotate-180": showPriceFilter,
              })}
            />
          </button>
          {showPriceFilter && <hr className="mt-2" />}
        </div>
        <div
          className={clsx("mt-2 flex flex-col gap-2 text-sm font-light", {
            hidden: !showPriceFilter,
          })}
        >
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Min Price"
              className="w-full rounded-md border px-2 py-1"
            />
            <span>-</span>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max Price"
              className="w-full rounded-md border px-2 py-1"
            />
          </div>
          <button
            onClick={handlePriceRangeSubmit}
            className="mt-2 rounded-md bg-blue-600 py-1 text-white hover:bg-blue-700"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="rounded-md border bg-gray-50 px-5 py-3">
        <div className="heading">
          <button
            className="flex w-full items-center justify-between"
            onClick={() => setShowRatingFilter((prev) => !prev)}
          >
            <h3 className="text-md font-medium">Rating</h3>
            <IoMdArrowDropdown
              className={clsx("text-xl transition-transform", {
                "rotate-180": showRatingFilter,
              })}
            />
          </button>
          {showRatingFilter && <hr className="mt-2" />}
        </div>
        <ul
          className={clsx("mt-2 flex flex-col text-sm font-light", {
            hidden: !showRatingFilter,
          })}
        >
          {ratings.map((rating) => (
            <li key={rating}>
              <button
                type="button"
                onClick={() => handleRatingClick(rating)}
                className={clsx(
                  "my-1 flex w-full items-center gap-2 py-1 text-left",
                  {
                    "font-medium text-blue-600": selectedRating == rating,
                  },
                )}
              >
                <TbPointFilled />
                {rating} Stars & up
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Sort By Filter */}
      <div className="rounded-md border bg-gray-50 px-5 py-3">
        <div className="heading">
          <button
            className="flex w-full items-center justify-between"
            onClick={() => setShowSortBy((prev) => !prev)}
          >
            <h3 className="text-md font-medium">Sort By</h3>
            <IoMdArrowDropdown
              className={clsx("text-xl transition-transform", {
                "rotate-180": showSortBy,
              })}
            />
          </button>
          {showSortBy && <hr className="mt-2" />}
        </div>
        <ul
          className={clsx("mt-2 flex flex-col text-sm font-light", {
            hidden: !showSortBy,
          })}
        >
          {sortOptions.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                onClick={() => handleSortByChange(option.value)}
                className={clsx(
                  "my-1 flex w-full items-center gap-2 py-1 text-left",
                  {
                    "font-medium text-blue-600": selectedSort === option.value,
                  },
                )}
              >
                <TbPointFilled />
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Clear Filters */}
      {(selectedCategory ||
        selectedRating ||
        minPrice ||
        maxPrice ||
        selectedSort) && (
        <button
          type="button"
          onClick={clearFilters}
          className="flex w-full items-center justify-center gap-2 rounded-md border bg-gray-100 py-1 text-center shadow-inner transition-all hover:border-orange-200 hover:bg-orange-100 hover:text-orange-500 hover:shadow"
        >
          <RxCross2 className="text-xl" />
          Clear Filters
        </button>
      )}
    </>
  );
};

export default Filters;
