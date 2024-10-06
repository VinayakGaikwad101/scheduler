import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Feedback = () => {
  const [mailSent, setMailSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5k60a3b",
        "template_n42bzhu",
        form.current,
        "7s_JI3wNo9C_xQZ7X"
      )
      .then(() => {
        setMailSent(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  useEffect(() => {
    if (mailSent) {
      const timer = setTimeout(() => {
        setMailSent(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [mailSent]);

  return (
    <div className="flex items-center justify-center p-4 bg-white">
      <motion.div
        className="w-full max-w-md p-8 space-y-6 bg-gray-100 rounded shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form className="space-y-6" ref={form} onSubmit={sendEmail}>
          <motion.h2
            className="text-3xl font-extrabold text-center text-blue-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Feedback Form
          </motion.h2>
          <div>
            <motion.label
              htmlFor="email"
              className="block text-xl text-black font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              College Email
            </motion.label>
            <motion.input
              id="from_email"
              name="from_email"
              type="email"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="20xxbxxxxx@sggs.ac.in"
              required
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
          <div>
            <motion.label
              className="block text-xl text-black font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Feedback / Query
            </motion.label>
            <motion.textarea
              name="message"
              id="message"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Feedback or Query"
              required
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            ></motion.textarea>
          </div>
          <motion.input
            type="submit"
            value="Send"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </form>
        {mailSent && (
          <motion.div
            className="text-center text-xl text-white bg-green-500 py-2 px-4 rounded-lg mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <i className="ri-check-line mr-2"></i>
            Feedback sent successfully! Thank you.
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Feedback;
