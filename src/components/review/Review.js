import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { reviewsRef, db } from "../../firebase";
import {
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import swal from "sweetalert";
import { useGlobalContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Review = ({ id, prevRating, Rated }) => {
  const { userName, login } = useGlobalContext();
  const navigate = useNavigate();

  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reviewField, setReviewField] = useState("");
  const [reviewData, setReviewData] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(false);

  const sendReview = async () => {
    setLoading(true);
    if (rating && reviewField) {
      try {
        if (login) {
          await addDoc(reviewsRef, {
            movieid: id,
            name: userName,
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
          const docRef = doc(db, "movies", id);
          await updateDoc(docRef, {
            rating: prevRating + rating,
            rated: Rated + 1,
          });
        } else {
          swal({
            title: "Please Login First!!",
            icon: "warning",
            buttons: true,
            timer: 2000,
          });

          navigate("/login");
        }
        setRating(0);
        setReviewField("");
      } catch (error) {
        swal({
          title: error.message,
          icon: "error",
          buttons: true,
          timer: 3000,
        });
      }
    } else {
      swal({
        title: "Please fill both field!!",
        icon: "warning",
        buttons: true,
        timer: 3000,
      });
    }

    setLoading(false);
  };

  const getReviewData = async () => {
    setReviewsLoading(true);
    const quer = query(reviewsRef, where("movieid", "==", id));
    const snapShot = await getDocs(quer);

    snapShot.forEach((doc) => {
      setReviewData((prevData) => [...prevData, doc.data()]);
    });
    setReviewsLoading(false);
  };

  useEffect(() => {
    getReviewData();
  }, []);

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
          {reviewsLoading ? (
            <div className="mt-10 flex justify-center ">
              <ThreeDots color="white" height={12} />
            </div>
          ) : (
            <div className="mt-5">
              {reviewData.map((ele, index) => {
                return (
                  <div
                    key={index}
                    className=" bg-[#16213e]  p-2 w-full mt-2 border-b border-gray-700"
                  >
                    <div className="flex gap-2 items-center">
                      <p>{ele.name}</p>
                      <p className="text-xs">
                        ({new Date(ele.timestamp).toLocaleString()})
                      </p>
                    </div>
                    <ReactStars
                      size={15}
                      half={true}
                      value={ele.rating}
                      edit={false}
                    />
                    <p>{ele.review}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Review;
