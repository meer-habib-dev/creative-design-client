import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Spinner from "../../Shared/Spinner/Spinner";

const Register = () => {
  const [registrationData, setRegistrationData] = useState({});
  const { registerUser, loading } = useAuth();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegistrationData = { ...registrationData };
    newRegistrationData[field] = value;
    setRegistrationData(newRegistrationData);
    console.log(registrationData);
  };
  const handleRegistration = (e) => {
    if (registrationData?.password !== registrationData?.password2) {
      console.log("hitting1");
      alert("password did not matched!!!");
      console.log("hitting2");
      return;
    }
    registerUser(
      registrationData.email,
      registrationData.password,
      registrationData.name,
      history
    );
    alert("Form Filled Successfully");
    // e.target.reset();
    e.preventDefault();
  };
  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="w-screen h-screen py-24 ">
      <div className="md:flex container mx-auto justify-evenly items-center  md:bg-indigo-50">
        <div>
          <img
            width="500px"
            src="https://i.ibb.co/3vxqcpX/4957136.jpg"
            alt=""
          />
        </div>
        <div className="px-10 md:px-0 pb-10 md:pb-0">
          <p className="text-center font-bold pb-4">Gets Started</p>
          <p className="text-center mb-2">
            Already have an account?{" "}
            <Link className="text-blue-500 font-bold" to="/login">
              Please Login
            </Link>
          </p>
          <form onSubmit={handleRegistration} className="w-full max-w-sm">
            <div className=" mb-2">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Enter Name
              </label>

              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="type"
                name="name"
                onBlur={handleOnBlur}
                required
              />
            </div>
            <div className=" mb-2">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Email Address
              </label>

              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="email"
                name="email"
                onBlur={handleOnBlur}
                required
              />
            </div>
            <div className=" mb-2">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Enter Password
              </label>

              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                placeholder="Enter Password"
                required
              />
            </div>
            <div className=" mb-2">
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
                name="password2"
                onBlur={handleOnBlur}
                placeholder="Confirm Password"
                required
              />
            </div>

            <div className="md:flex md:items-center">
              <div className="w-full">
                <button
                  type="submit"
                  className="shadow w-full bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                >
                  Register
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
  );
};

export default Register;
