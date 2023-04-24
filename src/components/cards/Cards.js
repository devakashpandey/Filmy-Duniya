import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import Loader from "../loader/Loader";
import { getDocs } from "firebase/firestore";
import { moviesCollRef } from "../../firebase";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const movieData = async () => {
    setLoading(true);
    const data = await getDocs(moviesCollRef);
    data?.forEach((movies) => {
      setData((prevData) => [...prevData, { ...movies.data(), id: movies.id }]);
    });
    setLoading(false);
  };

  useEffect(() => {
    movieData();
  }, []);

  return (
    <>
      <div className="w-full ">
        <div className="w-full flex flex-wrap justify-center items-center md:justify-start  p-3 mt-8 gap-8">
          {loading ? (
            <Loader />
          ) : (
            data?.map((item, index) => {
              const { name, year, rating, image, id } = item;
              return (
                <Link to={`/detail/${id}`}>
                  <div
                    key={index}
                    className="bg-[#16213E] shadow-xl p-2 rounded-md cursor-pointer hover:-translate-y-3 
                 duration-300"
                  >
                    <img
                      className="w-60 md:w-64 hover:rounded-lg transition-all duration-200 object-cover"
                      src={image}
                      alt="posterImg"
                    />
                    <div className="p-1 w-full text-lg ">
                      <h1>
                        <span className="text-[#E94560]">Name</span> :{" "}
                        <span className="capitalize">{name}</span>
                      </h1>
                      <h2>Year : {year}</h2>
                      <h2 className="flex gap-1 items-center">
                        Rating :{" "}
                        <ReactStars
                          size={20}
                          half={true}
                          value={item.rating / item.rated}
                          edit={false}
                        />{" "}
                      </h2>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Cards;
