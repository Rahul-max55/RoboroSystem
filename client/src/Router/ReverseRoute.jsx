import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { PATHS } from "./Path";
import Cookies from "js-cookie";

const ReverseRoute = () => {
  const auth = Cookies.get("token");
  return auth ? <Navigate to={PATHS.adminDashboard} /> : <Outlet />;
};

export default ReverseRoute;
