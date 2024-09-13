import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

import { handleError, handleSuccess } from "../utils/Toast";

const DeleteTimetable = () => {
  const [registrationNumber, setRegistrationNumber] = useState(
    localStorage.getItem("loggedUserRegistrationNumber")
  );
  const [day, setDay] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const url = "http://localhost:8000/user/delete_timetable";
      const data = {
        registrationNumber,
        day,
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
        handleSuccess(`Deleted data for ${day} successfully`);
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
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Select Day</label>
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

export default DeleteTimetable;
