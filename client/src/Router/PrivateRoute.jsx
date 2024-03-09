import React from "react";
import { Navigate, Outlet } from "react-router";
import { PATHS } from "./Path";
import Cookies from "js-cookie";

const PrivateRoute = () => {
  const auth = Cookies.get("token");
  return auth ? <Outlet /> : <Navigate to={PATHS.login} />;
};

export default PrivateRoute;
