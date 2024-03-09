import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import commonRoutes from "./Routes";
import PrivateRoute from "./PrivateRoute";
import ReverseRoute from "./ReverseRoute";

const RouteMap = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        {commonRoutes.map((val) => {
          return val.isProtected ? (
            <Route key={val.id} element={<PrivateRoute />}>
              <Route path={val.path} element={<val.Element />} />
            </Route>
          ) : (
            <Route key={val.id} element={<ReverseRoute />}>
              <Route path={val.path} element={<val.Element />} />
            </Route>
          );
        })}
      </Routes>
    </>
  );
};

export default RouteMap;
