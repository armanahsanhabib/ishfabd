import { addProduct } from "@/app/lib/product-actions";
import Link from "next/link";
import Header from "../../../header";
import AddProductButton from "./add-button";
import DragAndDropImageUpload from "./image-selection";

const page = () => {
  return (
    <div>
      <Header title={"নতুন প্রোডাক্ট এড করুন"} />
      <div className="main flex h-[calc(100vh-56px)] flex-col gap-4 overflow-auto p-4">
        <form action={addProduct} className="space-y-3 rounded-md bg-white p-8">
          <h3 className="text-lg font-semibold">প্রোডাক্ট ডিটেইলস</h3>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <DragAndDropImageUpload />
            <div className="details space-y-3 rounded-md border border-gray-200 bg-gray-50 p-6 pt-4">
              <div className="item space-y-1">
                <label htmlFor="code" className="text-sm text-gray-600">
                  প্রোডাক্ট কোড
                </label>
                <input
                  type="number"
                  name="code"
                  id="code"
                  className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-blue-500"
                  placeholder="প্রোডাক্ট কোড লিখুন..."
                  required
                />
              </div>
              <div className="item space-y-1">
                <label htmlFor="name" className="text-sm text-gray-600">
                  প্রোডাক্টের নাম
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-blue-500"
                  placeholder="প্রোডাক্টের বিস্তারিত নাম লিখুন..."
                  required
                />
              </div>
              <div className="item space-y-1">
                <label htmlFor="category" className="text-sm text-gray-600">
                  ক্যাটেগরি
                </label>
                <select
                  name="category"
                  id="category"
                  defaultValue={""}
                  className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-blue-500"
                  required
                >
                  <option value="" disabled>
                    ক্যাটেগরি সিলেক্ট করুন
                  </option>
                  <option value="category1">ক্যাটেগরি 1</option>
                  <option value="category2">ক্যাটেগরি 2</option>
                  <option value="category3">ক্যাটেগরি 3</option>
                  <option value="category4">ক্যাটেগরি 4</option>
                  <option value="category5">ক্যাটেগরি 5</option>
                  <option value="category6">ক্যাটেগরি 6</option>
                  <option value="category7">ক্যাটেগরি 7</option>
                  <option value="category8">ক্যাটেগরি 8</option>
                </select>
              </div>
              <div className="item space-y-1">
                <label htmlFor="cost" className="text-sm text-gray-600">
                  ক্রয়মূল্য
                </label>
                <input
                  type="number"
                  name="cost"
                  id="cost"
                  className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-blue-500"
                  placeholder="ক্রয়মূল্য লিখুন..."
                  required
                />
              </div>
              <div className="item space-y-1">
                <label htmlFor="price" className="text-sm text-gray-600">
                  বিক্রয়মূল্য
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-blue-500"
                  placeholder="বিক্রয়মূল্য লিখুন..."
                  required
                />
              </div>
              <div className="item space-y-1">
                <label
                  htmlFor="discountPrice"
                  className="text-sm text-gray-600"
                >
                  ডিসকাউন্ট মূল্য
                </label>
                <input
                  type="number"
                  name="discountPrice"
                  id="discountPrice"
                  className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-blue-500"
                  placeholder="বিক্রয়মূল্য লিখুন..."
                />
              </div>
              <div className="item space-y-1">
                <label htmlFor="currentStock" className="text-sm text-gray-600">
                  বর্তমান স্টক
                </label>
                <input
                  type="number"
                  name="currentStock"
                  id="currentStock"
                  className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-blue-500"
                  placeholder="স্টকের পরিমান লিখুন..."
                  required
                />
              </div>
              <div className="item space-y-1">
                <label htmlFor="tags" className="text-sm text-gray-600">
                  প্রোডাক্ট ট্যাগ
                </label>
                <input
                  type="text"
                  name="tags"
                  id="tags"
                  className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-blue-500"
                  placeholder="প্রোডাক্ট ট্যাগ লিখুন (',' কমা দিয়ে)..."
                  required
                />
              </div>
              <div className="item space-y-1">
                <label htmlFor="description" className="text-sm text-gray-600">
                  প্রোডাক্টের বিবরণ
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="block h-72 w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-blue-500"
                  placeholder="প্রোডাক্টের বিস্তারিত বিবরণ লিখুন..."
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="buttons flex justify-end gap-5">
            {/* <button
              type="button"
              className="rounded-md bg-blue-500 px-5 py-2 font-medium text-white hover:bg-blue-600 hover:shadow-md hover:shadow-blue-300"
            >
              যোগ করুন
            </button> */}
            <Link
              href={"/admin/dashboard/products"}
              className="rounded-md bg-orange-500 px-5 py-2 font-medium text-white hover:bg-orange-600 hover:shadow-md hover:shadow-orange-300"
            >
              বাতিল করুন
            </Link>
            <AddProductButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
