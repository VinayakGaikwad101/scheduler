import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    registrationNumber: {
      type: String,
      required: true,
      unique: true,
    },
    parentBranch: {
      type: String,
      default: "",
    },
    parentBranchDivision: {
      type: String,
      default: "",
    },
    parentBranchBatch: {
      type: String,
      default: "",
    },
    parentBranchRollNo: {
      type: String,
      default: "",
    },
    oe: {
      type: String,
      default: "",
    },
    oeDivision: {
      type: String,
      default: "",
    },
    oeBatch: {
      type: String,
      default: "",
    },
    oeRollNo: {
      type: String,
      default: "",
    },
    mdm: {
      type: String,
      default: "",
    },
    mdmDivision: {
      type: String,
      default: "",
    },
    mdmBatch: {
      type: String,
      default: "",
    },
    mdmRollNo: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
