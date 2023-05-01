import React from "react";
import { TailSpin } from "react-loader-spinner";

const Otp = ({ loading, OTP, setOTP, verifyOTP }) => {
  return (
    <>
      <div class="p-2 w-full px-10 md:w-1/4 md:px-0">
        <div class="relative">
          <label for="name" class="leading-7 text-sm text-gray-200">
            OTP
          </label>
          <input
            id="otp"
            name="otp"
            value={OTP}
            onChange={(e) => setOTP(e.target.value)}
            class="w-full bg-gray-100 bg-opacity-80 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2
                     focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 
                     leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <button
        onClick={verifyOTP}
        class="flex mx-auto mt-5 text-white bg-[#0F3460] border-0 py-2 px-6 focus:outline-none hover:bg-[#0F3480]  rounded text-lg"
      >
        {loading ? <TailSpin height={25} color="white" /> : "Confirm OTP"}
      </button>
    </>
  );
};

export default Otp;
