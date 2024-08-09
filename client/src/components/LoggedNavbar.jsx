import React from "react";
import { ToastContainer } from "react-toastify";
import { handleSuccess } from "../utils/Toast";
import { useNavigate } from "react-router-dom";

const LoggedNavbar = () => {
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    localStorage.removeItem("loggedUserName");
    localStorage.removeItem("loggedUserEmail");
    localStorage.removeItem("loggedUserRegistrationNumber");
    localStorage.removeItem("loggedUserToken");
    handleSuccess("User logged out successfully");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div>
      <button onClick={handleLogOut}>Logout</button>
      <ToastContainer />
    </div>
  );
};

export default LoggedNavbar;
