import Login from "../pages/Login";
import { PATHS } from "./Path";
import AdminDashboard from "../pages/AdminDashboard";

const commonRoutes = [
  {
    id: "login",
    path: PATHS.login,
    isProtected: false,
    Element: Login,
  },
  {
    id: "adminDashboard",
    path: PATHS.adminDashboard,
    isProtected: true,
    Element: AdminDashboard,
  },
];

export default commonRoutes;
