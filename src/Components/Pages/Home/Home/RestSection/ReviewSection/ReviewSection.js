import React, { useEffect, useRef, useState } from "react";
import "./ReviewSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "swiper/swiper-bundle.min.css";

// swiper core styles
// import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Rating from "react-rating";
import ShowReview from "./ShowReview/ShowReview";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://safe-reaches-08421.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="">
      <div className=" review-section w-screen  flex ">
        <div className="review-bg-1 w-6/12"></div>
        <div className="bg-black w-6/12"></div>
      </div>
      <div className="swiper-position container mx-auto">
        <Swiper
          // centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          className="mySwiper"
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          spaceBetween={30}
          loop={true}
        >
          {reviews.map((review) => (
            <SwiperSlide>
              {" "}
              <div className="shadow-md p-12 w-96  bg-white">
                <div>
                  <p className="font-semibold text-gray-400 mb-8">
                    " Any time we start something new it is exciting and we are
                    very motivated and committed. As time goes by"
                  </p>
                </div>
                <div className="flex items-center ">
                  <div className="">
                    <img
                      className="rounded-full h-24 w-24 flex items-center justify-center mr-8"
                      src={review.img}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 font-light">{review.name}</p>
                    <p className="font-semibold text-gray-400 ">
                      {review.passion}
                    </p>
                    <Rating
                      initialRating={review.rating}
                      readonly
                      className="text-yellow-500"
                      fullSymbol="fas fa-star"
                      emptySymbol="far fa-star"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSection;
