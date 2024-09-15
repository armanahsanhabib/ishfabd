import Categories from '../components/client/landing-page/Categories'
import FeaturedCategories from '../components/client/landing-page/FeaturedCategories'
import Newsletter from '../components/client/landing-page/Newsletter'
import PopularProducts from '../components/client/landing-page/PopularProducts'
import Slider from '../components/client/landing-page/Slider'

const LandingPage = () => {
  return (
    <>
      <Slider />
      <FeaturedCategories />
      <PopularProducts />
      <Categories />
      <Newsletter />
    </>
  )
}

export default LandingPage
