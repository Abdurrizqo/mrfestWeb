import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-[#1E1A1D] h-[80px] flex items-center justify-between px-20">
      <div className="text-white text-3xl font-black">Logo</div>
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

        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "",
            };
          }}
          to="/"
        >
          About
        </NavLink>

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
