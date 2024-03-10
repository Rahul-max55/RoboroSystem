import Login from "../pages/Login";
import { PATHS } from "./Path";
import AdminDashboard from "../pages/admin/AdminDashboard";
import SupervisorDashboard from "../pages/supervisor/SupervisorDashboard";
import WorkerDashboard from "../pages/worker/WorkerDashboard";

export const commonRoutes = [
  {
    id: "login",
    path: PATHS.login,
    isProtected: false,
    Element: Login,
  },
];

export const adminRoutes = [
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

export const workerRoutes = [
  {
    id: "login",
    path: PATHS.login,
    isProtected: false,
    Element: Login,
  },
  {
    id: "workerDashboard",
    path: PATHS.workerDashboard,
    isProtected: true,
    Element: WorkerDashboard,
  },
];

export const supervisorRoutes = [
  {
    id: "login",
    path: PATHS.login,
    isProtected: false,
    Element: Login,
  },
  {
    id: "supervisorDashboard",
    path: PATHS.supervisorDashboard,
    isProtected: true,
    Element: SupervisorDashboard,
  },
];
