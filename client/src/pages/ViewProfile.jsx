import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { handleError } from "../utils/Toast";

const ViewProfile = () => {
  const [data, setData] = useState(null);
  const [timetableData, setTimetableData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const registrationNumber = localStorage.getItem(
        "loggedUserRegistrationNumber"
      );
      const profileUrl = "http://localhost:8000/users/getProfile";
      const timetableUrl = "http://localhost:8000/user/fetch_timetable";

      try {
        const [profileResponse, timetableResponse] = await Promise.all([
          fetch(profileUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ registrationNumber }),
          }),
          fetch(timetableUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ registrationNumber }),
          }),
        ]);

        const profileResult = await profileResponse.json();
        const timetableResult = await timetableResponse.json();

        if (profileResult.success) {
          setData(profileResult.user);
        } else {
          handleError(profileResult.message);
        }

        if (timetableResult.success) {
          setTimetableData(timetableResult.timetable);
        } else {
          handleError(timetableResult.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        handleError("Error fetching data");
      }
    };
    fetchData();
  }, []);

  if (!data || !timetableData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800"
        >
          Loading...
        </motion.h1>
      </div>
    );
  }

  const hoursPerDay = [
    { name: "Monday", hours: 8 },
    { name: "Tuesday", hours: 7 },
    { name: "Wednesday", hours: 9 },
    { name: "Thursday", hours: 6 },
    { name: "Friday", hours: 8 },
    { name: "Saturday", hours: 4 },
    { name: "Sunday", hours: 2 },
  ];

  const efficiencyData = [
    { name: "Optimized", value: 76.43 },
    { name: "Unoptimized", value: 23.57 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const renderProfileInfo = (label, value) => (
    <motion.p
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-xl leading-tight mb-2"
    >
      <span className="font-semibold">{label}: </span>
      {value ? (
        value
      ) : (
        <span className="text-red-500">{label} not specified</span>
      )}
    </motion.p>
  );

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 p-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-center text-gray-800"
      >
        User Profile and Timetable Analysis
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold mb-4 text-gray-700"
          >
            Profile Information
          </motion.h2>
          {renderProfileInfo("Name", data.fullName)}
          {renderProfileInfo("Email", data.email)}
          {renderProfileInfo("Registration Number", data.registrationNumber)}
          {renderProfileInfo("Parent Branch", data.parentBranch)}
          {renderProfileInfo(
            "Parent Branch Division",
            data.parentBranchDivision
          )}
          {renderProfileInfo("Parent Branch Batch", data.parentBranchBatch)}
          {renderProfileInfo("Parent Branch Roll No.", data.parentBranchRollNo)}
          {renderProfileInfo("Open Elective", data.oe)}
          {renderProfileInfo("Open Elective Division", data.oeDivision)}
          {renderProfileInfo("Open Elective Batch", data.oeBatch)}
          {renderProfileInfo("Open Elective Roll No.", data.oeRollNo)}
          {renderProfileInfo("MDM", data.mdm)}
          {renderProfileInfo("MDM Division", data.mdmDivision)}
          {renderProfileInfo("MDM Batch", data.mdmBatch)}
          {renderProfileInfo("MDM Roll No.", data.mdmRollNo)}
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold mb-4 text-gray-700"
          >
            Timetable Analysis
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-600">
              Hours Spent Per Day
            </h3>
            <BarChart
              width={500}
              height={300}
              data={hoursPerDay}
              className="mx-auto"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="hours" fill="#8884d8" />
            </BarChart>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-600">
              Timetable Efficiency
            </h3>
            <PieChart width={400} height={400} className="mx-auto">
              <Pie
                data={efficiencyData}
                cx={200}
                cy={200}
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {efficiencyData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
