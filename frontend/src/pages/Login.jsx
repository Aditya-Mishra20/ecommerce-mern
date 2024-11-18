import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/api/v1/user/login", data);

      toast.success(res.data.message);

      reset();
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage =
          error.response.data?.message || "An unexpected error occurred";

        toast.error(errorMessage);
      } else {
        toast.error("Network error. Please check your connection.");
      }
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Log In</h2>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
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
                    value
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

          <p className="text-gray-900 mt-4">
            {" "}
            Don't have an account?{" "}
            <Link
              className="text-sm text-blue-500 -200 hover:underline mt-4"
              to="/register"
            >
              Register
            </Link>
          </p>
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
