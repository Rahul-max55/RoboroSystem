import React from "react";
import { useNavigate } from "react-router";
import { PATHS } from "../Router/Path";
import Cookies from "js-cookie";

const Header = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-200 flex justify-between items-center h-42 w-full">
      <div></div>
      <div className="text-xl font-semibold py-2 ">{title}</div>
      <button
        className="bg-blue-400 cursor-pointer text-white hover:bg-white hover:text-black mr-4 px-2 py-1 rounded-lg font-semibold"
        onClick={() => {
          Cookies.remove("token");
          Cookies.remove("user");
          navigate(PATHS.login);
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
