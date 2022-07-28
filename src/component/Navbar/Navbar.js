import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <div className="w-full bg-[#433F42] h-[80px] flex items-center justify-between px-5 md:px-10 lg:px-20 fixed z-[1000] drop-shadow-2xl">
        <div className="w-24">
          <img src={logo} className="w-24 h-24" />
        </div>
        <div className="flex gap-4">
          <Link className="text-white" to="/">
            Home
          </Link>
          <a href="#event" className="text-white">
            Events
          </a>
          <a href="#about" className="text-white">
            About
          </a>
          <a href="#shop" className="text-white">
            Shop
          </a>
          <a href="#gallery" className="text-white">
            Gallery
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full bg-[#433F42] h-[80px] flex items-center justify-between px-5 md:px-10 lg:px-20 fixed z-[1000] drop-shadow-2xl">
        <div className="w-24">
          <img src={logo} className="w-24 h-24" />
        </div>
        <div className="flex gap-4">
          <Link className="text-white" to="/">
            Home
          </Link>
          <Link to="/" className="text-white">
            Events
          </Link>
          <Link to="/" className="text-white">
            About
          </Link>
          <Link to="/" className="text-white">
            Shop
          </Link>
          <Link to="/" className="text-white">
            Gallery
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
