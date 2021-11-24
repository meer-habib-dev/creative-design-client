import React, { useState } from "react";
import Rating from "react-rating";
import useAuth from "../../../Hooks/useAuth";

const PostReview = () => {
  const [postReview, setPostReview] = useState({});
  const [rate, setRate] = useState(0);
  const { user } = useAuth();
  const { displayName, photoURL } = user;
  // console.log(user);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReviewData = { ...postReview };
    newReviewData[field] = value;
    setPostReview(newReviewData);
  };
  const handleReviewSubmit = (e) => {
    const reviewData = {
      name: displayName,
      img: photoURL,
      user: "Creative User",
      ...postReview,
    };
    fetch("https://safe-reaches-08421.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Review Successfull");
        }
      });
    e.preventDefault();
  };

  return (
    <div className="h-screen flex flex-col justify-center px-8 md:px-0 align-middle">
      <div>
        <form onSubmit={handleReviewSubmit}>
          <div
            className="flex flex-col relative b max-w-sm w-full rounded-lg overflow-hidden mx-auto"
            x-data="{maximum: ''}"
          >
            <div className="flex justify-between">
              <h2 className="font-bold mb-1 text-gray-700 block">
                {" "}
                Give Rating:
              </h2>
              <Rating
                onChange={(rate) => setRate(rate)}
                fullSymbol="fas fa-star"
                emptySymbol="far fa-star"
              />
              <label className="sr-only">Rating</label>
              <select
                id="currency"
                className="focus:ring-indigo-500 outline-none    focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                name="rating"
                onBlur={handleOnBlur}
              >
                <option>{rate}</option>
              </select>
            </div>
            <textarea
              name="review"
              onBlur={handleOnBlur}
              rows="4"
              placeholder="Start Writing"
              maxlength="210"
              x-model="maximum"
              x-ref="maximum"
              className="block w-full bg-gray-100 mt-1 py-2 px-3 rounded-md shadow-sm focus:outline-none"
            ></textarea>

            <button type="submit" className="btn-pink py-4">
              Post Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostReview;
