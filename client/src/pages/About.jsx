import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Feedback from "../components/Feedback";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-white to-gray-200 text-black">
      <motion.div
        className="flex-grow p-6 md:p-12"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
       
        <motion.div className="max-w-4xl mx-auto space-y-6" variants={fadeInUp}>
          <AnimatedParagraph>
            Web Application that saves your time
          </AnimatedParagraph>
        </motion.div>

        <motion.div className="mt-12" variants={fadeInUp}>
          <Feedback />
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
}

function AnimatedParagraph({ children }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < children.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + children.charAt(index));
        setIndex((prev) => prev + 1);
      }, 50); // Speed of typewriter effect
      return () => clearTimeout(timeoutId);
    }
  }, [index, children]);

  return (
    <motion.p
      className="text-lg leading-relaxed text-black text-center" // Ensuring the text is centered
      variants={fadeInUp}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      {displayedText}
    </motion.p>
  );
}
