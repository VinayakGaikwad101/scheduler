import React, { useEffect, useState, useRef } from "react";
import PrintPage from "../components/PrintPage";

export default function App() {
  const [data, setData] = useState(null);
  const componentRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const registrationNumber = localStorage.getItem(
        "loggedUserRegistrationNumber"
      );
      const url = "http://localhost:8000/user/fetch_timetable";
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ registrationNumber: registrationNumber }),
        });
        const result = await response.json();
        setData(result.timetable);
        console.log(result.timetable);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const getUniqueTimeSlots = (schedule) => {
    const uniqueTimeSlots = new Set();
    schedule.forEach((day) => {
      day.lectures.forEach((lecture) => {
        uniqueTimeSlots.add(
          `${lecture.from}${lecture.fromTimeZone}-${lecture.to}${lecture.toTimeZone}`
        );
      });
    });
    return Array.from(uniqueTimeSlots);
  };

  const parseTimeSlot = (timeSlot) => {
    const parts = timeSlot.split("-");
    const from = parseInt(parts[0].slice(0, -2)); // Extract hour from "10AM"
    const to = parseInt(parts[1].slice(0, -2)); // Extract hour from "11AM"
    const fromPeriod = parts[0].slice(-2); // Extract "AM" or "PM"
    const toPeriod = parts[1].slice(-2); // Extract "AM" or "PM"
    return { from, to, fromPeriod, toPeriod };
  };

  const convertTo24HourFormat = (hour, period) => {
    if (period === "AM" && hour === 12) return 0;
    if (period === "PM" && hour !== 12) return hour + 12;
    return hour;
  };

  const sortTimeSlots = (timeSlots) => {
    return timeSlots.sort((a, b) => {
      const { from: fromA, fromPeriod: fromPeriodA } = parseTimeSlot(a);
      const { from: fromB, fromPeriod: fromPeriodB } = parseTimeSlot(b);
      const fromA24 = convertTo24HourFormat(fromA, fromPeriodA);
      const fromB24 = convertTo24HourFormat(fromB, fromPeriodB);
      return fromA24 - fromB24;
    });
  };

  const dayOrder = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const sortDays = (schedule) => {
    return schedule.sort((a, b) => {
      return dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day);
    });
  };

  const renderTimetable = () => {
    if (!data) {
      return <div>TimeTable not found</div>;
    }
    const { schedule } = data;
    const sortedSchedule = sortDays(schedule);
    const uniqueTimeSlots = sortTimeSlots(getUniqueTimeSlots(sortedSchedule));
    return (
      <table className="min-w-full border text-white text-center text-sm md:text-lg font-semibold dark:border-black">
        <thead>
          <tr>
            <th
              scope="col"
              className="border-r-2 border-b-2 px-6 py-4 dark:border-black bg-black"
            >
              Day/Time
            </th>
            {uniqueTimeSlots.map((timeSlot) => (
              <th
                key={timeSlot}
                scope="col"
                className="border-r-2 border-b-2 px-6 py-4 dark:border-black bg-green-800"
              >
                {timeSlot}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedSchedule.map((day) => (
            <tr key={day._id} className="border-b-2 dark:border-black">
              <td className="whitespace-nowrap border-r-2 border-b-2 px-6 py-4 font-medium dark:border-black bg-blue-900">
                {day.day}
              </td>
              {renderLectureCells(day, uniqueTimeSlots)}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderLectureCells = (day, uniqueTimeSlots) => {
    return uniqueTimeSlots.map((timeSlot, index) => {
      const lecture = day.lectures.find(
        (lecture) =>
          `${lecture.from}${lecture.fromTimeZone}-${lecture.to}${lecture.toTimeZone}` ===
          timeSlot
      );
      return (
        <td
          key={index}
          className="whitespace-nowrap border-r-2 border-b-2 px-6 py-4 dark:border-black bg-slate-500"
        >
          {lecture ? lecture.lectureName : ""}
        </td>
      );
    });
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden" ref={componentRef}>
            {renderTimetable()}
          </div>
        </div>
      </div>
      <PrintPage componentRef={componentRef} />
    </div>
  );
}
