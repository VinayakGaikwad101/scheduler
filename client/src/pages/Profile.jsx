import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils/Toast";

export default function Component() {
  const [formData, setFormData] = useState({
    fullName: "",
    parentBranch: "",
    parentBranchDivision: "",
    parentBranchBatch: "",
    parentBranchRollNo: "",
    oe: "",
    oeDivision: "",
    oeBatch: "",
    oeRollNo: "",
    mdm: "",
    mdmDivision: "",
    mdmBatch: "",
    mdmRollNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8000/users/manageProfile";
      const data = {
        registrationNumber: localStorage.getItem(
          "loggedUserRegistrationNumber"
        ),
        ...Object.fromEntries(
          Object.entries(formData).filter(([_, v]) => v !== "")
        ),
      };

      if (Object.keys(data).length <= 1) {
        handleError("Please fill out at least one field.");
        return;
      }

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (responseData.success) {
        handleSuccess("Profile updated successfully!");
        setFormData({});
      } else {
        handleError(responseData.message);
      }
    } catch (error) {
      handleError(error.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-xl shadow-lg">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-center text-3xl font-extrabold text-gray-900"
        >
          Profile
        </motion.h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="rounded-md shadow-sm -space-y-px"
          >
            <InputField
              label="Name"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
            />
            <SelectField
              label="Parent Branch"
              name="parentBranch"
              value={formData.parentBranch}
              onChange={handleChange}
              options={[
                "Computer Science and Engineering",
                "Mechanical Engineering",
                "Electrical Engineering",
                "Civil Engineering",
                "Chemical Engineering",
                "Electronics and Telecommunication Engineering",
                "Instrumentation Engineering",
                "Information Technology",
                "Production Engineering",
                "Textile Technology",
              ]}
            />
            <div className="flex">
              <SelectField
                label="Parent Branch Division"
                name="parentBranchDivision"
                value={formData.parentBranchDivision}
                onChange={handleChange}
                options={["A", "B"]}
                className="w-1/2 mr-2"
              />
              <SelectField
                label="Parent Branch Batch"
                name="parentBranchBatch"
                value={formData.parentBranchBatch}
                onChange={handleChange}
                options={["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4"]}
                className="w-1/2"
              />
            </div>
            <InputField
              label="Parent Branch Roll No"
              name="parentBranchRollNo"
              type="text"
              value={formData.parentBranchRollNo}
              onChange={handleChange}
            />
            <InputField
              label="Open Elective Selected"
              name="oe"
              type="text"
              value={formData.oe}
              onChange={handleChange}
            />
            <div className="flex">
              <SelectField
                label="OE Division"
                name="oeDivision"
                value={formData.oeDivision}
                onChange={handleChange}
                options={["A", "B"]}
                className="w-1/2 mr-2"
              />
              <SelectField
                label="OE Batch"
                name="oeBatch"
                value={formData.oeBatch}
                onChange={handleChange}
                options={["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4"]}
                className="w-1/2"
              />
            </div>
            <InputField
              label="OE Roll No"
              name="oeRollNo"
              type="text"
              value={formData.oeRollNo}
              onChange={handleChange}
            />
            <InputField
              label="Multi Disciplinary Minor"
              name="mdm"
              type="text"
              value={formData.mdm}
              onChange={handleChange}
            />
            <div className="flex">
              <SelectField
                label="MDM Division"
                name="mdmDivision"
                value={formData.mdmDivision}
                onChange={handleChange}
                options={["A", "B"]}
                className="w-1/2 mr-2"
              />
              <SelectField
                label="MDM Batch"
                name="mdmBatch"
                value={formData.mdmBatch}
                onChange={handleChange}
                options={["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4"]}
                className="w-1/2"
              />
            </div>
            <InputField
              label="MDM Roll No"
              name="mdmRollNo"
              type="text"
              value={formData.mdmRollNo}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </motion.div>
        </form>
      </div>
      <ToastContainer position="bottom-right" />
    </motion.div>
  );
}

const InputField = ({ label, name, type, value, onChange }) => (
  <div>
    <label htmlFor={name} className="sr-only">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      placeholder={label}
    />
  </div>
);

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  className = "",
}) => (
  <div className={className}>
    <label htmlFor={name} className="sr-only">
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
    >
      <option value="">{label}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);
