import express from "express";
import {
  getTimetable,
  manageTimeTable,
  deleteTimetableForDay,
} from "../controllers.js/TimeTable-Controller.js";

const timetable_router = express.Router();

timetable_router.post("/manage_timetable", manageTimeTable);

timetable_router.post("/fetch_timetable", getTimetable);

// code for delete timetable
timetable_router.post("/delete_timetable", deleteTimetableForDay);

export default timetable_router;
