import React from "react";
import { NavLink } from "react-router-dom";
import { FaBell, FaHeart, FaSearch, FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className=" w-full h-16 bg-slate-700 flex justify-between items-center">
      <h3 className="text-2xl">Logo</h3>
      <div className="flex items-center gap-3 justify-center ">
        <input type="text" placeholder="Search..." />
        <FaSearch />
        <FaBell />
        <FaUserCircle />
        <FaHeart />
        <FaCartShopping />
      </div>
    </nav>
  );
};

export default Navbar;
