import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import adminRouter from "./Router/adminRouter.js";

const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(cors());

// for upload photo
app.use(express.static("upload"));

app.use("/admin", adminRouter);

async function databaseConn() {
  const db = mongoose.connect(process.env.MONGODB_CONNECTION_URL);
  if (!db) {
    console.log("db connection is failed");
  }
  app.listen(5001, () => {
    console.log(`server is runs on port http://localhost:${process.env.PORT}`);
  });
  console.log("database connection successfully");
}

databaseConn();
