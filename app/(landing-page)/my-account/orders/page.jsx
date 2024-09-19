import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { fetchCustomerData } from "@/app/lib/userdata";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { MdError } from "react-icons/md";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <p className="text-lg">You need to sign in to access this page</p>
      </div>
    );
  }

  const customer = await fetchCustomerData(session.id);

  // Dummy order data
  const orders = customer.orders.length
    ? customer.orders
    : [
        {
          date: "2024-09-10",
          orderNo: "AHS12345",
          items: 3,
          subtotal: "1500 BDT",
          discount: "100 BDT",
          total: "1400 BDT",
          paymentStatus: "Paid",
          orderStatus: "Delivered",
        },
        {
          date: "2024-08-20",
          orderNo: "AHS67890",
          items: 2,
          subtotal: "2000 BDT",
          discount: "200 BDT",
          total: "1800 BDT",
          paymentStatus: "Pending",
          orderStatus: "Processing",
        },
        {
          date: "2024-08-20",
          orderNo: "AHS67890",
          items: 2,
          subtotal: "2000 BDT",
          discount: "200 BDT",
          total: "1800 BDT",
          paymentStatus: "Failed",
          orderStatus: "Cancelled",
        },
      ];

  if (orders.length === 0) {
    return (
      <div className="flex items-center gap-2 rounded border border-orange-200 bg-orange-50 px-3 py-2 text-orange-500">
        <MdError className="text-xl" />
        <span>আপনি এখনো কিছু অর্ডার করেননি!</span>
      </div>
    );
  }

  return (
    <div className="overflow-auto">
      <h3 className="mb-1 font-semibold text-gray-800">আমার অর্ডার সমূহঃ</h3>
      <table className="min-w-full border border-gray-200 bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="border-b px-4 py-2 text-left">Date</th>
            <th className="border-b px-4 py-2 text-left">Order No</th>
            <th className="border-b px-4 py-2 text-left">Items</th>
            <th className="border-b px-4 py-2 text-left">Subtotal</th>
            <th className="border-b px-4 py-2 text-left">Discount</th>
            <th className="border-b px-4 py-2 text-left">Total</th>
            <th className="border-b px-4 py-2 text-left">Payment</th>
            <th className="border-b px-4 py-2 text-left">Status</th>
            <th className="border-b px-4 py-2 text-left">Details</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="even:bg-gray-50">
              <td className="border-b px-4 py-2">{order.date}</td>
              <td className="border-b px-4 py-2">{order.orderNo}</td>
              <td className="border-b px-4 py-2">{order.items}</td>
              <td className="border-b px-4 py-2">{order.subtotal}</td>
              <td className="border-b px-4 py-2">{order.discount}</td>
              <td className="border-b px-4 py-2">{order.total}</td>
              <td
                className={`border-b px-4 py-2 font-medium ${
                  order.paymentStatus === "Paid"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {order.paymentStatus}
              </td>
              <td
                className={`border-b px-4 py-2 font-medium ${
                  order.orderStatus === "Delivered"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {order.orderStatus}
              </td>
              <td className="border-b px-4 py-2">
                <Link
                  href={""}
                  className="rounded-full bg-blue-500 px-3 text-sm text-white hover:bg-blue-600"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
