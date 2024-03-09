import mongoose from "mongoose";

const accountSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    role: {
      type: String,
      enum: ["admin", "worker", "supervisor"],
      require: true,
    },
    Date: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const account = mongoose.model("account" , accountSchema);

export default account;
