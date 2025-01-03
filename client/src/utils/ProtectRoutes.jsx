import React from "react";
import { Navigate } from "react-router-dom";

const ProtectRoutes = ({ children }) => {
  const userIsLogged = localStorage.getItem("loggedUserName");

  return userIsLogged ? children : <Navigate to="/login" />;
};

export default ProtectRoutes;
