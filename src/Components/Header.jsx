import React from "react";
import logo from "../assets/logoo.webp";

const Header = () => {
  return (
    <div className="w-full flex py-4 fixed bg-white">
      <div className="w-full max-w-screen-2xl flex justify-between mx-auto">
        <div className="w-full flex gap-2 items-center">
          <img className="w-12 h-12" src={logo} alt="" />
          <h1 className="text-3xl font-bold text-[#691a99]">GRMG</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
