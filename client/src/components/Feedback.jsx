import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Feedback = () => {
  const [mailSent, setMailSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5k60a3b", "template_n42bzhu", form.current, {
        publicKey: "7s_JI3wNo9C_xQZ7X",
      })
      .then(() => {
        setMailSent(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  // Hide the success message after 5 seconds
  useEffect(() => {
    if (mailSent) {
      const timer = setTimeout(() => {
        setMailSent(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [mailSent]);

  return (
    <>
      <div
        className="flex items-center justify-center min-h-screen"
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/1349390515/photo/paperless-workplace-idea-e-signing-electronic-signature-document-management-businessman-signs.jpg?s=612x612&w=0&k=20&c=EyQl13diegNV5DVLnb0krcAcRDhL7NiSA7IEVImZs6Q=)",
          backgroundSize: "550px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-md p-8 space-y-6 bg-transparent rounded">
          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <h2 className="text-3xl font-extrabold text-center text-blue-700 bg-slate-300">
              Feedback Form
            </h2>
            <div>
              <label
                htmlFor="email"
                className="block text-2xl text-black font-bold"
              >
                College Email
              </label>
              <input
                id="from_email"
                name="from_email"
                type="email"
                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="20xxbxxxxx@sggs.ac.in"
                required
              />
            </div>
            <div>
              <label className="block text-2xl text-black font-bold">
                Feedback / Query
              </label>
              <textarea
                name="message"
                id="message"
                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Feedback or Query"
                required
              ></textarea>
            </div>
            <input
              type="submit"
              value="Send"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            />
          </form>
          {mailSent && (
            <p className="text-white text-center text-xl">
              Feedback sent successfully! Thank you.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Feedback;
