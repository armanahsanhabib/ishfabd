"use client";

import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const SalesChart = ({ salesChartData }) => {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-5">
      <h3 className="mb-4 text-xl font-semibold text-gray-700">
        বিক্রয় চার্ট
      </h3>
      <Line data={salesChartData} />
    </div>
  );
};

export default SalesChart;
