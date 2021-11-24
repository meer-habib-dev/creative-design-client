import React, { useState } from "react";
import Flash from "react-reveal/Flash";
import Shake from "react-reveal/Shake";

const AddADesign = () => {
  const [postDesign, setPostDesign] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newPostDesign = { ...postDesign };
    newPostDesign[field] = value;
    setPostDesign(newPostDesign);
  };
  const handleDesignSubmit = (e) => {
    const postData = {
      ...postDesign,
    };
    // console.log(postData);
    fetch("https://safe-reaches-08421.herokuapp.com/designs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("data postted");
        }
      });

    e.preventDefault();
  };
  return (
    <div className="py-10 md:py-0 md:h-screen ">
      <div>
        <Flash>
          <p className="text-center text-6xl pt-20 md:py-10 font-bold">
            Post New Design
          </p>
        </Flash>
      </div>
      <div>
        <div className="mx-4 md:w-10/12 md:mx-auto my-8  md:mt-8 ">
          <form onSubmit={handleDesignSubmit}>
            <div className="grid shadow-lg w-full h-full md:p-20">
              <div className="grid md:grid-cols-2">
                <div className="grid grid-cols md:w-10/12">
                  <input
                    type="text"
                    className="border-2 w-full px-2 py-2 rounded-md mb-4"
                    placeholder="Enter Title"
                    required
                    name="title"
                    onBlur={handleOnBlur}
                  />
                  <input
                    type="text"
                    className="border-2 w-full px-2 py-2 rounded-md mb-4"
                    placeholder="Enter Brand"
                    required
                    name="brand"
                    onBlur={handleOnBlur}
                  />
                  <input
                    type="text"
                    required
                    className="border-2 w-full px-2 py-2 rounded-md mb-4"
                    placeholder="http://imgurl.com"
                    name="img"
                    onBlur={handleOnBlur}
                  />
                  <div>
                    <input
                      type="number"
                      required
                      className="border-2 w-full px-2 py-2 rounded-md mb-4"
                      placeholder="Add Booking Price"
                      name="price"
                      onBlur={handleOnBlur}
                    />
                  </div>
                </div>

                <div className="grid grid-cols">
                  <textarea
                    required
                    placeholder="Enter Description"
                    className="border-2 h-42 px-2 py-2 rounded-md mb-4"
                    name=""
                    id=""
                    cols="30"
                    name="description"
                    onBlur={handleOnBlur}
                  ></textarea>
                </div>
              </div>
              <div className="mx-auto">
                <Shake>
                  <button
                    className="btn-pink transition-all md:mt-8 mb-4 md:mb-0 hover:text-white rounded-full py-3 px-8 md:text-3xl font-extrabold text-white "
                    type="submit"
                    // value="Place Booking"
                  >
                    Post Design
                  </button>
                </Shake>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddADesign;
