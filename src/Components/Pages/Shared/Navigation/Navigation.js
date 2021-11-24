import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";

import Slide from "react-reveal/Slide";
// import Fade from "react-reveal/Fade";

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { user, logOut } = useAuth();
  return (
    <Slide top>
      <div className="position z-10 w-screen">
        {/* <Fade top> */}
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-5  bg-white text mb-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link
                to="/home"
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-1xl md:ml-8 text-black"
                href="#pablo"
              >
                <img src="https://i.ibb.co/X70nBbj/logo2.png"></img>
              </Link>
              <button
                className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center justify-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row  list-none lg:ml-auto">
                <li className="nav-item">
                  <Link
                    to="/home"
                    style={{ fontSize: "16px" }}
                    className="px-3 py-2 flex items-center text-xs text-1xl md:ml-8 font-bold leading-snug text-black hover:opacity-75"
                  >
                    <span className="ml-2">Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/design"
                    style={{ fontSize: "16px" }}
                    className="px-3 py-2 flex items-center text-xs text-1xl md:ml-8 font-bold leading-snug text-black hover:opacity-75"
                  >
                    <span className="ml-2">Designs</span>
                  </Link>
                </li>

                {user.email && (
                  <li className="nav-item">
                    <Link
                      to="/dashboard"
                      style={{ fontSize: "16px" }}
                      className="px-3 py-2 flex items-center text-xs text-1xl md:ml-8 font-bold leading-snug text-black hover:opacity-75"
                    >
                      <span className="ml-2">Dashboard</span>
                    </Link>
                  </li>
                )}

                <li className="nav-item">
                  {user.email ? (
                    <button
                      onClick={logOut}
                      style={{ fontSize: "16px" }}
                      className="px-3 py-2 flex items-center text-xs text-1xl md:ml-8 font-bold leading-snug text-black hover:opacity-75"
                    >
                      <span className="ml-2">Log Out</span>
                    </button>
                  ) : (
                    <Link
                      to="/login"
                      style={{ fontSize: "16px" }}
                      className="px-3 py-2 flex items-center text-xs text-1xl md:ml-8 font-bold leading-snug text-black hover:opacity-75"
                    >
                      <span className="ml-2">Login</span>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* </Fade> */}
      </div>
    </Slide>
  );
};

export default Navigation;
