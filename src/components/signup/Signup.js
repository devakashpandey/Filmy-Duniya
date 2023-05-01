import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import Otp from "../otp/Otp";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  getAuth,
} from "firebase/auth";
import app from "../../firebase";
import swal from "sweetalert";
import { addDoc } from "firebase/firestore";
// import { bcrypt } from "bcrypt"; // to store pass in database in hash form
import { usersRef } from "../../firebase";

const auth = getAuth(app);

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [form, setform] = useState({
    name: "",
    mobile: "",
    password: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [OTP, setOTP] = useState("");

  // otp generate reCAPTCHA by firebase

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signin
        },
      },
      auth
    );
  };

  // request OTP code

  const requestOTP = () => {
    setLoading(true);
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, `+91${form.mobile}`, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        swal({
          text: "OTP Sent",
          icon: "success",
          timer: 3000,
        });
        setOtpSent(true);
        setLoading(false);
        setOTP("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // uplode user data after otp verify

  const uplodeData = async () => {
    await addDoc(usersRef, {
      form,
    });
  };

  // OTP verify code
  const verifyOTP = () => {
    try {
      setLoading(true);
      window.confirmationResult.confirm(OTP).then((result) => {
        uplodeData();
        swal({
          text: "Successfully Registered",
          icon: "success",
          buttons: "true",
          timer: 3000,
        });
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full flex justify-center mt-14 flex-col items-center">
        <h1 className="text-3xl font-semibold">Signup</h1>
        {otpSent ? (
          <>
            <div className="w-full flex justify-center mt-2 flex-col items-center">
              <Otp
                loading={loading}
                OTP={OTP}
                setOTP={setOTP}
                verifyOTP={verifyOTP}
              />
            </div>
          </>
        ) : (
          <>
            <div className="p-2 w-full px-10 md:w-1/3 md:px-0">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-200"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={(e) => setform({ ...form, name: e.target.value })}
                  className="w-full bg-gray-100 bg-opacity-80 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2
                     focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 
                     leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-full px-10 md:w-1/3 md:px-0">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-200"
                >
                  Number
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  value={form.mobile}
                  onChange={(e) => setform({ ...form, mobile: e.target.value })}
                  className="w-full bg-gray-100 bg-opacity-80 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2
                     focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 
                     leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-full px-10 md:w-1/3 md:px-0">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-200"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={(e) =>
                    setform({ ...form, password: e.target.value })
                  }
                  className="w-full bg-gray-100 bg-opacity-80 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2
                     focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 
                     leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <button
              onClick={requestOTP}
              className="flex mx-auto mt-5 text-white bg-[#0F3460] border-0 py-2 px-6 focus:outline-none hover:bg-[#0F3480]  rounded text-lg"
            >
              {loading ? <TailSpin height={25} color="white" /> : "Request OTP"}
            </button>
            <div className="mt-5">
              <p>
                Already have an account?{" "}
                <Link to="/login">
                  <span className="text-[#E94560] cursor-pointer">Login</span>
                </Link>
              </p>
            </div>
          </>
        )}
      </div>

      <div id="recaptcha-container"></div>
    </>
  );
};

export default Signup;
