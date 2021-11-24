import React, { useState } from "react";

import Jello from "react-reveal/Jello";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
    if (success) {
      e.target.reset();
    }
  };
  const handleAdminAccess = (e) => {
    const admin = { email };
    fetch("https://safe-reaches-08421.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(admin),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          // setEmail("");
          alert("Admin Added");
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Jello>
        <p className="text-5xl font-extrabold mb-12 text-center">
          Give Admin Access....!
        </p>
      </Jello>
      <form onSubmit={handleAdminAccess} className="w-full max-w-sm">
        <div className="flex items-center border-b-2  border-gray-300 py-2">
          <input
            className="appearance-none  bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="email"
            placeholder="Jane Doe@gmail.com"
            aria-label="Full name"
            required
            onBlur={handleOnBlur}
            name="admin"
          />
          <button
            className="flex-shrink-0 bg-teal-500 w-36 btn-pink hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Make Admin
          </button>
          {/* <button
            className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
            type="button"
          >
            Cancel
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
