import Product from '@/public/product_images/product.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { BsCartPlusFill } from 'react-icons/bs'
import RatingStar from './RatingStar'

const ProductCard = () => {
  return (
    <Link href={'/'} className="card flex flex-col gap-2">
      <div className="image group relative overflow-hidden rounded-md border bg-gray-100 transition-all hover:border-green-500 hover:shadow-md">
        <Image
          src={Product}
          alt="product image"
          className="mx-auto h-48 w-auto object-cover sm:h-64"
        />
        {/* <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-green-300 opacity-0 transition-all group-hover:opacity-50">
          <button type="button text-xl">
            <FaCartPlus /> hello
          </button>
        </div> */}
        <button
          type="button"
          className="absolute right-3 top-3 hidden items-center rounded-full bg-green-500 p-3 text-xl text-white shadow-md transition-all hover:bg-green-600 group-hover:flex"
        >
          <BsCartPlusFill />
        </button>
      </div>
      <div className="details space-y-1 text-gray-600">
        <div className="product_name font-medium leading-tight hover:underline">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="rating">
          <RatingStar rating={3.5} />
        </div>
        <div className="price flex gap-3">
          <span className="text-gray-500 line-through">Tk 1,200</span>
          <span className="font-semibold text-green-600">Tk 1,050</span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
