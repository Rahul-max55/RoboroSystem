import express from "express";
import {
  createAccountController,
  deleteUserData,
  getAllUsers,
  loginAccountController,
  uploadImageProductController,
} from "../controller/account.js";


const adminRouter = express.Router();
adminRouter.post("/login", loginAccountController);
adminRouter.post("/createAccount", createAccountController);
adminRouter.get("/getAllUser", getAllUsers);
adminRouter.delete("/deleteUser", deleteUserData);


adminRouter.put("/updateAccount", uploadImageProductController);

export default adminRouter;
