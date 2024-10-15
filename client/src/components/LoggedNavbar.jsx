import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { handleSuccess } from "../utils/Toast";
import { Calendar, Clock, Edit, Eye, LogOut, Menu, User, X } from "lucide-react";

const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded transition-colors duration-200 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default function LoggedNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("loggedUserName");
    localStorage.removeItem("loggedUserEmail");
    localStorage.removeItem("loggedUserRegistrationNumber");
    localStorage.removeItem("loggedUserToken");
    handleSuccess("User logged out successfully");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const menuItems = [
    { href: "/profile", label: "Profile", icon: User },
    { href: "/view-profile", label: "View Profile", icon: Eye },
    { href: "/timetable", label: "Timetable", icon: Calendar },
    { href: "/edit-timetable", label: "Edit Timetable", icon: Edit },
    { href: "/delete-timetable", label: "Delete Timetable", icon: Clock },
  ];

  return (
    <motion.nav
      className="bg-gray-900 p-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="https://r2.erweima.ai/imgcompressed/compressed_faba31e3cd615198449e6fdf2d4800e0.webp"
            alt="Logo"
            className="h-10 rounded-lg"
          />
          <motion.span
            className="ml-2 text-white font-bold text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Scheduler
          </motion.span>
        </motion.div>
        <div className="md:hidden">
          <Button className="text-white" onClick={toggleMenu} aria-label="Toggle menu">
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 90 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
        <motion.ul className="hidden md:flex space-x-4">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={item.href}>
                <Button className="text-white hover:text-gray-300">
                  <item.icon className="mr-2 h-4 w-4 inline" aria-hidden="true" />
                  {item.label}
                </Button>
              </Link>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: menuItems.length * 0.1 }}
          >
            <Button className="text-white hover:text-gray-300" onClick={handleLogOut}>
              <LogOut className="mr-2 h-4 w-4 inline" aria-hidden="true" />
              Logout
            </Button>
          </motion.li>
        </motion.ul>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            className="flex-col md:hidden mt-4 space-y-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={item.href}>
                  <Button className="w-full text-left text-white hover:text-gray-300">
                    <item.icon className="mr-2 h-4 w-4 inline" aria-hidden="true" />
                    {item.label}
                  </Button>
                </Link>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: menuItems.length * 0.1 }}
            >
              <Button className="w-full text-left text-white hover:text-gray-300" onClick={handleLogOut}>
                <LogOut className="mr-2 h-4 w-4 inline" aria-hidden="true" />
                Logout
              </Button>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
      <ToastContainer />
    </motion.nav>
  );
}