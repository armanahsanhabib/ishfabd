"use client";

import { useRouter } from "next/navigation";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <FaExclamationTriangle className="mb-6 text-9xl text-yellow-500" />
      <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
      <h2 className="mb-8 text-2xl text-gray-600">Oops! Page not found</h2>
      <p className="mb-8 text-gray-500">
        It looks like the page you're looking for doesn't exist.
      </p>
      <button
        type="button"
        onClick={() => router.back()}
        className="rounded-md bg-blue-500 px-6 py-2 text-white shadow-lg transition duration-300 ease-in-out hover:bg-blue-700"
      >
        পিছনে ফিরে যান
      </button>
    </div>
  );
};

export default NotFound;
