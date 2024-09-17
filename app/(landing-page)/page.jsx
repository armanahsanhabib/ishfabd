import Categories from "../components/client/landing-page/Categories";
import FeaturedCategories from "../components/client/landing-page/FeaturedCategories";
import PopularProducts from "../components/client/landing-page/PopularProducts";
import Slider from "../components/client/landing-page/Slider";

const LandingPage = () => {
  return (
    <div className="pb-16 pt-4">
      <Slider />
      <FeaturedCategories />
      <PopularProducts />
      <Categories />
    </div>
  );
};

export default LandingPage;
