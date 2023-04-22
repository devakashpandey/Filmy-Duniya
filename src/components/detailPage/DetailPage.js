import React from "react";
import ReactStars from "react-stars";

const DetailPage = () => {
  return (
    <>
      <div className="p-4 mt-4 flex justify-center w-full">
        <img
          className="h-96"
          src="https://tse1.mm.bing.net/th?id=OIP.vG_gIpu3gXSjuVzMn1PZKgHaKw&pid=Api&P=0"
          alt="posterImg"
        />
        <div className="ml-8 w-1/2">
          <h1 className="text-2xl text-gray-300 font-semibold">
            Halloween <span className="font-medium">(2018)</span>
          </h1>
          <ReactStars size={25} half={true} value={5} edit={false} />
          <p className="mt-2">
            Halloween is a 2018 American slasher film directed by David Gordon
            Green and co-written by Green, Jeff Fradley and Danny McBride. It is
            the eleventh installment in the Halloween film series and a sequel
            to the 1978 film of the same name, while disregarding all previous
            sequels. The film stars Jamie Lee Curtis who reprises her role as
            Laurie Strode. James Jude Courtney portrays Michael Myers, with Nick
            Castle returning to the role for a cameo. Halloween also stars Judy
            Greer, Andi Matichak, Will Patton, Haluk Bilginer, and Virginia
            Gardner.
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
