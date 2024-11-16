import React from "react";
import { NavLink } from "react-router-dom";
import { FaBell, FaHeart, FaSearch, FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const user = {
  id: "as",
  avatar: "",
  isAdmin: false,
};

const Navbar = () => {
  return (
    <nav className=" w-screen h-16 p-2 flex bg-slate-400 justify-around items-center border-b-2">
      <h3 className="text-2xl">Logo</h3>
      <div className="flex items-center gap-5 justify-center ">
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
            {user?.isAdmin && (
              <NavLink to="/admin/dashboard">
                <button>Dash</button>
              </NavLink>
            )}
          </>
        ) : (
          <NavLink to="/signin">Sign In</NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
