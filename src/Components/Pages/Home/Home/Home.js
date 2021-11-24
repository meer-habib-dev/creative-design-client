import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import HomeDoit from "./RestSection/HomeDoit/HomeDoit";
import HomeProducts from "./RestSection/HomeProducts/HomeProducts";
import HomeTitle from "./RestSection/HomeTitle/HomeTitle";
import ReviewSection from "./RestSection/ReviewSection/ReviewSection";

const Home = () => {
  return (
    <>
      <div className="relative h-screen w-screen">
        <Navigation></Navigation>
        <div className="">
          <HomeTitle></HomeTitle>
        </div>
      </div>
      <div>
        <HomeProducts></HomeProducts>
      </div>
      <div>
        <HomeDoit></HomeDoit>
      </div>
      <div>{/* <HomeLogoSlider></HomeLogoSlider> */}</div>
      <div>
        <ReviewSection></ReviewSection>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
