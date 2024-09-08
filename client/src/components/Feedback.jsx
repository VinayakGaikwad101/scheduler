import React from "react";

const Feedback = () => {
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
          // filter: "blur(8px)",
        }}
      >
        <div className="w-full max-w-md p-8 space-y-6 bg-transparent rounded">
          <form className="space-y-6">
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
                id="email"
                name="email"
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
                name="query"
                id="query"
                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Feedback or Query"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Feedback;
