import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const userIsLogged = localStorage.getItem("loggedUserName");

  return userIsLogged ? <Navigate to="/profile" /> : children;
};

export default PublicRoutes;
