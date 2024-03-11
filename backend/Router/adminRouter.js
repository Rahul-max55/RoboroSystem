import express from "express";
import {
  createAccountController,
  deleteUserData,
  getAllUsers,
  loginAccountController,
  uploadImageProductController,
} from "../controller/account.js";
import { Authorization } from "../middlewares/userAuthorization.js";

const adminRouter = express.Router();
adminRouter.post("/login", loginAccountController);
adminRouter.post("/createAccount", Authorization, createAccountController);
adminRouter.get("/getAllUser", Authorization, getAllUsers);
adminRouter.delete("/deleteUser", Authorization, deleteUserData);

export default adminRouter;
