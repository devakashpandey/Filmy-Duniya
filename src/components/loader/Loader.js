import React from "react";
import { Puff } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center h-[80vh] ">
        <Puff color="#E94560" />
      </div>
    </>
  );
};

export default Loader;
