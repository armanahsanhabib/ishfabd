import Categories from "../components/client/landing-page/Categories";
import FeaturedCategories from "../components/client/landing-page/FeaturedCategories";
import PopularProducts from "../components/client/landing-page/PopularProducts";
import Slider from "../components/client/landing-page/Slider";

const LandingPage = () => {
  return (
    <>
      <Slider />
      <FeaturedCategories />
      <PopularProducts />
      <Categories />
    </>
  );
};

export default LandingPage;
