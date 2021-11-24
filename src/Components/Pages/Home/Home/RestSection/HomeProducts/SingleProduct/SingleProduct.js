import React from "react";
import { Link } from "react-router-dom";
import "./SingleProduct.css";

import Bounce from "react-reveal/Bounce";
const SingleProduct = ({ product }) => {
  const { _id, title, img } = product;
  // console.log(product, title);
  return (
    // <div className="singleProduct">
    //   <img className="w-full h-full " src={img} alt="" />
    // </div>
    <Bounce>
      <Link to={`/designDetails/${_id}`}>
        <div className="spots-container">
          <div className="overlay"></div>
          <div className="img-container ">
            <div className="bg-img">
              {" "}
              <img src={img} alt="" />
            </div>
          </div>
          <div className="title-container ">
            <p className="text-3xl text-center font-extrabold  ">{title}</p>
          </div>
        </div>
      </Link>
    </Bounce>
  );
};

export default SingleProduct;
