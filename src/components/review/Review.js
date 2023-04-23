import React, { useState } from "react";
import ReactStars from "react-stars";
import { reviewsRef } from "../../firebase";
import { addDoc } from "firebase/firestore";
import { TailSpin } from "react-loader-spinner";
import swal from "sweetalert";

const Review = ({ id }) => {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reviewField, setReviewField] = useState("");

  const sendReview = async () => {
    setLoading(true);
    try {
      await addDoc(reviewsRef, {
        movieid: id,
        name: "Akash Pandey",
        rating: rating,
        review: reviewField,
        timestamp: new Date().getTime(),
      });
      swal({
        title: "Review Sent",
        icon: "success",
        buttons: true,
        timer: 3000,
      });
      setReviewField("");
    } catch (error) {
      swal({
        title: error.message,
        icon: "error",
        buttons: true,
        timer: 3000,
      });
    }
    setLoading(false);
  };

  return (
    <>
      <div className="mt-4 w-full border-t-2 border-gray-700">
        <div className="flex flex-col justify-center">
          <ReactStars
            className="mb-2"
            size={30}
            half={true}
            value={rating}
            onChange={(rate) => setRating(rate)}
          />
          <input
            placeholder="Write your review"
            className=" w-full bg-[#16213e] outline-none p-2 rounded-sm text-lg"
            value={reviewField}
            onChange={(e) => setReviewField(e.target.value)}
          />

          <button
            onClick={sendReview}
            className="bg-[#E94560] w-full p-1.5 rounded-sm mt-2 text-lg flex  justify-center "
          >
            {loading ? <TailSpin height={25} color="white" /> : "Share"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Review;
