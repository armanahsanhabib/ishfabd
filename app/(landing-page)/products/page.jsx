import ProductCard from "@/app/components/client/ProductCard";
import Filters from "./filters";

const page = () => {
  return (
    <div className="products">
      <div className="container mx-auto flex gap-8 px-2 sm:px-4 md:px-8">
        <div className="filter_section flex w-64 flex-none flex-col gap-3">
          <Filters />
        </div>
        <div className="products_section">
          <h3 className="mb-3 font-bold sm:text-lg">Our products</h3>
          <div className="cards_container grid w-full grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 md:grid-cols-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
