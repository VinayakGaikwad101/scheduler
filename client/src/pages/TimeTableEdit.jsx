import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils/Toast";

const TimeTableEdit = () => {
  const [registrationNumber, setRegistrationNumber] = useState(
    localStorage.getItem("loggedUserRegistrationNumber")
  );
  const [day, setDay] = useState("");
  const [lectureName, setLectureName] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromTimeZone, setFromTimeZone] = useState("");
  const [toTimeZone, setToTimeZone] = useState("");
  const [venue, setVenue] = useState("");
  const [facultyName, setFacultyName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const url = "http://localhost:8000/user/manage_timetable";
      const data = {
        registrationNumber,
        day,
        lectureName,
        from,
        to,
        fromTimeZone,
        toTimeZone,
        venue,
        facultyName,
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.success) {
        handleError(response.message);
      }

      const responseData = await response.json();

      if (responseData.success) {
        handleSuccess("Timetable updated successfully!");
        clearForm();
      } else {
        handleError(responseData.message);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const clearForm = () => {
    setRegistrationNumber("");
    setDay("");
    setLectureName("");
    setFrom("");
    setTo("");
    setFromTimeZone("");
    setToTimeZone("");
    setVenue("");
    setFacultyName("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Edit Timetable</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap -m-2">
          <div className="w-full p-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-700"
              htmlFor="registrationNumber"
            >
              Registration Number
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
              id="registrationNumber"
              type="text"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
              required
              readOnly
            />
          </div>
          <div className="w-full md:w-1/2 p-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-700"
              htmlFor="day"
            >
              Day
            </label>
            <select
              className="w-full px-3 py-2 text-gray-700 border rounded border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
              id="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              required
            >
              <option value="">Select Day</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
          <div className="w-full p-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-700"
              htmlFor="lectureName"
            >
              Lecture Name
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
              id="lectureName"
              type="text"
              value={lectureName}
              onChange={(e) => setLectureName(e.target.value)}
              required
            />
          </div>
          <div className="w-full p-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-700"
              htmlFor="from"
            >
              From
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
              id="from"
              type="number"
              min="1"
              max="12"
              value={from}
              onChange={(e) => {
                const newValue = parseInt(e.target.value, 10);
                if (newValue >= 1 && newValue <= 12) {
                  setFrom(newValue);
                } else {
                  handleError("Invalid input: Hours must be between 1 and 12.");
                }
              }}
              required
            />
          </div>
          <div className="w-full p-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-700"
              htmlFor="to"
            >
              To
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
              id="to"
              type="number"
              min="1"
              max="12"
              value={to}
              onChange={(e) => {
                const newValue = parseInt(e.target.value, 10);
                if (newValue >= 1 && newValue <= 12) {
                  setTo(newValue);
                } else {
                  handleError("Invalid input: Hours must be between 1 and 12.");
                }
              }}
              required
            />
          </div>
          <div className="w-full md:w-1/2 p-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-700"
              htmlFor="fromTimeZone"
            >
              From (AM/PM)
            </label>
            <select
              className="w-full px-3 py-2 text-gray-700 border rounded border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
              id="fromTimeZone"
              value={fromTimeZone}
              onChange={(e) => setFromTimeZone(e.target.value)}
              required
            >
              <option value="">Select AM / PM</option>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-700"
              htmlFor="toTimeZone"
            >
              To (AM/PM)
            </label>
            <select
              className="w-full px-3 py-2 text-gray-700 border rounded border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
              id="toTimeZone"
              value={toTimeZone}
              onChange={(e) => setToTimeZone(e.target.value)}
              required
            >
              <option value="">Select AM / PM</option>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
          <div className="w-full p-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-700"
              htmlFor="venue"
            >
              Venue
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
              id="venue"
              type="text"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              required
            />
          </div>
          <div className="w-full p-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-700"
              htmlFor="facultyName"
            >
              Faculty Name
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
              id="facultyName"
              type="text"
              value={facultyName}
              onChange={(e) => setFacultyName(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default TimeTableEdit;
