import React, { useEffect, useState } from "react";
import Register from "../../components/Register";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { allUser, getAllUserAsync } from "../../Redux/Slices/adminSlice";
import Header from "../../components/Header";
import Cookies from "js-cookie";

const AdminDashboard = () => {
  const allUsers = useSelector(allUser);
  const [showMsg, setShowMsg] = useState({ super: false, worker: false });

  const dispatch = useDispatch();
  let user = {};
  if (Cookies.get("token")) {
    const jsonUserData = Cookies.get("user");
    user = JSON.parse(jsonUserData);
    console.log("🚀 ~ App ~ user:", user);
  }
  useEffect(() => {
    dispatch(getAllUserAsync(user));
  }, [dispatch]);

  useEffect(() => {
    const superBoolean = allUsers?.some((val) => {
      return val.role === "supervisor";
    });
    const workerBoolean = allUsers?.some((val) => {
      return val.role === "worker";
    });

    setShowMsg({ ...showMsg, worker: workerBoolean, super: superBoolean });
  }, [allUsers]);

  console.log("🚀 ~ AdminDashboard ~ showMsg:", showMsg);
  return (
    <>
      <Header title="Admin Dashboard" />
      <div>
        <div className="flex mt-6 m-auto justify-center items-center">
          <Register />
        </div>

        {/* supervisor */}
        <div className="flex w-full mt-8 space-x-2 ">
          <div className="w-1/2 border border-gray-400 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold p-4">Supervisor</h1>
            <div className="w-full flex flex-wrap">
              {!showMsg.super && (
                <div className="bg-red-400 w-full text-xl font-bold p-8 rounded-sm ">
                  No worker account is created
                </div>
              )}

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
          <div className="w-1/2 border border-gray-400 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold p-4">Worker</h1>
            <div className="w-full flex flex-wrap">
              {!showMsg.worker && (
                <div className="bg-red-400 w-full text-xl font-bold p-8 rounded-sm ">
                  No worker account is created
                </div>
              )}
              {allUsers?.map((val, index) => {
                return (
                  val.role === "worker" && <Card key={index} allUser={val} />
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
