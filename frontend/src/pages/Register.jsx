import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Register</h2>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <label
            className="text-sm mb-2 text-gray-900 cursor-pointer"
            htmlFor="full_name"
          >
            Full Name
          </label>
          <input
            placeholder="Full Name"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            {...register("full_name", {
              required: "Full name is required",
            })}
          />
          {errors.full_name?.type === "required" && (
            <p className="text-red-500 text-sm"> Full Name is required</p>
          )}
          <label
            className="text-sm mb-2 text-gray-900 cursor-pointer"
            htmlFor="email"
          >
            Email
          </label>
          <input
            placeholder="Email"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="email"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
              },
            })}
          />

          {errors.email && (
            <p className="text-red-500 text-sm"> {errors.email.message}</p>
          )}
          <label
            className="text-sm mb-2 text-gray-900 cursor-pointer"
            htmlFor="password"
          >
            Password
          </label>
          <input
            placeholder="Password"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="password"
            {...register("password", {
              required: "Password is required",
              validate: {
                checkLength: (value) => value.length >= 6,
                matchPattern: (value) =>
                  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                    value,
                  ),
              },
            })}
          />
          {errors.password?.type === "checkLength" && (
            <p className="text-red-500 text-sm">
              {" "}
              Password should be at-least 6 characters.
            </p>
          )}
          {errors.password?.type === "matchPattern" && (
            <p className="text-red-500 text-sm">
              {" "}
              Password should contain at least one uppercase letter, lowercase
              letter, digit, and special symbol.
            </p>
          )}

          <label
            className="text-sm mb-2 text-gray-900 cursor-pointer"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            id="gender"
            {...register("gender", {
              required: "Please select gender",
              validate: (value) =>
                value !== "default" || "Please select gender",
            })}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <label className="text-sm mb-2 text-gray-900 cursor-pointer">
            Phone Number
          </label>
          <input
            placeholder="Phone Number"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="tel"
            {...register("phone_no", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/, // Regex pattern for 10-digit phone number
                message: "Phone number must be 10 digits",
              },
              minLength: {
                value: 10,
                message: "Phone number must be at least 10 digits",
              },
              maxLength: {
                value: 10,
                message: "Phone number cannot exceed 10 digits",
              },
            })}
          />
          {errors.phone_no && (
            <p className="text-red-500 text-sm">{errors.phone_no.message}</p>
          )}
          <label
            className="text-sm mb-2 text-gray-900 cursor-pointer"
            htmlFor="dob"
          >
            Birth Date:
          </label>
          <input
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2"
            id="dob"
            type="date"
            {...register("date_of_birth", {
              required: "Birth Date is required",
            })}
          />
          {errors.date_of_birth?.type === "required" && (
            <p className="text-red-500 text-sm">Birth Date Required</p>
          )}
          <p className="text-gray-900 mt-4">
            {" "}
            Already have an account?{" "}
            <Link
              className="text-sm text-blue-500 -200 hover:underline mt-4"
              href="#"
            >
              Login
            </Link>
          </p>
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
