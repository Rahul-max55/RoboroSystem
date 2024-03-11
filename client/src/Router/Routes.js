import Login from "../pages/Login";
import { PATHS } from "./Path";
import AdminDashboard from "../pages/admin/AdminDashboard";
import SupervisorDashboard from "../pages/supervisor/SupervisorDashboard";
import WorkerDashboard from "../pages/worker/WorkerDashboard";
import PageNotFound from "../pages/PageNotFound";

export const commonRoutes = [
  {
    id: "login",
    path: PATHS.login,
    isProtected: false,
    Element: Login,
  },
  {
    id: "pageNotFound",
    path: PATHS.pageNotFound,
    isProtected: false,
    Element: PageNotFound,
  },
];

export const adminRoutes = [
  {
    id: "adminDashboard",
    path: PATHS.adminDashboard,
    isProtected: true,
    Element: AdminDashboard,
  },
];

export const workerRoutes = [
  {
    id: "workerDashboard",
    path: PATHS.workerDashboard,
    isProtected: true,
    Element: WorkerDashboard,
  },
];

export const supervisorRoutes = [
  {
    id: "supervisorDashboard",
    path: PATHS.supervisorDashboard,
    isProtected: true,
    Element: SupervisorDashboard,
  },
];
