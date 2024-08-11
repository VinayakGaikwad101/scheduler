import React, { useEffect, useState } from "react";
import { handleError } from "../utils/Toast";
import { ToastContainer } from "react-toastify";

const Profile = () => {
  const [products, setProducts] = useState("");
  const [loggedUserToken, setLoggedUserToken] = useState("");
  const [loggedUserName, setLoggedUserName] = useState("");
  const [loggedUserEmail, setLoggedUserEmail] = useState("");
  const [loggedUserRegistrationNumber, setLoggedUserRegistrationNumber] =
    useState("");

  useEffect(() => {
    setLoggedUserToken(localStorage.getItem("loggedUserToken"));
    setLoggedUserName(localStorage.getItem("loggedUserName"));
    setLoggedUserEmail(localStorage.getItem("loggedUserEmail"));
    setLoggedUserRegistrationNumber(
      localStorage.getItem("loggedUserRegistrationNumber")
    );

    // protected resources
    fetchProducts();
  }, []);

  const fetchProducts = async (e) => {
    try {
      const url = "http://localhost:8000/products";
      //   pass token with request
      const headers = {
        headers: {
          Authorization: loggedUserToken,
        },
      };
      const response = await fetch(url, headers);
      const result = await response.json();
      setProducts(result);
      console.log(result);
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (loggedUserToken) {
      fetchProducts();
    }
  }, [loggedUserToken]);

  return (
    <div>
     <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-6">Profile</h2>
  <form>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="parentBranch">
        Parent Branch
      </label>
      <select
        id="parentBranch"
        name="parentBranch"
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Parent Branch</option>
        <option value="Computer Science and Engineering">Computer Science and Engineering</option>
        <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Chemical Engineering">Chemical Engineering</option>
            <option value="Electronics and Telecommunication Engineering">Electronics and Telecommunication Engineering</option>
            <option value="Instrumentation Engineering">Instrumentation Engineering</option>
            <option value="Information Technology ">Information Technology </option>
            <option value="Production Engineering">Production Engineering</option>
            <option value="Textile Technology">Textile Technology</option>
      </select>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="division">
        Parent Branch Division and Batch
      </label>
      {/*  division  */}
      <div className="flex">
        <select
          id="division"
          name="division"
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
          className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
        >
          <option value="">Select</option>
          <option value="batchA1">A1</option>
          <option value=" batchA2">A2</option>
          <option value=" batchA3">A3</option>
          <option value=" batchA4">A4</option>
          <option value=" batchB1">B1</option>
          <option value=" batchB2">B2</option>
          <option value=" batchB3">B3</option>
          <option value=" batchB4">B4</option>
        </select>
      </div>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pbrollNo">
        Parent Branch Roll No
      </label>
      <input
        type="text"
        id="pbrollNo"
        name="pbrollNo"
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="openElective">
        Open Elective Selected
      </label>
      <input
        type="text"
        id="openElective"
        name="openElective"
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="oedivision">
        OE Division
      </label>
      <div className="flex">
        <select
          id="oedivision"
          name="oedivision"
          className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
        >
          <option value="">Select</option>
          <option value="divA">A</option>
          <option value="divB">B</option>
        </select>
        
        <select
          id="oebatch"
          name="oebatch"
          className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
        >
          <option value="">Select</option>
          <option value="batchA1">A1</option>
          <option value=" batchA2">A2</option>
          <option value=" batchA3">A3</option>
          <option value=" batchA4">A4</option>
          <option value=" batchB1">B1</option>
          <option value=" batchB2">B2</option>
          <option value=" batchB3">B3</option>
          <option value=" batchB4">B4</option>
          
        </select>
      </div>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="oerollNo">
        OE Roll No
      </label>
      <input
        type="text"
        id="oerollNo"
        name="oerollNo"
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mdm">
        Multi Disciplinary Minor
      </label>
      <input
        type="text"
        id="mdm"
        name="mdm"
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      </div>
      <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mdmdivision">
      Multi Disciplinary Minor Division and Batch
      </label>
      {/*  division  */}
      <div className="flex">
        <select
          id="mdmdivision"
          name="mdmdivision"
          className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
        >
          <option value="">Select</option>
          <option value="divA">A</option>
          <option value="divB">B</option>
        </select>
        {/*  batch  */}
        <select
          id="mdmbatch"
          name="mdmbatch"
          className="w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
        >
          <option value="">Select</option>
          <option value="batchA1">A1</option>
          <option value=" batchA2">A2</option>
          <option value=" batchA3">A3</option>
          <option value=" batchA4">A4</option>
          <option value=" batchB1">B1</option>
          <option value=" batchB2">B2</option>
          <option value=" batchB3">B3</option>
          <option value=" batchB4">B4</option>
        </select>
      </div>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mdmrollNo">
        MDM Roll No
      </label>
      <input
        type="text"
        id="mdmrollNo"
        name="mdmrollNo"
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      </div>
        <button
          type="button"
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
