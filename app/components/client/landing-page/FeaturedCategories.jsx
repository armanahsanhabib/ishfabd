import DryFoods from "@/public/landing-page/imgbin_dried-fruits-png.png";
import Herbal from "@/public/landing-page/PngItem_2043387.png";
import Honey from "@/public/landing-page/Pure-Honey-PNG-Images.png";
import Image from "next/image";
import Link from "next/link";

const FeaturedCategories = () => {
  return (
    <div className="featured_categories">
      <div className="container mx-auto my-5 grid grid-cols-1 gap-5 px-2 sm:my-8 sm:grid-cols-2 sm:px-4 md:px-8 lg:grid-cols-3">
        <div className="item relative h-36 rounded-lg border border-purple-100 bg-gradient-to-br from-purple-200 to-transparent p-3 shadow-inner hover:shadow sm:h-52 sm:p-5">
          <h3 className="title text-xl font-bold text-purple-800">
            ড্রাই ফুডস
          </h3>
          <p className="text-purple-500">সব ধরণের ড্রাই ফুডস আইটেম।</p>
          <Link
            href={"/all-products?categories=dry-foods"}
            className="mt-2 inline-block rounded-lg bg-purple-600 px-8 py-2 text-sm font-medium text-white hover:bg-purple-700"
          >
            ঘুরে দেখুন
          </Link>
          <Image
            src={DryFoods}
            alt="Dry Foods"
            className="absolute bottom-2 right-2 h-3/4 w-auto"
          />
        </div>
        <div className="item relative h-36 rounded-lg border border-purple-100 bg-gradient-to-br from-orange-200 to-transparent p-3 shadow-inner hover:shadow sm:h-52 sm:p-5">
          <h3 className="title text-xl font-bold text-orange-800">মধু</h3>
          <p className="text-orange-500">সব ধরণের খাঁটি মধুর সংগ্রহ।</p>
          <Link
            href={"/all-products?categories=dry-foods"}
            className="mt-2 inline-block rounded-lg bg-orange-600 px-8 py-2 text-sm font-medium text-white hover:bg-orange-700"
          >
            ঘুরে দেখুন
          </Link>
          <Image
            src={Honey}
            alt="Honey items"
            className="absolute bottom-2 right-2 h-3/4 w-auto"
          />
        </div>
        <div className="item relative h-36 rounded-lg border border-green-100 bg-gradient-to-br from-green-200 to-transparent p-3 shadow-inner hover:shadow sm:h-52 sm:p-5">
          <h3 className="title text-xl font-bold text-green-800">ভেষজ পণ্য</h3>
          <p className="text-green-500">সব ধরণের হারবাল পণ্য।</p>
          <Link
            href={"/all-products?categories=dry-foods"}
            className="mt-2 inline-block rounded-lg bg-green-600 px-8 py-2 text-sm font-medium text-white hover:bg-green-700"
          >
            ঘুরে দেখুন
          </Link>
          <Image
            src={Herbal}
            alt="Dry Foods"
            className="absolute bottom-2 right-2 h-3/4 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
