import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Info, LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Home", icon: Home, to: "/" },
  { name: "About", icon: Info, to: "/about" },
  { name: "Login", icon: LogIn, to: "/login" },
  { name: "Sign Up", icon: UserPlus, to: "/signup" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://r2.erweima.ai/imgcompressed/compressed_faba31e3cd615198449e6fdf2d4800e0.webp"
              alt="Logo"
              className="h-10 w-10 rounded-lg"
            />
            <span className="ml-2 text-white font-bold text-3xl">
              Scheduler
            </span>
          </motion.div>
          <div className="md:hidden">
            <motion.button
              className="text-white p-2"
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
          <motion.ul
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {menuItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  to={item.to}
                  className="text-white hover:text-gray-300 transition-colors duration-200 flex items-center"
                >
                  <item.icon className="w-5 h-5 mr-2" />
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              className="md:hidden mt-4 space-y-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuItems.map((item) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={item.to}
                    className="text-white hover:text-gray-300 transition-colors duration-200 flex items-center py-2"
                    onClick={toggleMenu}
                  >
                    <item.icon className="w-5 h-5 mr-2" />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
