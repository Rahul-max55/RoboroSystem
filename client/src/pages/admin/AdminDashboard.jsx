import React from "react";
import AdminDetails from "../../components/AdminDetails";
import Register from "../../components/Register";
import Card from "../../components/Card";
import { useSelector } from "react-redux";
import { allUser } from "../../Redux/Slices/adminSlice";
import Header from "../../components/Header";

const AdminDashboard = () => {
  const allUsers = useSelector(allUser);

  return (
    <>
      <Header title="Admin Dashboard" />
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
