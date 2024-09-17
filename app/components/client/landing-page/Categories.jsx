import Nuts from "@/public/landing-page/almond.png";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  const category = [
    {
      icon: Nuts,
      title: "Nuts",
      link: "/",
    },
  ];
  return (
    <div className="categoris mt-5">
      <div className="container mx-auto px-2 py-6 sm:px-4 md:px-8">
        <h3 className="mb-3 font-bold sm:text-lg">জনপ্রিয় ক্যাটাগরি</h3>
        <div className="flex gap-5">
          {category.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="item group flex flex-col items-center gap-3 rounded-lg border border-green-500 bg-green-50 p-6 transition-all hover:shadow-md"
            >
              <div className="icon">
                <Image
                  src={item.icon}
                  alt="nuts"
                  className="h-20 w-auto transition-all group-hover:scale-105"
                />
              </div>
              <div className="text">{item.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
