"use client";

import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import CategoriesMenu from "./CategoriesMenu";
import NavLinks from "./NavLinks";

const Header = () => {
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  return (
    <header className="flex flex-col border-b border-gray-100">
      <div className="top_bar bg-gray-50">
        <div className="container mx-auto flex justify-between px-2 py-3 sm:px-4 sm:py-4 md:px-8">
          <CategoriesMenu
            isCategoryMenuOpen={isCategoryMenuOpen}
            setIsCategoryMenuOpen={setIsCategoryMenuOpen}
          />
          <NavLinks
            isNavMenuOpen={isNavMenuOpen}
            setIsNavMenuOpen={setIsNavMenuOpen}
          />
        </div>
      </div>
      {isCategoryMenuOpen && (
        <div className="fixed left-0 top-0 z-[60] h-full w-64 border-r bg-gray-100 p-3 shadow">
          <div className="header mb-2 flex items-center justify-between border-b pb-1 text-lg font-medium">
            <h3 className="text-orange-500">সমস্ত ক্যাটাগরি</h3>
            <button
              type="button"
              className="rounded p-1 hover:bg-white hover:text-red-500"
              onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
            >
              <LiaTimesSolid />
            </button>
          </div>
          <ul className="list-inside list-disc space-y-2 hover:*:text-orange-500 hover:*:underline">
            <li>
              <a href="category1">ক্যাটাগরি নাম 1</a>
            </li>
            <li>
              <a href="category2">ক্যাটাগরি নাম 2</a>
            </li>
            <li>
              <a href="category3">ক্যাটাগরি নাম 3</a>
            </li>
            <li>
              <a href="category4">ক্যাটাগরি নাম 4</a>
            </li>
            <li>
              <a href="category5">ক্যাটাগরি নাম 5</a>
            </li>
            <li>
              <a href="category6">ক্যাটাগরি নাম 6</a>
            </li>
            <li>
              <a href="category7">ক্যাটাগরি নাম 7</a>
            </li>
            <li>
              <a href="category8">ক্যাটাগরি নাম 8</a>
            </li>
            <li>
              <a href="category9">ক্যাটাগরি নাম 9</a>
            </li>
            <li>
              <a href="category10">ক্যাটাগরি নাম 10</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
