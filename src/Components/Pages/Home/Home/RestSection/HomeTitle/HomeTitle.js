import React from "react";
import "./HomeTItle.css";

import Jump from "react-reveal/Jump";

const HomeTitle = () => {
  return (
    <div className="homeTitle mt-28">
      <Jump>
        <p className=" text-7xl  md:text-8xl text-center font-extrabold px-4 md:px-12">
          Minimal best design works
        </p>
      </Jump>
    </div>
  );
};

export default HomeTitle;
