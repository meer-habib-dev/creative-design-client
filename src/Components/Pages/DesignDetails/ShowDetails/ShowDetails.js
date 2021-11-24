import React from "react";
import { Link } from "react-router-dom";

const ShowDetails = ({ designs }) => {
  const { _id, title, brand, description, price, img } = designs;

  return (
    <div>
      <div className="container py-24 mx-auto text-center">
        <div className="flex justify-center">
          <img src={img} alt="" />
        </div>
        <div>
          <p className="text-5xl font-bold pt-10">{title}</p>
          <p className="text-pink-600 font-extrabold py-10">{brand}</p>
          <p className="md:w-2/3 px-10 text-justify md:px-0 md:text-center mx-auto text-gray-500 font-bold">
            {description}
          </p>
          <Link to={`/placeorder/${_id}`}>
            <button className="btn-pink mt-8 px-4 py-3 w-60 font-semibold">
              {" "}
              Place Purchase - ${price}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
