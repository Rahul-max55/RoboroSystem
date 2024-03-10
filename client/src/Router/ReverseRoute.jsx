import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { PATHS } from "./Path";
import Cookies from "js-cookie";

const AdminReverseRoute = () => {
  const auth = Cookies.get("token");
  return auth ? <Navigate to={PATHS.adminDashboard} /> : <Outlet />;
};

export const WorkerReverseRoute = () => {
  const auth = Cookies.get("token");
  return auth ? <Navigate to={PATHS.workerDashboard} /> : <Outlet />;
};

export const SupervisorReverseRoute = () => {
  const auth = Cookies.get("token");
  return auth ? <Navigate to={PATHS.supervisorDashboard} /> : <Outlet />;
};

export default AdminReverseRoute;
