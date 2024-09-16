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

  const categories = [
    { name: "RoboLab Products", url: "robolab-products" },
    { name: "Basic Components", url: "basic-components" },
    { name: "Robotics & Arduiono", url: "robotics-arduino" },
    { name: "Power Source", url: "power-source" },
    { name: "All Modules", url: "all-modules" },
    { name: "Project Kits", url: "project-kits" },
    { name: "Drone/Plane Parts", url: "drone-plane" },
    { name: "Micro-controler & IC", url: "micro-controller-and-ic" },
    { name: "Tools and Accessories", url: "tools-accessories" },
  ];

  const priceRanges = [
    { label: "Under 100 Tk", value: "under-100" },
    { label: "100 Tk - 500 Tk", value: "100-500" },
    { label: "501 Tk - 1000 Tk", value: "501-1000" },
    { label: "1001 Tk - 1500 Tk", value: "1001-1500" },
    { label: "1501 Tk - 3000 Tk", value: "1501-3000" },
    { label: "3001 Tk - 5000 Tk", value: "3001-5000" },
    { label: "Above 5000 Tk", value: "above-5000" },
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

  const handlePriceRangeClick = (price) => {
    handleSearch("price", price);
  };

  const clearFilters = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("category");
    params.delete("price");
    router.replace(`${pathname}?${params.toString()}`);
  };

  const selectedCategory = searchParams.get("category");
  const selectedPrice = searchParams.get("price");

  return (
    <div className="filter_container hidden w-[200px] flex-col gap-3 text-gray-700 lg:flex lg:w-[280px]">
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
        <ul
          className={clsx("mt-2 flex flex-col text-sm font-light", {
            hidden: !showPriceFilter,
          })}
        >
          {priceRanges.map((priceRange) => (
            <li key={priceRange.value}>
              <button
                type="button"
                onClick={() => handlePriceRangeClick(priceRange.value)}
                className={clsx(
                  "my-1 flex w-full items-center gap-2 py-1 text-left",
                  {
                    "font-medium text-blue-600":
                      selectedPrice === priceRange.value,
                  },
                )}
              >
                <TbPointFilled />
                {priceRange.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {(selectedCategory || selectedPrice) && (
        <button
          type="button"
          onClick={clearFilters}
          className="flex w-full items-center justify-center gap-2 rounded-md border bg-white py-2 text-center transition-all hover:bg-amber-600 hover:text-white"
        >
          <RxCross2 className="text-xl" />
          Clear Filters
        </button>
      )}
    </div>
  );
};

export default Filters;
