import React from "react";
import Footer from "../components/Footer";
import Feedback from "../components/Feedback";

const About = () => {
  return (
    <>
      <div
        className="min-h-screen flex flex-col justify-between"
        style={{
          backgroundColor: "grey",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex-grow">
          <h1 className="text-2xl font-bold text-center mt-4">
            About Schedular
          </h1>
          <div className="block text-sm font-medium text-black-700 p-4">
            <p className="text-xl mb-[-15rem] text-center">
              Scheduler is a powerful MERN application that empowers users to
              take control of their time and online presence. With its
              customizable timetables, real-time updates, and secure platform,
              Scheduler offers a comprehensive suite of tools for managing
              schedules, setting reminders, and collaborating with others.
              Whether for personal or professional use, Scheduler is the
              ultimate tool for optimizing time management and achieving
              success. Scheduler's intuitive interface makes it easy for anyone
              to use, regardless of their technical expertise. The app's robust
              backend ensures that the app is reliable and secure, protecting
              users' data from unauthorized access. One of the most valuable
              features of Scheduler is its customizable timetables, which allow
              users to create and manage multiple timetables tailored to their
              specific needs. In addition to its customizable timetables,
              Scheduler also offers a variety of other features, including
              real-time updates, notifications, and collaboration tools.
              Real-time updates keep users informed about changes to their
              schedules, while notifications help them stay on top of important
              deadlines and events. Scheduler's collaboration tools make it easy
              for users to work together on projects and share schedules with
              others.
            </p>
            <br /> <br /><br />
          </div>
          <Feedback />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
