import React from "react";
import { NavLink } from "react-router-dom";
import { FaBell, FaHeart, FaSearch, FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const user = {
  id: "dee",
  avatar: "",
  isAdmin: true,
};

const Navbar = () => {
  return (
    <nav className=" w-full h-16 p-2 flex justify-between items-center border-b-2">
      <h3 className="text-2xl">Logo</h3>
      <div className="flex items-center gap-3 justify-center ">
        <NavLink to="search">
          <FaSearch />
        </NavLink>
        {user?.id ? (
          <>
            <NavLink>
              <NavLink to="/notification">
                <FaBell />
              </NavLink>
            </NavLink>
            {user?.avatar ? (
              <img src={user.avatar} alt="avatar" />
            ) : (
              <NavLink to="/profile">
                <FaUserCircle />
              </NavLink>
            )}
            <NavLink to="wishlist">
              <FaHeart />
            </NavLink>
            <NavLink to="/cart">
              <FaCartShopping />
            </NavLink>
          </>
        ) : (
          <NavLink to="/signin">Sign In</NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
