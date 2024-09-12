import React, { useEffect, useState } from "react";
import { handleError, handleSuccess } from "../utils/Toast";
import { ToastContainer } from "react-toastify";

const ViewProfile = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const registrationNumber = localStorage.getItem(
        "loggedUserRegistrationNumber"
      );
      const url = "http://localhost:8000/users/getProfile";
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ registrationNumber: registrationNumber }),
        });
        const result = await response.json();
        if (result.success) {
          setData(result.user);
        } else {
          handleError(result.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        handleError("Error fetching profile data");
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-gray-800">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <div className="sm:flex sm:items-center px-6 py-4">
        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
          <p className="text-xl leading-tight">
            <span>Name: </span>
            {data.fullName ? (
              data.fullName
            ) : (
              <span className="text-red-500">Name not specified</span>
            )}
          </p>
          <p className="text-xl leading-tight">
            <span>Email: </span>
            {data.email ? (
              data.email
            ) : (
              <span className="text-red-500">Email not specified</span>
            )}
          </p>
          <p className="text-xl leading-tight">
            <span>Registration Number: </span>
            {data.registrationNumber ? (
              data.registrationNumber
            ) : (
              <span className="text-red-500">Registration not specified</span>
            )}
          </p>
          <p className="text-xl leading-tight">
            <span>Parent Branch: </span>
            {data.parentBranch ? (
              data.parentBranch
            ) : (
              <span className="text-red-500">Parent Branch not specified</span>
            )}
          </p>
          <p className="text-xl leading-tight">
            <span>Parent Branch Division: </span>
            {data.parentBranchDivision ? (
              data.parentBranchDivision
            ) : (
              <span className="text-red-500">
                Parent Branch Division not specified
              </span>
            )}
          </p>
          <p className="text-xl leading-tight">
            <span>Parent Branch Batch: </span>
            {data.parentBranchBatch ? (
              data.parentBranchBatch
            ) : (
              <span className="text-red-500">
                Parent Branch Batch not specified
              </span>
            )}
          </p>
          <p className="text-xl leading-tight">
            <span>Parent Branch Roll No. : </span>
            {data.parentBranchRollNo ? (
              data.parentBranchRollNo
            ) : (
              <span className="text-red-500">
                Parent Branch Roll No. not specified
              </span>
            )}
          </p>
          <p className="text-xl leading-tight">
            <span>Open Elective: </span>
            {data.oe ? (
              data.oe
            ) : (
              <span className="text-red-500">Open Elective not specified</span>
            )}
          </p>
          <p className="text-xl leading-tight">
            <span>Open Elective Division: </span>
            {data.oeDivision ? (
              data.oeDivision
            ) : (
              <span className="text-red-500">
                Open Elective Division not specified
              </span>
            )}
          </p>
          <p className="text-xl leading-tight">
            <span>Open Elective Batch: </span>
            {data.oeBatch ? (
              data.oeBatch
            ) : (
              <span className="text-red-500">
                Open Elective Batch not specified
              </span>
            )}
          </p>
          <p className="text-xl leading-tight">
            <span>Open Elective Roll No. : </span>
            {data.oeRollNo ? (
              data.oeRollNo
            ) : (
              <span className="text-red-500">
                Open Elective Roll No. not specified
              </span>
            )}
          </p>
          <p className="text-xl leading-tight">
            <span>MDM: </span>
            {data.mdm ? (
              data.mdm
            ) : (
              <span className="text-red-500">MDM not specified</span>
            )}
          </p>
          <p className="text-xl leading-tight">
            <span>MDM Division: </span>
            {data.mdmDivision ? (
              data.mdmDivision
            ) : (
              <span className="text-red-500">MDM Division not specified</span>
            )}
          </p>
          <p className="text-xl leading-tight">
            <span>MDM Batch: </span>
            {data.mdmBatch ? (
              data.mdmBatch
            ) : (
              <span className="text-red-500">MDM Batch not specified</span>
            )}
          </p>
          <p className="text-xl leading-tight">
            <span>MDM Roll No. : </span>
            {data.mdmRollNo ? (
              data.mdmRollNo
            ) : (
              <span className="text-red-500">MDM Roll No. not specified</span>
            )}
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ViewProfile;
