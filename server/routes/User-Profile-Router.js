import express from "express";
import {
  getProfile,
  manageProfile,
} from "../controllers.js/Profile-Controller.js";

const user_router = express.Router();

user_router.post("/getProfile", getProfile);

user_router.post("/manageProfile", manageProfile);

export default user_router;
