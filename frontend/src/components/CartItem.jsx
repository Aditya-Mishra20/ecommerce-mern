import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

const CartItem = ({ price, title, images, catagory }) => {
  let [counter, setCounter] = useState(0);
  return (
    <div className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
      <div className="shrink-0">
        <img
          className="h-24 w-24 max-w-full rounded-lg object-cover"
          src={images}
          alt={title}
        />
      </div>

      <div className="relative flex flex-1 flex-col justify-between">
        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
          <div className="pr-8 sm:pr-5">
            <p className="text-base font-semibold text-gray-900">{title}</p>
            <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">{catagory}</p>
          </div>

          <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
            <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
              <span className="text-xs font-normal text-gray-400">Rs</span>{" "}
              {price}
            </p>

            <div className="sm:order-1">
              <div className="mx-auto flex h-8 items-stretch text-gray-600">
                <button
                  className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                  onClick={() => setCounter(--counter)}
                >
                  -
                </button>
                <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                  {counter}
                </div>
                <button
                  className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                  onClick={() => setCounter(++counter)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
          <button
            type="button"
            className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
          >
            <FiTrash2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
