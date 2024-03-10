import accepts from "accepts";
import account from "../Schema/accountSchema.js";
import jwt from "jsonwebtoken";

export const loginAccountController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await account.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ msg: "User Not found" });
    }

    if (user.password != password) {
      return res.status(401).json({ msg: "Wrong Credentials" });
    }

    const token = jwt.sign({ userData: user }, process.env.SECRET_KEY);
    return res.status(200).json({ msg: "Login successfully", user, token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createAccountController = async (req, res) => {
  // console.log("🚀 ~ createAccountController ~ req.body:", req.body);
  try {
    const data = await account.create(req.body);
    if (!data) {
      req.status(404).json({ msg: "account is not created" });
    }
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const data = await account.find();
    if (!data) {
      res.status(404).send("user data is not found");
    }
    const updatedUser = data.filter((val) => val.role !== "admin");
    const adminData = data.filter((val) => val.role === "admin");
    res.status(200).json({ msg: "get all users data", updatedUser, adminData });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserData = async (req, res) => {
  try {
    const allUser = await account.findByIdAndDelete({ _id: req.body.id });
    // console.log("🚀 ~ deleteUserData ~ allUser:", allUser)

    if (!allUser) {
      return res.status(404).json({ msg: "user not exists" });
    }

    return res.status(200).json({ msg: "get all users data", allUser });
  } catch (error) {
    res.status(500).json({ msg: "some error occurred", error });
  }
};

export const uploadImageProductController = async (req, res) => {
  console.log(req.body);
};
