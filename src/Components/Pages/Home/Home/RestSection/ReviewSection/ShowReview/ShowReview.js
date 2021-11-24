import React from "react";
import Rating from "react-rating";
import { Swiper, SwiperSlide } from "swiper/react";

const ShowReview = ({ review }) => {
  const { name, description, img, rating } = review;
  return (
    <SwiperSlide>
      {" "}
      <div className="shadow-md p-12 w-96 bg-white">
        <div>
          <p className="font-semibold text-gray-400 mb-8">
            " Any time we start something new it is exciting and we are very
            motivated and committed. As time goes by"
          </p>
        </div>
        <div className="flex items-center ">
          <div className="">
            <img
              className="rounded-full h-24 w-24 flex items-center justify-center mr-8"
              src="https://themes.jozoor.com/html/joo/corporate/01/assets/images/testimonials/1.png"
              alt=""
            />
          </div>
          <div>
            <p className="text-gray-700 font-light">Olivia alison</p>
            <p className="font-semibold text-gray-400 ">CEO AND STYLIST</p>
            <Rating
              initialRating={2.5}
              readonly
              fullSymbol="fas fa-star"
              emptySymbol="far fa-star"
            />
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default ShowReview;
