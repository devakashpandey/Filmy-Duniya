import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form, setform] = useState({
    mobile: "",
    password: "",
  });

  return (
    <>
      <div className="w-full flex justify-center mt-14 flex-col items-center">
        <h1 className="text-3xl font-semibold">Login</h1>

        <div class="p-2 w-full px-10 md:w-1/3 md:px-0">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-200">
              Number
            </label>
            <input
              type="number"
              id="number"
              name="number"
              value={form.mobile}
              onChange={(e) => setform({ ...form, mobile: e.target.value })}
              class="w-full bg-gray-100 bg-opacity-80 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2
                     focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 
                     leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        <div class="p-2 w-full px-10 md:w-1/3 md:px-0">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-200">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={(e) => setform({ ...form, password: e.target.value })}
              class="w-full bg-gray-100 bg-opacity-80 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2
                     focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 
                     leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <button
          onClick={null}
          class="flex mx-auto mt-5 text-white bg-[#0F3460] border-0 py-2 px-8 focus:outline-none hover:bg-[#0F3480]  rounded text-lg"
        >
          {loading ? <TailSpin height={25} color="white" /> : "Login"}
        </button>
        <div className="mt-5">
          <p>
            Do not have account?{" "}
            <Link to="/signup">
              <span className="text-[#E94560] cursor-pointer">Signup</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
