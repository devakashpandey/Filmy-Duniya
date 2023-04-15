import React from "react";
import logo from "../../assets/logo.png";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center p-5">
        <div className="flex items-center cursor-pointer">
          <div>
            <img className="w-14" src={logo} alt="logo" />
          </div>
          <div className="text-[25px] font-semibold">
            Filmy-<span className="text-[#E94560] ">Duniya</span>
          </div>
        </div>
        <Link to="/addmovie">
          <div
            className="flex items-center justify-center gap-1 text-[20px] font-semibold
        cursor-pointer border-2 shadow-xl border-[#0F3460] p-2 rounded-md hover:translate-x-1 duration-200"
          >
            <ControlPointIcon style={{ fontSize: 25 }} />
            Add <span className="text-[#E94560] ">New</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
