import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteUserDataAsync } from "../Redux/Slices/adminSlice";

const Card = ({ allUser }) => {
  const dispatch = useDispatch();
  const { name, email, password , _id } = allUser;
  return (
    <div class="w-64 mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4">
      <div class="bg-gray-100 px-4 py-2 flex">
        <h2 class="text-lg font-medium text-gray-800">Account Details</h2>
        <button
          onClick={() => dispatch(deleteUserDataAsync(_id))}
          className="flex cursor-pointer justify-end ml-auto items-center space-x-2 text-blue-700"
        >
          <MdDelete />
        </button>
      </div>
      <div class="px-4 py-5 sm:p-6">
        <div class="flex flex-col items-start justify-between mb-6">
          <span class="text-sm font-medium text-gray-600">Name</span>
          <span class="text-lg font-medium text-gray-800">{name}</span>
        </div>
        <div class="flex flex-col items-start justify-between mb-6">
          <span class="text-sm font-medium text-gray-600">Email</span>
          <span class="text-lg font-medium text-gray-800">{email}</span>
        </div>
        <div class="flex flex-row items-center justify-between mb-6">
          <div class="flex flex-col items-start">
            <span class="text-sm font-medium text-gray-600">Created At</span>
            <span class="text-lg font-medium text-gray-800">12/24</span>
          </div>
          <div class="flex flex-col items-start">
            <span class="text-sm font-medium text-gray-600">Password</span>
            <span class="text-lg font-medium text-gray-800">{password}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
