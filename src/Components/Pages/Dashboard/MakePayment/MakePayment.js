import React from "react";
import "./MakePayment.css";
import HeadShake from "react-reveal/HeadShake";
const MakePayment = () => {
  return (
    <div className="h-screen">
      <div className="h-full flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <div
            className="
      animate-spin
      rounded-full
      h-32
      w-32
      border-t-2 border-b-2 border-purple-500
    "
          ></div>
        </div>
        <br />
        <HeadShake>
          <p className="text-6xl text-center mt-8 px-10 font-extrabold">
            Payment system comming soon.....!!!
          </p>
        </HeadShake>
      </div>
    </div>
  );
};

export default MakePayment;
