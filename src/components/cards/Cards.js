import React, { useState } from "react";
import ReactStars from "react-stars";

const Cards = () => {
  const [data, setData] = useState([
    {
      name: "Avengers EndGame",
      year: 2018,
      rating: 4,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
      name: "Avengers EndGame",
      year: 2018,
      rating: 3.5,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
      name: "Avengers EndGame",
      year: 2018,
      rating: 5,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
      name: "Avengers EndGame",
      year: 2018,
      rating: 5,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
      name: "Avengers EndGame",
      year: 2018,
      rating: 5,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
      name: "Avengers EndGame",
      year: 2018,
      rating: 5,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
      name: "Avengers EndGame",
      year: 2018,
      rating: 5,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
      name: "Avengers EndGame",
      year: 2018,
      rating: 5,
      img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71niXI3lxlL._SY679_.jpg",
    },
  ]);

  return (
    <>
      <div className="w-full ">
        <div className="w-full flex flex-wrap justify-between items-start  p-3 mt-10 gap-8">
          {data.map((item, index) => {
            const { name, year, rating, img } = item;
            return (
              <div
                key={index}
                className="bg-[#16213E] shadow-xl p-2 rounded-md cursor-pointer hover:-translate-y-3 
                 duration-300"
              >
                <img
                  className="w-64 hover:rounded-lg transition-all duration-200 object-cover"
                  src={img}
                  alt="posterImg"
                />
                <div className="p-1 w-full text-lg ">
                  <h1>
                    <span className="text-[#E94560]">Name</span> : {name}
                  </h1>
                  <h2>Year : {year}</h2>
                  <h2 className="flex gap-1 items-center">
                    Rating :{" "}
                    <ReactStars
                      size={20}
                      half={true}
                      value={rating}
                      edit={false}
                    />{" "}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
