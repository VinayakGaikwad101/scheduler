import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleSuccess } from "../utils/Toast";

const LoggedNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://r2.erweima.ai/imgcompressed/compressed_faba31e3cd615198449e6fdf2d4800e0.webp"
            alt="Logo"
            className="h-10 rounded-lg"
          />
          <span className="ml-2 text-white font-bold text-3xl">Scheduler</span>
        </div>
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link to="/profile" className="text-white">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/view-profile" className="text-white">
              View Profile
            </Link>
          </li>
          <li>
            <Link to="/timetable" className="text-white">
              Timetable
            </Link>
          </li>
          <li>
            <Link to="/edit-timetable" className="text-white">
              Edit Timetable
            </Link>
          </li>
          <li>
            <Link to="/delete-timetable" className="text-white">
              Delete Timetable
            </Link>
          </li>
          <li>
            <button onClick={handleLogOut} className="text-white">
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* mobile menu */}
      {isMenuOpen ? (
        <ul className="flex-col md:hidden">
          <li className="py-2">
            <Link to="/profile" className="text-white">
              Profile
            </Link>
          </li>
          <li className="py-2">
            <Link to="/view-profile" className="text-white">
              View Profile
            </Link>
          </li>
          <li className="py-2">
            <Link to="/timetable" className="text-white">
              Timetable
            </Link>
          </li>
          <li className="py-2">
            <Link to="/edit-timetable" className="text-white">
              Edit Timetable
            </Link>
          </li>
          <li className="py-2">
            <Link to="/delete-timetable" className="text-white">
              Delete Timetable
            </Link>
          </li>
          <li className="py-2">
            <button onClick={handleLogOut} className="text-white">
              Logout
            </button>
          </li>
        </ul>
      ) : null}
      <ToastContainer />
    </nav>
  );
};

export default LoggedNavbar;
