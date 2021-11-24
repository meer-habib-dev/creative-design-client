import React from "react";
import "./Footer.css";
import Slide from "react-reveal/Slide";

const Footer = () => {
  return (
    <Slide bottom>
      <div className="py-40 bg-black c">
        <div className=" container mx-auto grid grid-cols-2  md:grid-cols-4 items-center px-4 md:justify-items-center">
          <div className="footer-logo sm:mb-10 md:mb-0">
            <img src="https://themes.jozoor.com/html/joo/creative/02/assets/images/logo/logo2.png"></img>
          </div>
          <div className="text-white text-left mb-10 md:mb-0">
            <p>1231 Streets Melbourne</p>
            <p>St Australia</p>
          </div>
          <div className="text-white text-left ">
            <p>+ 0123 657 98 7865 </p>
            <p>Hello@Site.Com</p>
          </div>
          <div className="text-white">
            <i className="fab fa-twitter "></i>
            <i className="fab fa-instagram mx-4"></i>
            <i className="fab fa-facebook "></i>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Footer;
