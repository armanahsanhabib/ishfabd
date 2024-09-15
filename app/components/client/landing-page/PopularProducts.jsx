import ProductCard from '../ProductCard'

const PopularProducts = () => {
  return (
    <div className="popular_products">
      <div className="container mx-auto px-2 sm:px-4 md:px-8">
        <h3 className="mb-3 mt-5 font-bold sm:text-lg">Popular products</h3>
        <div className="cards_container grid w-full grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default PopularProducts
