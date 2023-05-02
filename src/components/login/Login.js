import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { query, where, getDocs } from "firebase/firestore";
import { usersRef } from "../../firebase";
import bcrypt from "bcryptjs";
import { useGlobalContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { setLogin, setUserName } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [form, setform] = useState({
    mobile: "",
    password: "",
  });

  const handleLogin = async () => {
    setLoading(true);

    try {
      const quer = query(usersRef, where("mobile", "==", form.mobile));
      const snapShot = await getDocs(quer);

      snapShot.forEach((doc) => {
        const data = doc.data();
        const isUser = bcrypt.compareSync(form.password, data.password);
        if (isUser) {
          setLogin(true);
          setUserName(doc.name);
          swal({
            text: "Logged In",
            icon: "success",
            buttons: false,
            timer: 3000,
          });
          navigate("/");
        } else {
          swal({
            text: "Inavlid credentials",
            icon: "error",
            buttons: false,
            timer: 3000,
          });
        }
      });
    } catch (error) {
      swal({
        text: error.message,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    }
    setLoading(false);
  };

  return (
    <>
      <div className="w-full flex justify-center mt-14 flex-col items-center">
        <h1 className="text-3xl font-semibold">Login</h1>

        <div className="p-2 w-full px-10 md:w-1/3 md:px-0">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-200">
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
            <label htmlFor="name" className="leading-7 text-sm text-gray-200">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={(e) => setform({ ...form, password: e.target.value })}
              className="w-full bg-gray-100 bg-opacity-80 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2
                     focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 
                     leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <button
          onClick={handleLogin}
          className="flex mx-auto mt-5 text-white bg-[#0F3460] border-0 py-2 px-8 focus:outline-none hover:bg-[#0F3480]  rounded text-lg"
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
