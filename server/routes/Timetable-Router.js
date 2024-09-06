import express from "express";
import {
  getTimetable,
  manageTimeTable,
} from "../controllers.js/TimeTable-Controller.js";

const timetable_router = express.Router();

timetable_router.post("/manage_timetable", manageTimeTable);

timetable_router.post("/fetch_timetable", getTimetable);
export default timetable_router;
