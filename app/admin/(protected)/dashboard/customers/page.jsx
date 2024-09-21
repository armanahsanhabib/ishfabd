import Pagination from "@/app/components/client/pagination";
import { fetchCustomers } from "@/app/lib/userdata";
import Image from "next/image";
import Link from "next/link";
import Header from "../../header";

const CustomersPage = async () => {
  const { customers, totalPages } = await fetchCustomers({});

  return (
    <div>
      <Header title={"আমাদের কাস্টমারস"} />
      <div className="main flex h-[calc(100vh-56px)] flex-col gap-3 overflow-auto p-4">
        {/* Filters and Button Section */}
        <div className="top flex items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-3 lg:px-5">
          <div className="filters flex items-center gap-4">
            <div className="show rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium">
              <select
                name="sort"
                id="sort"
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
                name="status"
                id="status"
                defaultValue={""}
                className="bg-transparent px-1 outline-none"
              >
                <option value="" disabled>
                  স্ট্যাটাস
                </option>
                <option value="instock">স্টকে আছে</option>
                <option value="outofstock">স্টকে নেই</option>
              </select>
            </div>
            <div className="show rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium">
              <select
                name="date"
                id="date"
                defaultValue={""}
                className="bg-transparent px-1 outline-none"
              >
                <option value="" disabled>
                  তারিখ অনুযায়ী
                </option>
                <option value="newest">সাম্প্রতিক এড করা</option>
                <option value="oldest">পুরাতন এড করা</option>
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

        {/* Customers Section */}
        <div className="customers space-y-4 rounded-md border border-gray-200 bg-white p-3 lg:p-5">
          <h3 className="font-semibold">কাস্টমারস</h3>

          {/* Table-like layout using flex */}
          <div className="w-full space-y-2">
            {/* Header Row */}
            <div className="sticky -top-4 flex items-center justify-between rounded-md border border-violet-200 bg-violet-500 p-3 font-semibold text-white">
              <div className="w-[20%]">কাস্টমার</div>
              <div className="w-[15%]">ইমেইল</div>
              <div className="w-[15%]">মোবাইল</div>
              <div className="w-[15%]">ঠিকানা</div>
              <div className="w-[10%] text-center">কার্ট আইটেম</div>
              <div className="w-[10%] text-center">মোট অর্ডারস</div>
              <div className="w-[10%] text-center">মোট ব্যয়</div>
              <div className="w-[10%] text-right">অ্যাকশন</div>
            </div>

            {/* Customer Rows */}
            {customers.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-md border border-gray-200 px-3 py-2"
              >
                <div className="flex w-[20%] items-center gap-2">
                  <Image
                    src={item.image || "/profile-placeholder.jpg"}
                    alt="customer"
                    height={50}
                    width={50}
                    className="h-10 w-10 rounded-full border border-gray-100 object-cover"
                  />
                  <div className="flex flex-col">
                    <p>{item.name || "No name provided"}</p>
                    <p className="text-sm text-gray-500">
                      {item.phone || "No mobile number!"}
                    </p>
                  </div>
                </div>
                <div className="w-[15%]">{item.email || "N/A"}</div>
                <div className="w-[15%]">{item.phone || "N/A"}</div>
                <div className="w-[15%] truncate">{item.address || "N/A"}</div>
                <div className="w-[10%] text-center">
                  {item.cartItems || "0"}
                </div>
                <div className="w-[10%] text-center">
                  {item.totalOrders || "0"}
                </div>
                <div className="w-[10%] text-center">
                  {item.totalSpend || "৳0"}
                </div>
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
                <option value="50">Show: 50</option>
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

export default CustomersPage;
