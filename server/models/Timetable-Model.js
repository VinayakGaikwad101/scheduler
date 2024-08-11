import mongoose from "mongoose";

const timetableSchema = new mongoose.Schema(
  {
    registrationNumber: {
      type: String,
      required: true,
    },
    schedule: [
      {
        day: {
          type: String,
          required: true,
          enum: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
        },
        lectures: [
          {
            lectureName: { type: String, required: true },
            from: { type: Number, required: true },
            fromTimeZone: {
              type: String,
              required: true,
              enum: ["AM", "PM"],
            },
            to: { type: Number, required: true },
            toTimeZone: {
              type: String,
              required: true,
              enum: ["AM", "PM"],
            },
            venue: { type: String },
            facultyName: { type: String },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Timetable = mongoose.model("Timetable", timetableSchema);
// timetables in db

export default Timetable;
