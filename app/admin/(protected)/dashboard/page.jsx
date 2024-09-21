import { AiOutlineStock } from "react-icons/ai";
import {
  TbChartBar,
  TbCoinTaka,
  TbShoppingCart,
  TbUsers,
} from "react-icons/tb";
import Header from "../header";
import SalesChart from "./sales-chart";

// Randomized colors for cards
const cardColors = [
  { bgColor: "bg-blue-100", textColor: "text-blue-600" },
  { bgColor: "bg-green-100", textColor: "text-green-600" },
  { bgColor: "bg-red-100", textColor: "text-red-600" },
  { bgColor: "bg-purple-100", textColor: "text-purple-600" },
  { bgColor: "bg-yellow-100", textColor: "text-yellow-600" },
];

// StatsCard Component with dynamic props
const StatsCard = ({ icon, text, value, bgColor, textColor }) => {
  return (
    <div className="card flex w-64 gap-2 rounded-md border border-gray-200 bg-white p-3">
      <div
        className={`icon flex h-14 w-14 items-center justify-center rounded ${bgColor} text-4xl ${textColor}`}
      >
        {icon}
      </div>
      <div className="text">
        <h3 className="text-lg font-semibold">{text}</h3>
        <p className="text-2xl font-bold leading-none text-gray-700">{value}</p>
      </div>
    </div>
  );
};

// Dummy data for different stats
const statsData = [
  {
    icon: <TbCoinTaka />,
    text: "বর্তমান স্টক মূল্য",
    value: "৳ 5725.00",
  },
  {
    icon: <TbUsers />,
    text: "মোট কাস্টমার",
    value: "145",
  },
  {
    icon: <TbShoppingCart />,
    text: "মোট অর্ডার",
    value: "78",
  },
  {
    icon: <TbChartBar />,
    text: "সর্বশেষ লাভ",
    value: "৳ 2500.00",
  },
  {
    icon: <AiOutlineStock />,
    text: "মোট পণ্য",
    value: "120",
  },
];

// Dummy data for orders and payments
const ordersData = [
  {
    id: 1,
    date: "2024-09-15",
    orderNo: "#1001",
    total: "৳ 1200",
    status: "Shipped",
  },
  {
    id: 2,
    date: "2024-09-14",
    orderNo: "#1002",
    total: "৳ 800",
    status: "Processing",
  },
  {
    id: 1,
    date: "2024-09-15",
    orderNo: "#1001",
    total: "৳ 1200",
    status: "Shipped",
  },
  {
    id: 2,
    date: "2024-09-14",
    orderNo: "#1002",
    total: "৳ 800",
    status: "Processing",
  },
  {
    id: 1,
    date: "2024-09-15",
    orderNo: "#1001",
    total: "৳ 1200",
    status: "Shipped",
  },
  {
    id: 2,
    date: "2024-09-14",
    orderNo: "#1002",
    total: "৳ 800",
    status: "Processing",
  },
  // Add more dummy orders here...
];

const paymentsData = [
  {
    id: 1,
    date: "2024-09-15",
    paymentNo: "#P1001",
    amount: "৳ 1200",
    method: "Credit Card",
  },
  {
    id: 2,
    date: "2024-09-14",
    paymentNo: "#P1002",
    amount: "৳ 800",
    method: "PayPal",
  },
  {
    id: 2,
    date: "2024-09-14",
    paymentNo: "#P1002",
    amount: "৳ 800",
    method: "PayPal",
  },
  {
    id: 2,
    date: "2024-09-14",
    paymentNo: "#P1002",
    amount: "৳ 800",
    method: "PayPal",
  },
  {
    id: 2,
    date: "2024-09-14",
    paymentNo: "#P1002",
    amount: "৳ 800",
    method: "PayPal",
  },
  {
    id: 2,
    date: "2024-09-14",
    paymentNo: "#P1002",
    amount: "৳ 800",
    method: "PayPal",
  },
  // Add more dummy payments here...
];

