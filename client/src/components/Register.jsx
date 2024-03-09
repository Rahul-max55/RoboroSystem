import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUserAsync } from "../Redux/Slices/adminSlice";

const Register = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(registerUserAsync(data));
  };

  const validatePasswordMatch = (value) => {
    const password = watch("password"); // getting password
    return value === password || "Password do not match";
  };

  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6  m-auto w-9/12 mx-4">
      <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
        Create a Account
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            for="name"
            className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Name
          </label>
          {errors.name && (
            <p className="text-red-400 float-left">name is required</p>
          )}
          <input
            type="text"
            id="name"
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Please Enter Name"
            required
            {...register("name", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label
            for="email"
            className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Email Address
          </label>
          {errors.email && (
            <p className="text-red-400 float-left">email is required</p>
          )}
          <input
            type="email"
            id="email"
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="your@email.com"
            required
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-4">
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
            required
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-400 float-left">password is required</p>
          )}
        </div>
        <div className="mb-4">
          <label
            for="cpassword"
            className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Confirm Password
          </label>
          {errors.cpassword && (
            <p className="text-red-400 float-left">
              Confirm password is required
            </p>
          )}
          <input
            type="cpassword"
            id="cpassword"
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Confirm Password"
            required
            {...register("cpassword", {
              required: true,
              validate: validatePasswordMatch,
            })}
          />
        </div>
        <div className="mb-4 pb-4">
          <p
            for="cpassword"
            className="block text-left pb-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Role
          </p>
          {errors.role && (
            <p className="text-red-400 float-left">Role is required</p>
          )}
          <div className="text-left">
            <label
              htmlFor="worker"
              className="shadow-sm cursor-pointer hover:bg-gray-400 hover:text-white rounded-md mr-10 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <input
                type="radio"
                name="role"
                id="worker"
                value="worker"
                className="mx-2"
                {...register("role", { required: true })}
              />
              Worker
            </label>
            <label
              htmlFor="supervisor"
              className="shadow-sm cursor-pointer hover:bg-blue-400 hover:text-white rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <input
                type="radio"
                name="role"
                id="supervisor"
                value="supervisor"
                className="mx-2"
                {...register("role", { required: true })}
              />
              Supervisor
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
