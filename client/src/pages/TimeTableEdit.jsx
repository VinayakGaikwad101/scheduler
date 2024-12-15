import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleError, handleSuccess } from "../utils/Toast";
import { Edit } from "lucide-react";

const InputField = ({ label, id, type, value, onChange, required, readOnly, options }) => (
  <motion.div
    className="mb-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={id}>
      {label}
    </label>
    {type === "select" ? (
      <select
        className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
        id={id}
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : (
      <input
        className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        readOnly={readOnly}
      />
    )}
  </motion.div>
);

const TimeTableEdit = () => {
  const [formData, setFormData] = useState({
    registrationNumber: localStorage.getItem("loggedUserRegistrationNumber"),
    day: "",
    lectureName: "",
    from: "",
    to: "",
    fromTimeZone: "",
    toTimeZone: "",
    venue: "",
    facultyName: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const url = "https://scheduler-xck4.onrender.com/user/manage_timetable";
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (responseData.success) {
        handleSuccess("Timetable updated successfully!");
        setFormData((prev) => ({
          ...prev,
          day: "",
          lectureName: "",
          from: "",
          to: "",
          fromTimeZone: "",
          toTimeZone: "",
          venue: "",
          facultyName: "",
        }));
      } else {
        handleError(responseData.message);
      }
    } catch (error) {
      handleError(error.message);
    }
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
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Edit Timetable</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Registration Number"
            id="registrationNumber"
            type="text"
            value={formData.registrationNumber}
            onChange={handleChange}
            required
            readOnly
          />
          <InputField
            label="Day"
            id="day"
            type="select"
            value={formData.day}
            onChange={handleChange}
            required
            options={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]}
          />
          <InputField
            label="Lecture Name"
            id="lectureName"
            type="text"
            value={formData.lectureName}
            onChange={handleChange}
            required
          />
          <div className="flex space-x-4">
            <div className="w-1/2">
              <InputField
                label="From"
                id="from"
                type="number"
                value={formData.from}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value, 10);
                  if (newValue >= 1 && newValue <= 12) {
                    handleChange(e);
                  } else {
                    handleError("Invalid input: Hours must be between 1 and 12.");
                  }
                }}
                required
              />
            </div>
            <div className="w-1/2">
              <InputField
                label="From (AM/PM)"
                id="fromTimeZone"
                type="select"
                value={formData.fromTimeZone}
                onChange={handleChange}
                required
                options={["AM", "PM"]}
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <InputField
                label="To"
                id="to"
                type="number"
                value={formData.to}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value, 10);
                  if (newValue >= 1 && newValue <= 12) {
                    handleChange(e);
                  } else {
                    handleError("Invalid input: Hours must be between 1 and 12.");
                  }
                }}
                required
              />
            </div>
            <div className="w-1/2">
              <InputField
                label="To (AM/PM)"
                id="toTimeZone"
                type="select"
                value={formData.toTimeZone}
                onChange={handleChange}
                required
                options={["AM", "PM"]}
              />
            </div>
          </div>
          <InputField
            label="Venue"
            id="venue"
            type="text"
            value={formData.venue}
            onChange={handleChange}
            required
          />
          <InputField
            label="Faculty Name"
            id="facultyName"
            type="text"
            value={formData.facultyName}
            onChange={handleChange}
            required
          />
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Edit className="mr-2" size={18} />
            Update Timetable
          </motion.button>
        </form>
      </motion.div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </motion.div>
  );
};

export default TimeTableEdit;
