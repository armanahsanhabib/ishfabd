import { inter } from "@/app/fonts";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { HiMinus, HiPlus } from "react-icons/hi";

const page = () => {
  const cartItems = [
    {
      id: 1,
      name: "Item 1",
      quantity: 2,
      price: 150,
    },
    {
      id: 2,
      name: "Item 2",
      quantity: 1,
      price: 200,
    },
    {
      id: 3,
      name: "Item 3",
      quantity: 3,
      price: 50,
    },
  ];

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

  return (
    <div className="bg-gray-50 pb-16 pt-4">
      <div className="container mx-auto flex min-h-[50vh] flex-col gap-5 px-2 sm:px-4 md:flex-row md:px-8">
        <div className="flex-grow">
          <h3 className="mb-2 text-xl font-bold text-blue-500">আমার কার্টঃ</h3>
          {/* Cart Items */}
          <div
            className={`${inter.className} cart rounded-md border border-gray-200 bg-white px-3`}
          >
            <table className="w-full border-collapse">
              <tbody>
                {cartItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 *:py-4 last:border-none"
                  >
                    <td className="size-28">
                      <Image
                        src={"/product_images/product.jpg"}
                        alt="product img"
                        width={80}
                        height={80}
                        className="size-24 rounded-lg border border-gray-200 bg-gray-100"
                      />
                    </td>
                    <td className="mt-1 h-28">
                      <div className="flex h-full flex-col justify-between">
                        <h4 className="line-clamp-1 text-sm font-semibold text-gray-600">
                          কাশ্মীরি কাজু বাদাম - High quality - 500gm pack
                        </h4>
                        <p className="flex gap-2 text-sm font-medium text-gray-600">
                          <span className="text-gray-500 line-through">
                            245.00 Tk
                          </span>
                          <span className="text-blue-600">220.00 Tk</span>
                        </p>
                        <div className="w-max rounded-full bg-green-500 px-2 text-xs text-white">
                          Available
                        </div>
                        <div className="flex items-center gap-1 text-sm font-medium text-gray-500">
                          <button type="button" className="hover:text-red-500">
                            Remove
                          </button>
                          <BsDot className="text-base text-gray-500" />
                          <button type="button" className="hover:text-red-500">
                            Delete
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="flex h-28 flex-col items-end justify-around py-3">
                      <h5 className="price text-lg font-bold text-gray-700">
                        ৳ 530.00
                      </h5>
                      <div className="qty flex text-sm font-medium">
                        <button
                          type="button"
                          className="rounded-s bg-gray-100 p-2 text-sm outline-none hover:bg-gray-200"
                        >
                          <HiMinus />
                        </button>
                        <input
                          type="text"
                          name="qty"
                          id="qty"
                          min={1}
                          defaultValue={1}
                          className="w-8 border text-center outline-blue-500 focus:outline-1"
                        />
                        <button
                          type="button"
                          className="rounded-e bg-gray-100 p-2 text-sm outline-none hover:bg-gray-200"
                        >
                          <HiPlus />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary */}
        <div className="summary w-72 flex-none">
          <h3 className="mb-2 text-lg font-bold text-blue-500">সারসংক্ষেপঃ</h3>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <div className="mb-2 flex justify-between">
              <span>Total Items:</span>
              <span>
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
            <div className="mb-2 flex justify-between">
              <span>Total Amount:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <button className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
