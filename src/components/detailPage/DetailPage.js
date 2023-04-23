import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Review from "../review/Review";

const DetailPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [movieDetail, setMovieDetail] = useState({
    name: "",
    year: "",
    image: "",
    description: "",
  });

  const getData = async () => {
    setLoading(true);
    const docRef = doc(db, "movies", id);
    const movieData = await getDoc(docRef);
    setMovieDetail(movieData.data());
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="p-4 mt-4 flex flex-col md:flex-row items-center md:items-start justify-center w-full">
          <img
            className="w-64 md:h-96 md:sticky md:top-24"
            src={movieDetail.image}
            alt="posterImg"
          />
          <div className="ml-0 flex items-center md:items-start flex-col md:ml-8 w-full md:w-1/2">
            <h1 className="text-3xl text-gray-300 font-semibold capitalize flex gap-2">
              {movieDetail.name}
              <span className="font-medium text-2xl">({movieDetail.year})</span>
            </h1>
            <ReactStars size={25} half={true} value={5} edit={false} />
            <p className="mt-2 text-justify">{movieDetail.description}</p>
            <Review />
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPage;
