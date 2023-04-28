import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/Context";

const Header = () => {
  const { login } = useGlobalContext();

  return (
    <>
      <div className="w-full sticky top-0 bg-[#16213e] z-10 flex justify-between items-center p-5 h-[74px]">
        <Link to="/">
          <div className="flex items-center cursor-pointer">
            <div>
              <img className="w-11" src={logo} alt="logo" />
            </div>
            <div className="text-[23px] font-semibold hidden md:inline-flex">
              Filmy-<span className="text-[#E94560] ">Duniya</span>
            </div>
          </div>
        </Link>
        {login ? (
          <Link to="/addmovie">
            <div
              className="flex items-center justify-center gap-1 text-[19px] font-semibold
        cursor-pointer border-2 shadow-xl border-[#0F3460] p-2 rounded-md hover:translate-x-1 duration-200"
            >
              <ControlPointIcon style={{ fontSize: 23 }} />
              Add{" "}
              <span className="text-[#E94560] ">
                <span className="hidden md:inline-flex">New</span>
              </span>
            </div>
          </Link>
        ) : (
          <Link to="/login">
            <div
              className="flex items-center justify-center gap-1 text-[19px] font-semibold
        cursor-pointer border-2 shadow-xl border-[#0F3460] p-2 rounded-md hover:translate-x-1 duration-200"
            >
              <ControlPointIcon style={{ fontSize: 23 }} />
              Login
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default Header;
