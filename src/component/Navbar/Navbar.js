import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className="w-full bg-[#1E1A1D] h-[80px] flex items-center justify-between px-5 md:px-10 lg:px-20 fixed z-50 shadow">
      <div className="w-24">
        <img src={logo} className="w-24 h-24" />
      </div>
      <div className="flex gap-4">
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "",
            };
          }}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "",
            };
          }}
          to="/event"
        >
          Events
        </NavLink>

        {/* <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "",
            };
          }}
          to="/"
        > */}
        <a href="#about"> About</a>
        {/* </NavLink> */}

        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "",
            };
          }}
          to="/"
        >
          Shop
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "",
            };
          }}
          to="/gallery"
        >
          Gallery
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
