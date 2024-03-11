import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import PrivateRoute from "./PrivateRoute";
import { useSelector } from "react-redux";
import { profile } from "../Redux/Slices/adminSlice";
import {
  adminRoutes,
  supervisorRoutes,
  workerRoutes,
  commonRoutes,
} from "./Routes";
import AdminReverseRoute, {
  SupervisorReverseRoute,
  WorkerReverseRoute,
} from "./ReverseRoute";
import Cookies from "js-cookie";
const RouteMap = () => {
  const { user } = useSelector(profile);
  const role = Cookies.get("user") && JSON.parse(Cookies.get("user"))?.role;
  return (
    <>
      <Routes>
        {commonRoutes?.map((val) => {
          return <Route path={val.path} element={<val.Element />} />;
        })}

        {role === "admin" &&
          adminRoutes?.map((val) => {
            return val?.isProtected ? (
              <Route key={val.id} element={<PrivateRoute />}>
                <Route path={val.path} element={<val.Element />} />
              </Route>
            ) : (
              <Route key={val.id} element={<AdminReverseRoute />}>
                <Route path={val.path} element={<val.Element />} />
              </Route>
            );
          })}

        {role === "worker" &&
          workerRoutes?.map((val) => {
            return val?.isProtected ? (
              <Route key={val.id} element={<PrivateRoute />}>
                <Route path={val.path} element={<val.Element />} />
              </Route>
            ) : (
              <Route key={val.id} element={<WorkerReverseRoute />}>
                <Route path={val.path} element={<val.Element />} />
              </Route>
            );
          })}

        {role === "supervisor" &&
          supervisorRoutes?.map((val) => {
            return val?.isProtected ? (
              <Route key={val.id} element={<PrivateRoute />}>
                <Route path={val.path} element={<val.Element />} />
              </Route>
            ) : (
              <Route key={val.id} element={<SupervisorReverseRoute />}>
                <Route path={val.path} element={<val.Element />} />
              </Route>
            );
          })}
      </Routes>
    </>
  );
};

export default RouteMap;
