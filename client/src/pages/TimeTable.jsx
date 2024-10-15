import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrintPage = ({ componentRef }) => (
  <button
    onClick={() => window.print()}
    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
  >
    Print Timetable
  </button>
);

const Timetable = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const componentRef = useRef();

  const handleSuccess = (message) => {
    toast.success(message);
  };

  const handleError = (message) => {
    toast.error(message);
  };

  useEffect(() => {
    const fetchData = async () => {
      const registrationNumber = localStorage.getItem(
        "loggedUserRegistrationNumber"
      );
      const url = "http://localhost:8000/user/fetch_timetable";
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ registrationNumber }),
        });
        const result = await response.json();
        if (!result.success) {
          throw new Error(result.message || "Failed to fetch timetable");
        }
        setData(result.timetable);
        handleSuccess("Timetable fetched successfully");
      } catch (error) {
        setError(error.message);
        handleError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getUniqueTimeSlots = (schedule) => {
    const uniqueTimeSlots = new Set();
    schedule.forEach((day) => {
      day.lectures.forEach((lecture) => {
        uniqueTimeSlots.add(
          `${lecture.from}${lecture.fromTimeZone}-${lecture.to}${lecture.toTimeZone}`
        );
      });
    });
    return Array.from(uniqueTimeSlots);
  };

  const parseTimeSlot = (timeSlot) => {
    const parts = timeSlot.split("-");
    const from = parseInt(parts[0].slice(0, -2));
    const to = parseInt(parts[1].slice(0, -2));
    const fromPeriod = parts[0].slice(-2);
    const toPeriod = parts[1].slice(-2);
    return { from, to, fromPeriod, toPeriod };
  };

  const convertTo24HourFormat = (hour, period) => {
    if (period === "AM" && hour === 12) return 0;
    if (period === "PM" && hour !== 12) return hour + 12;
    return hour;
  };

  const sortTimeSlots = (timeSlots) => {
    return timeSlots.sort((a, b) => {
      const { from: fromA, fromPeriod: fromPeriodA } = parseTimeSlot(a);
      const { from: fromB, fromPeriod: fromPeriodB } = parseTimeSlot(b);
      const fromA24 = convertTo24HourFormat(fromA, fromPeriodA);
      const fromB24 = convertTo24HourFormat(fromB, fromPeriodB);
      return fromA24 - fromB24;
    });
  };

  const dayOrder = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const sortDays = (schedule) => {
    return schedule.sort((a, b) => {
      return dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day);
    });
  };

  const renderTimetable = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center h-screen">
          <motion.div
            className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      );
    }

    if (error || !data || !data.schedule || data.schedule.length === 0) {
      return (
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-2xl font-bold text-gray-800">
            Timetable not found
          </h1>
        </div>
      );
    }

    const { schedule } = data;
    const sortedSchedule = sortDays(schedule);
    const uniqueTimeSlots = sortTimeSlots(getUniqueTimeSlots(sortedSchedule));

    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
              <th className="py-3 px-4 font-semibold text-left">Day/Time</th>
              {uniqueTimeSlots.map((timeSlot) => (
                <th key={timeSlot} className="py-3 px-4 font-semibold">
                  {timeSlot}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedSchedule.map((day, index) => (
              <motion.tr
                key={day._id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border-b hover:bg-gray-50 transition duration-300"
              >
                <td className="py-3 px-4 font-medium">{day.day}</td>
                {renderLectureCells(day, uniqueTimeSlots)}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderLectureCells = (day, uniqueTimeSlots) => {
    return uniqueTimeSlots.map((timeSlot, index) => {
      const lecture = day.lectures.find(
        (lecture) =>
          `${lecture.from}${lecture.fromTimeZone}-${lecture.to}${lecture.toTimeZone}` ===
          timeSlot
      );
      return (
        <td key={index} className="py-3 px-4">
          {lecture ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-green-100 to-green-200 p-2 rounded-lg shadow"
            >
              <p className="font-semibold text-gray-800">
                {lecture.lectureName}
              </p>
              <p className="text-sm text-gray-600">
                Faculty: {lecture.facultyName}
              </p>
              <p className="text-sm text-gray-600">Venue: {lecture.venue}</p>
            </motion.div>
          ) : (
            <div className="h-full w-full bg-gray-100 rounded-lg"></div>
          )}
        </td>
      );
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Your Timetable
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-6" ref={componentRef}>
        {renderTimetable()}
      </div>
      <div className="mt-8 flex justify-center">
        <PrintPage componentRef={componentRef} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Timetable;