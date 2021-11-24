import React from "react";
import { Link } from "react-router-dom";
import "./ShowDesign.css";
import Flip from "react-reveal/Flip";
const ShowDesign = ({ design }) => {
  const { _id, img, title, description, brand } = design;
  return (
    <div>
      <Flip bottom>
        <Link to={`/designDetails/${_id}`}>
          <div className="show-design-section">
            <div className="design-img">
              <img className="" src={img} alt="" />
              <div className="design-overlay h-full w-full flex items-center justify-center text-white text-4xl font-extrabold">
                <p>{title}</p>
              </div>
            </div>
            <button className="details-btn bg-yellow-400 w-full py-2 font-bold hover:text-pink-600">
              Purchase
            </button>
          </div>
        </Link>
      </Flip>
    </div>
  );
};

export default ShowDesign;
