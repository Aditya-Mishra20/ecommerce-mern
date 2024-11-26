import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const [checkout, setCheckout] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setCheckout(data);
  };

  useEffect(() => {
    if (checkout) {
      console.log(checkout);
    }
  }, [checkout]);

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <Link to="#" className="mb-3">
            <button className="hover:bg-slate-200 rounded-full">
              <IoIosArrowBack />
            </button>
          </Link>
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              {/* Email */}
              <label
                htmlFor="email"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className={`w-full rounded-md border px-4 py-3 pl-11 text-sm shadow-sm outline-none ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  }`}
                  placeholder="your.email@gmail.com"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Card Holder */}
              <label
                htmlFor="cardHolder"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Card Holder
              </label>
              <input
                type="text"
                id="cardHolder"
                className={`w-full rounded-md border px-4 py-3 pl-11 text-sm shadow-sm outline-none ${
                  errors.cardHolder ? "border-red-500" : "border-gray-200"
                }`}
                placeholder="Your full name here"
                {...register("cardHolder", {
                  required: "Card holder name is required",
                })}
              />
              {errors.cardHolder && (
                <span className="text-red-500 text-sm">
                  {errors.cardHolder.message}
                </span>
              )}

              {/* Card Details */}
              <label
                htmlFor="cardDetails"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Card Details
              </label>
              <div className="flex flex-col">
                <input
                  type="text"
                  id="cardDetails"
                  className={`w-7/12 rounded-md border px-2 py-3 text-sm shadow-sm outline-none ${
                    errors.cardDetails ? "border-red-500" : "border-gray-200"
                  }`}
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  {...register("cardDetails", {
                    required: "Card details are required",
                  })}
                />
                {errors.cardDetails && (
                  <span className="text-red-500 text-sm">
                    {errors.cardDetails.message}
                  </span>
                )}
                <input
                  type="text"
                  className={`w-full rounded-md border px-2 py-3 text-sm shadow-sm outline-none ${
                    errors.expiry ? "border-red-500" : "border-gray-200"
                  }`}
                  placeholder="MM/YY"
                  {...register("expiry", {
                    required: "Expiry date is required",
                  })}
                />
                {errors.expiry && (
                  <span className="text-red-500 text-sm">
                    {errors.expiry.message}
                  </span>
                )}
                <input
                  type="text"
                  className={`w-1/6 rounded-md border px-2 py-3 text-sm shadow-sm outline-none ${
                    errors.cvc ? "border-red-500" : "border-gray-200"
                  }`}
                  placeholder="CVC"
                  {...register("cvc", { required: "CVC is required" })}
                />
                {errors.cvc && (
                  <span className="text-red-500 text-sm">
                    {errors.cvc.message}
                  </span>
                )}
              </div>

              {/* Billing Address */}
              <label
                htmlFor="billingAddress"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Billing Address
              </label>
              <input
                type="text"
                id="billingAddress"
                className={`w-full rounded-md border px-4 py-3 text-sm shadow-sm outline-none ${
                  errors.billingAddress ? "border-red-500" : "border-gray-200"
                }`}
                placeholder="Street Address"
                {...register("billingAddress", {
                  required: "Billing address is required",
                })}
              />
              {errors.billingAddress && (
                <span className="text-red-500 text-sm">
                  {errors.billingAddress.message}
                </span>
              )}
              <div className="flex flex-col sm:flex-row mt-2">
                <select
                  className="w-full rounded-md border px-4 py-3 text-sm shadow-sm outline-none focus:border-blue-500"
                  {...register("country", { required: "State is required" })}
                >
                  <option value="">Choose Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                </select>
                <select
                  className="w-full rounded-md border px-4 py-3 text-sm shadow-sm outline-none focus:border-blue-500"
                  {...register("state", { required: "State is required" })}
                >
                  <option value="">Choose State</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Gujarat">Gujarat</option>
                </select>
                <input
                  type="text"
                  className={`flex-shrink-0 rounded-md border px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 ${
                    errors.zip ? "border-red-500" : "border-gray-200"
                  }`}
                  placeholder="ZIP"
                  {...register("zip", { required: "ZIP code is required" })}
                />
                {errors.zip && (
                  <span className="text-red-500 text-sm">
                    {errors.zip.message}
                  </span>
                )}
              </div>

              {/* Total */}
              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Subtotal</p>
                  <p className="font-semibold text-gray-900">$399.00</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Shipping</p>
                  <p className="font-semibold text-gray-900">$8.00</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">$408.00</p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
