import React from "react";
import Tada from "react-reveal/Tada";

const DashboardHome = () => {
  return (
    <div className="h-screen flex items-center justify-center ">
      <Tada>
        <p className="md:text-8xl text-5xl text-center text-pink-600 px-20 font-extrabold">
          Welcome to Dashboard....
        </p>
      </Tada>
    </div>
  );
};

export default DashboardHome;
