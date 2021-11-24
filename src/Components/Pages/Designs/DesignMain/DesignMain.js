import React, { useEffect, useState } from "react";
import "./DesignMain.css";
import ShowDesign from "./ShowDesign/ShowDesign";
import Shake from "react-reveal/Shake";
import { Link } from "react-router-dom";

const DesignMain = () => {
  const [designs, setDesigns] = useState([]);
  useEffect(() => {
    fetch("https://safe-reaches-08421.herokuapp.com/designs")
      .then((res) => res.json())
      .then((data) => setDesigns(data));
  }, []);
  return (
    <div className="w-screen">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="show-design w-full pb-20  pr-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {designs.map((design) => (
              <ShowDesign key={design._id} design={design}></ShowDesign>
            ))}
          </div>
        </div>
        <div className="overview ">
          <p className="text-5xl font-bold mb-10 text-center md:text-left ">
            Overview
          </p>
          <p className="font-semibold text-gray-500 mb-10 text-justify px-10 md:px-0 ">
            The main component of a healthy environment for self esteem is that
            it needs be nurturing, main component of a healthy env for self
            esteem. The main component of a healthy environment for self esteem
            is that it needs be nurturing, main component of a healthy env for
            self esteem.
          </p>
          <div className="px-10 md:px-0 flex mb-10 justify-between w-96 items-center">
            <p className="text-3xl mr-20 font-bold text-pink-600">Client</p>
            <p>Jozoor.com</p>
          </div>
          <div className="px-10 md:px-0 flex mb-10 justify-between w-96 items-center">
            <p className="text-3xl mr-20 font-bold text-pink-600">Date</p>
            <p>Nov 14, 2021</p>
          </div>
          <div className="px-10 md:px-0 flex mb-10 justify-between w-96 items-center">
            <p className="text-3xl mr-20 font-bold text-pink-600">
              Categories{" "}
            </p>
            <p>Branding, Design</p>
          </div>
          <div className="socalIcons flex justify-center">
            <div className="w-12 h-12 rounded-full border flex justify-center items-center mr-4">
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className="w-12 h-12 rounded-full border flex justify-center items-center mr-4">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="w-12 h-12 rounded-full border flex justify-center items-center mr-4">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="w-12 h-12 rounded-full border flex justify-center items-center mr-4">
              <i className="fab fa-google"></i>
            </div>
            <div className="w-12 h-12 rounded-full border flex justify-center items-center mr-4">
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
          <div className="btn-hover w-full mx-auto py-10 text-center">
            <Shake>
              <Link to="/login">
                <button className="btn-pink py-2 px-8 rounded-full ">
                  Start A Project
                </button>
              </Link>
            </Shake>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignMain;
