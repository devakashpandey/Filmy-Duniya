import React from "react";

const Review = () => {
  return (
    <>
      <div className="mt-4 w-full">
        <div className="flex flex-col justify-center">
          <input
            placeholder="Write your review"
            className=" w-full bg-[#16213e] outline-none p-2 rounded-sm text-lg"
          />
          <button className="bg-[#E94560] w-full p-1.5 rounded-sm mt-2 text-lg ">
            Share
          </button>
        </div>
      </div>
    </>
  );
};

export default Review;
