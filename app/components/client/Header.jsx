"use client";

import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { RiArrowRightDoubleLine } from "react-icons/ri";
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
        <div className="fixed left-0 top-0 z-[60] h-full w-64 border-r bg-gray-100 shadow">
          <div className="header flex items-center justify-between border-b p-3 text-lg font-medium">
            <h3 className="flex items-center gap-2 text-orange-500">
              <MdFormatListBulletedAdd className="text-xl" />{" "}
              <span className="mt-1">সমস্ত ক্যাটাগরি</span>
            </h3>
            <button
              type="button"
              className="rounded p-1 hover:bg-white hover:text-red-500"
              onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
            >
              <LiaTimesSolid />
            </button>
          </div>
          <ul className="text-sm *:border-b *:border-gray-200 *:bg-white hover:*:text-orange-500 sm:text-base">
            <li>
              <a className="flex items-center gap-2 px-3 py-2" href="category1">
                <RiArrowRightDoubleLine />
                বাদাম, কাজু বাদাম
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 px-3 py-2" href="category1">
                <RiArrowRightDoubleLine />
                স্পেশাল খাঁটি মধু
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 px-3 py-2" href="category1">
                <RiArrowRightDoubleLine />
                আখরোট
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 px-3 py-2" href="category1">
                <RiArrowRightDoubleLine />
                কিসমিস, ছোলা, ভুষি
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
