import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { profile, adminLoginAsync } from "../Redux/Slices/adminSlice";
import { useNavigate } from "react-router";
import { PATHS } from "../Router/Path";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { msg } = useSelector(profile);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(adminLoginAsync(data)); // Wait for the login action to complete
    const role = Cookies.get("user") && JSON.parse(Cookies.get("user"))?.role;
    console.log("🚀 ~ Login ~ role:", role);
    if (Cookies.get("token")) {
      switch (role) {
        case "admin":
          navigate(PATHS.adminDashboard);
          break;
        case "supervisor":
          navigate(PATHS.supervisorDashboard);
          break;
        case "worker":
          navigate(PATHS.workerDashboard);
          break;
        default:
          // navigate(PATHS.login);
          break;
      }
    }
  };

  useEffect(() => {
    // Print the message only when it changes
    msg && alert(msg);
  }, [msg]); // Re-run this effect whenever `msg` changes

  return (
    <>
      <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md w-full">
          <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
            Welcome Back!
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                for="email"
                className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="your@email.com"
                {...register("email", {
                  required: true,
                })}
                required
              />
              {errors.email && errors.email.type === "required" && (
                <p className="text-red-600 text-xs float-left p-1">
                  *Email is required.
                </p>
              )}
            </div>
            <div className="mb-4 mt-6">
              <label
                for="password"
                className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
                {...register("password", {
                  required: true,
                })}
                required
              />
              {errors.password && errors.password.type === "required" && (
                <p className="text-red-600 float-left p-1 text-xs">
                  *Password is required.
                </p>
              )}
            </div>
            <div className="flex items-center justify-between mb-4 mt-10">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
                  checked
                />
                <label
                  for="remember"
                  className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
