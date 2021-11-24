import React from "react";
import "./DesignHome.css";
import RubberBand from "react-reveal/RubberBand";
const DesignHome = () => {
  return (
    <div>
      <RubberBand>
        <div className=" w-screen h-screen flex items-center justify-center">
          <p className="design-title text-6xl md:text-8xl text-center font-extrabold">
            Design Portfolio
          </p>
        </div>
      </RubberBand>
    </div>
  );
};

export default DesignHome;
