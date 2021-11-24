import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Placeoder.css";
const PlaceOrder = () => {
  const [designs, setDesigns] = useState({});
  const { title, price, brand } = designs;
  const [success, setSuccess] = useState(false);
  const { designId } = useParams();
  const { user } = useAuth();
  const { displayName, email } = user;
  const history = useHistory();
  // console.log("branddddddd", brand);

  const initialOrderInfo = {
    name: displayName,
    email,
    brand,
    address: "",
    title: designs?.title,
    price: designs?.price,
  };
  const [orderInfo, setOrderInfo] = useState(initialOrderInfo);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newOrderData = { ...orderInfo };
    newOrderData[field] = value;
    setOrderInfo(newOrderData);
  };

  const handleOrderSubmission = (e) => {
    const orderData = {
      ...orderInfo,
      status: "pending",
      title,
      price,
      brand,
    };
    console.log(orderData);

    fetch("https://safe-reaches-08421.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("success");
          setSuccess(true);
          history.replace("/");
        }
      });

    e.preventDefault();
  };
  //   console.log(designs);
  useEffect(() => {
    fetch(`https://safe-reaches-08421.herokuapp.com/designs/${designId}`)
      .then((res) => res.json())
      .then((data) => setDesigns(data));
  }, []);

  return (
    <div
      className="h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "#edf2f7 " }}
    >
      {/* alert */}
      {success && (
        <div
          class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3"
          role="alert"
        >
          <svg
            class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
          </svg>
          <p>Something happened that you should know about.</p>
        </div>
      )}
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl font-bold text-center">Place Order</h1>
            <form>
              <div className="mt-3 relative">
                <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">
                  Full Name
                </span>{" "}
                <input
                  type="text"
                  className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"
                  name="name"
                  value={displayName}
                  onBlur={handleOnBlur}
                />{" "}
              </div>

              <div className="mt-4 relative">
                {" "}
                <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">
                  Email Address
                </span>{" "}
                <input
                  type="email"
                  name="email"
                  value={email}
                  onBlur={handleOnBlur}
                  className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"
                />{" "}
              </div>

              <div className="mt-4 relative">
                {" "}
                <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">
                  Order Title
                </span>{" "}
                <input
                  type="text"
                  name="title"
                  value={title}
                  onBlur={handleOnBlur}
                  className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"
                />{" "}
              </div>
              <div className="mt-4 relative">
                {" "}
                <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">
                  Order Price
                </span>{" "}
                <input
                  type="text"
                  name="price"
                  value={price}
                  onBlur={handleOnBlur}
                  className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"
                />{" "}
              </div>
              <div className="mt-4 relative">
                {" "}
                <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">
                  Shipping Address
                </span>{" "}
                <input
                  type="text"
                  name="address"
                  onBlur={handleOnBlur}
                  className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"
                />{" "}
              </div>

              <div className="mt-4">
                {" "}
                <button
                  onClick={handleOrderSubmission}
                  type="submit"
                  className="w-full btn-pink text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                >
                  Confirm Order
                </button>
                <div className="text-center text-sm text-grey-dark mt-4">
                  By signing up, you agree to the
                  <Link
                    className="no-underline ml-1 text-black font-bold border-b border-grey-dark text-grey-dark"
                    href="#"
                  >
                    Terms of Service
                  </Link>{" "}
                  and
                  <Link
                    className="no-underline ml-1 text-black font-bold border-b border-grey-dark text-grey-dark"
                    href="#"
                  >
                    Privacy Policy
                  </Link>
                  <div className="text-grey-dark mt-6">
                    <Link
                      to="/"
                      className="no-underline border-b border-blue text-black font-bold"
                      href="../login/"
                    >
                      Return to Home Page
                    </Link>
                    .
                  </div>
                </div>
              </div>
            </form>
            {/* </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
