import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const ProductCard = ({ title, catagory, images, quantity, price }) => {
  return (
    <div className=" flex flex-col  w-60 h-96 bg-slate-200">
      <div className=" bg-orange-800 w-full h-2/3">
        <img src={images} alt="aFFEFE" />
      </div>
      <div className=" flex items-center justify-between p-2">
        <h2 className=" text-lg">{title}</h2>
        <div className=" flex items-center gap-5">
          <Link className=" text-lg  hover:bg-slate-400" to="wishlist">
            <FaHeart />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between p-2 ">
        <h1 className="text-xl font-bold">${price}</h1>
        <p className="text-sm font-light">{quantity} Stocks</p>
      </div>
      <div className="flex justify-between items-center p-2">
        <Link className="text-lg" to="/cart">
          <button className="flex items-center gap-3 hover:bg-slate-400 p-1">
            Buy
            <FaCartShopping />
          </button>
        </Link>
        <p className="text-sm font-light">{catagory}</p>
      </div>
    </div>
  );
};

export default ProductCard;
