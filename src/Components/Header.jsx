import React from "react";
import logo from "../assets/logoo.webp";

const Header = () => {
  return (
    <div className="w-full flex py-4 fixed bg-white px-4 sm:px-8 md:px-10 lg:px-16 z-40">
      <div className="w-full max-w-screen-2xl flex justify-between mx-auto">
        <a href="/" className="w-full flex gap-2 items-center">
          <img className="w-6 h-6 sm:w-12 sm:h-12" src={logo} alt="" />
          <h1 className="sm:text-3xl font-bold text-[#691a99] text-md ">GRMG</h1>
        </a>
        <a
          href="https://buymeacoffee.com/sagartandan_"
          target="_blank"
          className="w-full flex gap-2 items-center justify-end "
        >
          <button className="flex bg-[#ffdd00] px-2 py-1 items-center justify-center rounded-md active:scale-90 duration-100 transition-all">
            <img
              className="w-6 h-6 sm:w-9 sm:h-9 "
              src="https://koronapos.com/wp-content/uploads/2020/04/684569_Landing-Page-Icons-Coffee-Shop-_041320.png"
              alt=""
            />
            <h1 className="sm:text-xl font-semibold text-md ">Donate us</h1>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
