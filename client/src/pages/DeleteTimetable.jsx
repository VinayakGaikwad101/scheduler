import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleError, handleSuccess } from "../utils/Toast";
import { Trash2 } from "lucide-react";

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
      const responseData = await response.json();

      if (responseData.success) {
        handleSuccess(`Deleted data for ${day} successfully`);
        clearForm();
      } else {
        handleError(responseData.message);
      }
    } catch (error) {
      handleError(error.message);
    }
  };

  const clearForm = () => {
    setRegistrationNumber("");
    setDay("");
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-100 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Delete Timetable</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="day" className="block text-sm font-medium text-gray-700 mb-1">
              Select Day
            </label>
            <select
              id="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              required
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            >
              <option value="">Select Day</option>
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
                (d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                )
              )}
            </select>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 transition duration-200 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Trash2 className="mr-2" size={18} />
            Delete Timetable
          </motion.button>
        </form>
      </motion.div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </motion.div>
  );
};

export default DeleteTimetable;