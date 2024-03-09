import express from "express";
import {
  createAccountController,
  deleteUserData,
  getAllUsers,
  loginAccountController,
} from "../controller/account.js";

const adminRouter = express.Router();
adminRouter.post("/login", loginAccountController);
adminRouter.post("/createAccount", createAccountController);
adminRouter.get("/getAllUser", getAllUsers);
adminRouter.delete("/deleteUser", deleteUserData);

export default adminRouter;
