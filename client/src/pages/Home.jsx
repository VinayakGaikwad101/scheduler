import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import DownloadBtn from "../components/DownloadBtn";
import "./Home.css";

const Home = () => {
  const elements = [
    { type: "circle", size: 100, top: "20%", left: "10%" },
    { type: "circle", size: 150, top: "40%", left: "70%" },
    { type: "square", size: 80, top: "70%", left: "30%" },
    { type: "square", size: 120, top: "10%", left: "80%" },
  ];

  const randomMotion = (index) => {
    return {
      rotate: [0, 360],
      x: [0, 20 * (index % 2 === 0 ? 1 : -1)],
      y: [0, 20 * (index % 2 === 0 ? -1 : 1)],
    };
  };

  return (
    <div className="relative w-full h-screen bg-white">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute bg-primary ${element.type}`}
          style={{
            width: element.size,
            height: element.size,
            top: element.top,
            left: element.left,
            borderRadius: element.type === "circle" ? "50%" : "0%",
          }}
          animate={randomMotion(index)}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
      ))}
      <div className="relative z-10">
        <DownloadBtn />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
