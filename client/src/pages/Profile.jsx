import React, { useEffect, useState } from "react";
import { handleError, handleSuccess } from "../utils/Toast";
import { ToastContainer } from "react-toastify";

const Profile = () => {
  const [registrationNumber, setRegistrationNumber] = useState(
    localStorage.getItem("loggedUserRegistrationNumber")
  );
  const [fullName, setFullName] = useState("");
  const [parentBranch, setParentBranch] = useState("");
  const [parentBranchDivision, setParentBranchDivision] = useState("");
  const [parentBranchBatch, setParentBranchBatch] = useState("");
  const [parentBranchRollNo, setParentBranchRollNo] = useState("");
  const [oe, setOe] = useState("");
  const [oeDivision, setOeDivision] = useState("");
  const [oeBatch, setOeBatch] = useState("");
  const [oeRollNo, setOeRollNo] = useState("");
  const [mdm, setMdm] = useState("");
  const [mdmDivision, setMdmDivision] = useState("");
  const [mdmBatch, setMdmBatch] = useState("");
  const [mdmRollNo, setMdmRollNo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8000/users/manageProfile";

      // ensuring only !"" fields are sent to the backend api
      const data = {
        registrationNumber,
        ...(fullName && { fullName }),
        ...(parentBranch && { parentBranch }),
        ...(parentBranchDivision && { parentBranchDivision }),
        ...(parentBranchBatch && { parentBranchBatch }),
        ...(parentBranchRollNo && { parentBranchRollNo }),
        ...(oe && { oe }),
        ...(oeDivision && { oeDivision }),
        ...(oeBatch && { oeBatch }),
        ...(oeRollNo && { oeRollNo }),
        ...(mdm && { mdm }),
        ...(mdmDivision && { mdmDivision }),
        ...(mdmBatch && { mdmBatch }),
        ...(mdmRollNo && { mdmRollNo }),
      };

      const hasAtLeastOneField = Object.values(data).some(
        (value) => value !== ""
      );

      if (!hasAtLeastOneField) {
        handleError("Please fill out at least one field.");
        return;
      }

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
        handleSuccess("Profile updated successfully!");
        clearForm();
      } else {
        handleError(responseData.message);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const clearForm = () => {
    setFullName("");
    setParentBranch("");
    setParentBranchDivision("");
    setParentBranchBatch("");
    setParentBranchRollNo("");
    setOe("");
    setOeDivision("");
    setOeBatch("");
    setOeRollNo("");
    setMdm("");
    setMdmDivision("");
    setMdmBatch("");
    setMdmRollNo("");
  };

  return (
    <div>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="parentBranch"
            >
              Parent Branch
            </label>
            <select
              id="parentBranch"
              name="parentBranch"
              value={parentBranch}
              onChange={(e) => setParentBranch(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Parent Branch</option>
              <option value="Computer Science and Engineering">
                Computer Science and Engineering
              </option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Electrical Engineering">
                Electrical Engineering
              </option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Chemical Engineering">Chemical Engineering</option>
              <option value="Electronics and Telecommunication Engineering">
                Electronics and Telecommunication Engineering
              </option>
              <option value="Instrumentation Engineering">
                Instrumentation Engineering
              </option>
              <option value="Information Technology ">
                Information Technology{" "}
              </option>
              <option value="Production Engineering">
                Production Engineering
              </option>
              <option value="Textile Technology">Textile Technology</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="division"
            >
              Parent Branch Division and Batch
            </label>
            {/*  division  */}
            <div className="flex">
              <select
                id="division"
                name="division"
                value={parentBranchDivision}
                onChange={(e) => setParentBranchDivision(e.target.value)}
                className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
              >
                <option value="">Select</option>
                <option value="divA">A</option>
                <option value="divB">B</option>
              </select>
              {/*  batch  */}
              <select
                id="batch"
                name="batch"
                value={parentBranchBatch}
                onChange={(e) => setParentBranchBatch(e.target.value)}
                className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
              >
                <option value="">Select</option>
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="A3">A3</option>
                <option value="A4">A4</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="B3">B3</option>
                <option value="B4">B4</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pbrollNo"
            >
              Parent Branch Roll No
            </label>
            <input
              type="text"
              id="pbrollNo"
              name="pbrollNo"
              value={parentBranchRollNo}
              onChange={(e) => setParentBranchRollNo(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="openElective"
            >
              Open Elective Selected
            </label>
            <input
              type="text"
              id="openElective"
              name="openElective"
              value={oe}
              onChange={(e) => setOe(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="oedivision"
            >
              OE Division and Batch
            </label>
            <div className="flex">
              <select
                id="oedivision"
                name="oedivision"
                value={oeDivision}
                onChange={(e) => setOeDivision(e.target.value)}
                className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
              >
                <option value="">Select</option>
                <option value="divA">A</option>
                <option value="divB">B</option>
              </select>

              <select
                id="oebatch"
                name="oebatch"
                value={oeBatch}
                onChange={(e) => setOeBatch(e.target.value)}
                className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
              >
                <option value="">Select</option>
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="A3">A3</option>
                <option value="A4">A4</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="B3">B3</option>
                <option value="B4">B4</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="oerollNo"
            >
              OE Roll No
            </label>
            <input
              type="text"
              id="oerollNo"
              name="oerollNo"
              value={oeRollNo}
              onChange={(e) => setOeRollNo(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mdm"
            >
              Multi Disciplinary Minor
            </label>
            <input
              type="text"
              id="mdm"
              name="mdm"
              value={mdm}
              onChange={(e) => setMdm(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mdmdivision"
            >
              Multi Disciplinary Minor Division and Batch
            </label>
            {/*  division  */}
            <div className="flex">
              <select
                id="mdmdivision"
                name="mdmdivision"
                value={mdmDivision}
                onChange={(e) => setMdmDivision(e.target.value)}
                className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
              >
                <option value="">Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
              </select>
              {/*  batch  */}
              <select
                id="mdmbatch"
                name="mdmbatch"
                value={mdmBatch}
                onChange={(e) => setMdmBatch(e.target.value)}
                className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
              >
                <option value="">Select</option>
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="A3">A3</option>
                <option value="A4">A4</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="B3">B3</option>
                <option value="B4">B4</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mdmrollNo"
            >
              MDM Roll No
            </label>
            <input
              type="text"
              id="mdmrollNo"
              name="mdmrollNo"
              value={mdmRollNo}
              onChange={(e) => setMdmRollNo(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
