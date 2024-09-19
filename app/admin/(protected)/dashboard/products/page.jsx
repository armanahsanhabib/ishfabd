import Pagination from "@/app/components/client/pagination";
import { fetchProducts } from "@/app/lib/product-data";
import Image from "next/image";
import Link from "next/link";
import Header from "../../header";

const ProductsPage = async () => {
  const { products, totalPages } = await fetchProducts({});

  return (
    <div>
      <Header title={"প্রোডাক্টস পেজ"} />
      <div className="main flex h-[calc(100vh-56px)] flex-col gap-3 overflow-auto p-4">
        {/* Filters and Button Section */}
        <div className="top flex items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-3 lg:px-5">
          <div className="filters flex items-center gap-4">
            <div className="show rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium">
              <select
                name="qty"
                id="qty"
                defaultValue={""}
                className="bg-transparent px-1 outline-none"
              >
                <option value="" disabled>
                  ক্রমান্বয়ে সাজান
                </option>
                <option value="asc">বড় থেকে ছোট</option>
                <option value="desc">ছোট থেকে বড়</option>
              </select>
            </div>
            <div className="show rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium">
              <select
                name="qty"
                id="qty"
                defaultValue={""}
                className="bg-transparent px-1 outline-none"
              >
                <option value="" disabled>
                  স্ট্যাটাস
                </option>
                <option value="asc">স্টকে আছে</option>
                <option value="desc">স্টকে নেই</option>
              </select>
            </div>
            <div className="show rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium">
              <select
                name="qty"
                id="qty"
                defaultValue={""}
                className="bg-transparent px-1 outline-none"
              >
                <option value="" disabled>
                  তারিখ অনুযায়ী
                </option>
                <option value="asc">সাম্প্রতিক এড করা</option>
                <option value="desc">পুরাতন এড করা</option>
              </select>
            </div>
          </div>
          <div className="button">
            <Link
              href={"/admin/dashboard/products/add-product"}
              className="inline-block rounded bg-blue-500 px-3 py-2 font-medium text-white hover:bg-blue-600"
            >
              + প্রোডাক্ট যোগ করুন
            </Link>
          </div>
        </div>

        {/* Products Section */}
        <div className="products space-y-4 rounded-md border border-gray-200 bg-white p-3 lg:p-5">
          <h3 className="font-semibold">প্রোডাক্টস</h3>

          {/* Table-like layout using flex */}
          <div className="w-full space-y-2">
            {/* Header Row */}
            <div className="sticky -top-4 flex items-center justify-between rounded-md border border-violet-200 bg-violet-500 p-3 font-semibold text-white">
              <div className="w-[40%]">প্রোডাক্ট নাম</div>
              <div className="w-[10%]">ক্রয়মূল্য</div>
              <div className="w-[10%]">বিক্রয়মূল্য</div>
              <div className="w-[10%]">ডিসকাউন্ট মূল্য</div>
              <div className="w-[10%]">মোট স্টক</div>
              <div className="w-[10%]">স্টক আউট</div>
              <div className="w-[10%]">বর্তমান স্টক</div>
              <div className="w-[10%] text-right">অ্যাকশন</div>
            </div>

            {/* Product Rows */}
            {products.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-md border border-gray-200 px-3 py-2"
              >
                <div className="flex w-[40%] items-center gap-2">
                  <p>{item.code}</p>
                  <Image
                    src={item.images[0]}
                    alt="product"
                    height={80}
                    width={80}
                    className="size-10 rounded border border-gray-100"
                  />
                  <p>{item.name}</p>
                </div>
                <div className="w-[10%]">{item.cost?.toFixed(2)}</div>
                <div className="w-[10%]">{item.price?.toFixed(2)}</div>
                <div className="w-[10%]">{item.discountPrice?.toFixed(2)}</div>
                <div className="w-[10%]">{item.currentStock}</div>
                <div className="w-[10%]">null</div>
                <div className="w-[10%]">null</div>
                <div className="w-[10%] text-right">
                  <button className="rounded bg-green-500 px-2 py-1 text-white">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bottom flex items-center justify-between">
            <div className="show rounded-md border border-gray-200 px-3 py-2 text-sm">
              <select
                name="qty"
                id="qty"
                defaultValue={"15"}
                className="px-1 outline-none"
              >
                <option value="15">Show: 15</option>
                <option value="30">Show: 30</option>
                <option value="40">Show: 50</option>
                <option value="100">Show: 100</option>
              </select>
            </div>
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
