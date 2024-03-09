import React, { useEffect } from "react";
import AdminDetails from "../components/AdminDetails";
import Register from "../components/Register";
import Card from "../components/Card";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { PATHS } from "./../Router/Path";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserAsync } from "../Redux/Slices/adminSlice";
import { allUser } from "./../Redux/Slices/adminSlice";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allUsers = useSelector(allUser);

  useEffect(() => {
    dispatch(getAllUserAsync());
  }, []);

  return (
    <>
      <div className="bg-gray-200 flex justify-between items-center h-42 w-full">
        <div></div>
        <div className="text-xl font-semibold py-2 ">Admin Dashboard</div>
        <button
          className="bg-blue-400 cursor-pointer text-white hover:bg-white hover:text-black mr-4 px-2 py-1 rounded-lg font-semibold"
          onClick={() => {
            Cookies.remove("token");
            navigate(PATHS.login);
          }}
        >
          Logout
        </button>
      </div>
      <div>
        <div className="flex mt-6">
          <AdminDetails />
          <Register />
        </div>

        {/* supervisor */}
        <div className="flex w-full mt-8 space-x-2 ">
          <div className="w-1/2 border border-gray-400 rounded-lg">
            <h1 className="text-3xl font-bold p-4">Supervisor</h1>
            <div className="w-full flex flex-wrap">
              {allUsers?.map((val, index) => {
                return (
                  val.role === "supervisor" && (
                    <Card key={index} allUser={val} />
                  )
                );
              })}
            </div>
          </div>
          {/* supervisor */}

          {/* Worker */}
          <div className="w-1/2 border border-gray-400 rounded-lg">
            <h1 className="text-3xl font-bold p-4">Worker</h1>
            <div className="w-full /' flex flex-wrap">
              {allUsers?.map((val, index) => {
                return (
                  val.role === "worker" && (
                    <Card key={index} allUser={val} />
                  )
                );
              })}
            </div>
          </div>
          {/* Worker */}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
