import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";
import Spinner from "../../Shared/Spinner/Spinner";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, logInUser, loading, signInUsingGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(newLoginData);
  };
  // handle Login submit
  const handleLoginSubmit = (e) => {
    logInUser(loginData.email, loginData.password, location, history);
    // console.log("htting");
    e.preventDefault();
  };
  // handle Google Sign In
  const handleGoogleSignIn = () => {
    signInUsingGoogle(location, history);
    console.log(user);
  };
  if (loading) {
    return <Spinner></Spinner>
  }

  return (
    <>
      {/* <Navigation></Navigation> */}
      <div className="w-screen h-screen py-24 ">
        <div className="md:flex container mx-auto justify-evenly items-center md:bg-pink-50">
          <div>
            <img
              width="500px"
              src="https://i.ibb.co/LdKsLTr/Mobile-login.jpg"
              alt=""
            />
          </div>
          <div className="px-10 md:px-0 pb-10 md:pb-0">
            <p className="text-center font-bold pb-4">Gets Started</p>
            <p className="text-center">
              Dont have any account?{" "}
              <Link className="text-blue-500 font-bold" to="/register">
                Please Register
              </Link>
            </p>
            <div className="w-full mx-auto text-center">
              <button
                onClick={handleGoogleSignIn}
                className="px-3 py-2 text-black rounded  w-full mx-auto my-4 font-semibold hover:bg-black hover:text-white transition-all bg-white "
              >
                {" "}
                <i className=" fab fa-google mr-4"></i>
                GOOGLE SIGN IN
              </button>
            </div>
            <form onSubmit={handleLoginSubmit} className="w-full max-w-sm">
              <div className=" mb-6">
                <label
                  className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Enter Email
                </label>

                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="email"
                  name="email"
                  onBlur={handleOnBlur}
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className=" mb-6">
                <label
                  className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Password
                </label>

                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-password"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  placeholder="Enter Password"
                  required
                />
              </div>

              <div className="md:flex md:items-center">
                <div className="w-full">
                  <button
                    type="submit"
                    className="shadow w-full bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  >
                    Log In
                  </button>
                </div>
              </div>
            </form>
            <div className="text-center mt-4">
              <Link to="/" className="text-blue-500 font-bold underline">
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
