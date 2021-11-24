import React from "react";
import Shake from "react-reveal/Shake";
import { Link } from "react-router-dom";
const HomeDoit = () => {
  return (
    <div className="bg-gray-100 text-center h-screen w-screen flex flex-col items-center justify-center">
      <p className="text-6xl md:w-6/12 mb-16 font-extrabold">
        Let’s Make Something Great Together
      </p>

      <Link className="" to="/design">
        <Shake>
          <button className=" btn-pink rounded-full  px-10 py-3 text-4xl font-bold text-white md:w-96">
            Lets Do It!
          </button>
        </Shake>
      </Link>
    </div>
  );
};

export default HomeDoit;
