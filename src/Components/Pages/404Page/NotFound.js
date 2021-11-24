import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center mx-auto align-middle">
      <h1 class="text-3xl md:text-5xl text-red-700 text-center font-extrabold pb-8">
        404 page not found!!!🥱👿👹
      </h1>
      <div className="w-screen text-center">
        <Link to="/home">
          <button className="btn-pink hover:text-white   transition-all hover:bg-transparent bg-yellow rounded-full py-3 px-8 md:text-3xl font-extrabold text-white ">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