// Dummy data for chart
const salesChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Monthly Sales",
      data: [1500, 2300, 3200, 5000, 4500, 6200, 7100],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 2,
      pointRadius: 3,
      tension: 0.4,
    },
  ],
};

const DashboardPage = () => {
  return (
    <div>
      <Header title="এডমিন ড্যাশবোর্ড" />
      <div className="main flex h-[calc(100vh-56px)] flex-col gap-4 overflow-auto p-4">
        {/* Stats Section */}
        <div className="stats flex flex-wrap gap-4">
          {statsData.map((stat, index) => {
            const color = cardColors[index % cardColors.length]; // Rotate through colors
            return (
              <StatsCard
                key={index}
                icon={stat.icon}
                text={stat.text}
                value={stat.value}
                bgColor={color.bgColor}
                textColor={color.textColor}
              />
            );
          })}
        </div>

        {/* Sales Chart Section */}
        <div className="charts grid grid-cols-1 gap-4 lg:grid-cols-2">
          <SalesChart salesChartData={salesChartData} />
          <SalesChart salesChartData={salesChartData} />
        </div>

        {/* Orders and Payments Section */}
        <div className="orders_payments grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Last 10 Orders */}
          <div className="orders rounded-md border border-gray-200 bg-gray-50 p-4">
            <h3 className="mb-4 text-lg font-semibold text-gray-700">
              সর্বশেষ অর্ডার
            </h3>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="border-b px-4 py-2 text-left">Date</th>
                  <th className="border-b px-4 py-2 text-left">Order No</th>
                  <th className="border-b px-4 py-2 text-left">Total</th>
                  <th className="border-b px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {ordersData.map((order) => (
                  <tr key={order.id}>
                    <td className="border-b px-4 py-2">{order.date}</td>
                    <td className="border-b px-4 py-2">{order.orderNo}</td>
                    <td className="border-b px-4 py-2">{order.total}</td>
                    <td className="border-b px-4 py-2">{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Last 10 Payments */}
          <div className="payments rounded-md border border-gray-200 bg-gray-50 p-4">
            <h3 className="mb-4 text-lg font-semibold text-gray-700">
              সর্বশেষ পেমেন্ট
            </h3>
            <table className="min-w-full rounded-md border bg-white">
              <thead>
                <tr>
                  <th className="border-b px-4 py-2 text-left">Date</th>
                  <th className="border-b px-4 py-2 text-left">Payment No</th>
                  <th className="border-b px-4 py-2 text-left">Amount</th>
                  <th className="border-b px-4 py-2 text-left">Method</th>
                </tr>
              </thead>
              <tbody>
                {paymentsData.map((payment) => (
                  <tr key={payment.id} className="even:bg-gray-100">
                    <td className="border-b px-4 py-2">{payment.date}</td>
                    <td className="border-b px-4 py-2">{payment.paymentNo}</td>
                    <td className="border-b px-4 py-2">{payment.amount}</td>
                    <td className="border-b px-4 py-2">{payment.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-md border bg-white p-4">
            <table className="w-full border-separate border-spacing-2">
              <thead>
                <tr className="*:border-y first:*:rounded-s-md first:*:border-s last:*:rounded-e-md last:*:border-e">
                  <th>name</th>
                  <th>age</th>
                  <th>phone</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody className="*:border">
                <tr className="*:border">
                  <td>Ahsan Habib</td>
                  <td>22</td>
                  <td>01704428814</td>
                  <td>Active</td>
                </tr>
                <tr className="*:border">
                  <td>Ahsan Habib</td>
                  <td>22</td>
                  <td>01704428814</td>
                  <td>Active</td>
                </tr>
                <tr className="*:border">
                  <td>Ahsan Habib</td>
                  <td>22</td>
                  <td>01704428814</td>
                  <td>Active</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
