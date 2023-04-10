import React from "react";
import logo from "../../assets/logo.png";

import ControlPointIcon from "@mui/icons-material/ControlPoint";

const Header = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center p-5">
        <div className="flex items-center cursor-pointer">
          <div>
            <img className="w-14" src={logo} alt="logo" />
          </div>
          <div className="text-[27px] font-semibold">
            Filmy-<span className="text-[#E94560] ">Duniya</span>
          </div>
        </div>
        <div
          className="flex items-center justify-center gap-1.5 text-2xl font-semibold
        cursor-pointer hover:border-2 shadow-xl border-[#0F3460] p-2 rounded-md  "
        >
          <ControlPointIcon style={{ fontSize: 27 }} />
          Add <span className="text-[#E94560] ">New</span>
        </div>
      </div>
    </>
  );
};

export default Header;
