"use client";

import { useFormStatus } from "react-dom";
import { AiOutlineLoading } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";

const AddProductButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`flex items-center gap-2 rounded-md px-5 py-2 font-medium text-white hover:shadow-md ${pending ? "cursor-not-allowed bg-gray-500 opacity-50" : "bg-blue-500 hover:bg-blue-600 hover:shadow-blue-300"} `}
    >
      {pending ? (
        <>
          <AiOutlineLoading className="mr-auto animate-spin text-lg text-gray-50" />
          যোগ করা হচ্ছে...
        </>
      ) : (
        <>
          <IoMdAdd className="text-xl text-gray-50" />
          যোগ করুন
        </>
      )}
    </button>
  );
};

export default AddProductButton;
