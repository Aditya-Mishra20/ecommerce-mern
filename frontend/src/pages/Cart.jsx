import React, { useState } from "react";
import toast from "react-hot-toast";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const subtotal = 1500;
const tax = Math.round(subtotal * 0.18);
const shipping = 50;
const discount = 100;
const total = subtotal + tax + shipping;
const discountCoupon = "asd123";

const latestProduct = [
  {
    _id: 1,
    title: "sfs",
    catagory: "UKYMHYMU",
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "#2",
    ],
    quantity: 4,
    price: 200,
  },
  {
    _id: 2,
    title: "asdacc",
    catagory: "EFAFFA",
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "#2",
    ],
    quantity: 55,
    price: 24232,
  },
  {
    _id: 3,
    title: "fewfewf",
    catagory: "FAEFFF",
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "#2",
    ],
    quantity: 33,
    price: 20320,
  },
  {
    _id: 4,
    title: "sfs",
    catagory: "aewrfafvF",
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "#2",
    ],
    quantity: 342,
    price: 67657,
  },
];

const Cart = () => {
  const [couponCode, setCouponCode] = useState("");
  const [isValidCouponCode, setIsValidCouponCode] = useState(false);

  const couponHandler = () => {
    if (couponCode === "") {
      toast.error("Enter Coupon code first");
    } else if (couponCode === discountCoupon) {
      setIsValidCouponCode(true);
      toast.success("Coupon Applied");
    } else {
      toast.error("Invalid Coupon");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
      </div>

      <div className="mx-auto mt-8 max-w-2xl md:mt-12">
        <div className="bg-white shadow">
          <div className="px-4 py-6 sm:px-8 sm:py-10">
            <div className="flow-root">
              {latestProduct.map(({ _id, price, images, title, catagory }) => (
                <CartItem
                  key={_id}
                  price={price}
                  title={title}
                  images={images[0]}
                  catagory={catagory}
                />
              ))}
            </div>

            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">Subtotal</p>
                <p className="text-lg font-semibold text-gray-900">
                  {subtotal}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">Tax (18%)</p>
                <p className="text-lg font-semibold text-gray-900">{tax}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">Shipping</p>
                <p className="text-lg font-semibold text-gray-900">
                  {shipping}
                </p>
              </div>
              {isValidCouponCode && (
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Discount</p>
                  <p className="text-lg font-semibold text-red-500">
                    - {discount}
                  </p>
                </div>
              )}
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">
                <span className="text-xs font-normal text-gray-400">Rs</span>{" "}
                {isValidCouponCode ? total - discount : total}
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Coupon </p>
              <div class="relative inline-block">
                <input
                  type="text"
                  placeholder="Coupon Code..."
                  class="w-[250px] p-2 pl-4 pr-10 rounded-md border-none shadow-md focus:outline-none"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button
                  type="submit"
                  class="absolute top-0 right-0 bg-gray-900 text-white py-2 px-4 rounded-md shadow-md  hover:bg-gray-800"
                  onClick={couponHandler}
                >
                  Apply
                </button>
              </div>
            </div>
            {isValidCouponCode && (
              <p className="text-xs text-end p-2 font-normal text-green-400">
                You got Rs {discount} Off on your purchase.
              </p>
            )}

            <div className="mt-6 text-center">
              <Link to="/checkout">
                <button
                  type="button"
                  className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                >
                  Checkout
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
