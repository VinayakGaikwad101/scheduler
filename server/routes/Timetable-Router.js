import express from "express";
import Timetable from "../models/Timetable-Model.js";
import User from "../models/User-Model.js";
import { manageTimeTable } from "../controllers.js/TimeTable-Controller.js";

const timetable_router = express.Router();

timetable_router.post("/manage_timetable", manageTimeTable);

export default timetable_router;
