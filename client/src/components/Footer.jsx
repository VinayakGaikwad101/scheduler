"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const names = [
    "Vinayak Vishwanath Gaikwad (2023BCS022)",
    "Vedant Milind Khete (2023BCS024)",
    "Rohan Vinod Nimkar (2023BCS025)",
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.footer
      className="w-full fixed bottom-0 left-0 bg-black text-white py-3 overflow-hidden"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center justify-center space-y-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="text-lg font-bold" variants={itemVariants}>
            Made By:
          </motion.p>
          {names.map((name, index) => (
            <motion.p
              key={index}
              className="text-sm text-center"
              variants={itemVariants}
            >
              {name}
            </motion.p>
          ))}
          <motion.p className="text-xs mt-2" variants={itemVariants}>
            &copy; {new Date().getFullYear()} All Rights Reserved
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 opacity-20"
        style={{ backgroundSize: "200% 200%" }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </motion.footer>
  );
}
