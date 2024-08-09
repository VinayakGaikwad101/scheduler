import React from "react";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full border text-white  text-center text-sm md:text-lg font-semibold dark:border-neutral-500">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500 bg-black"
                  >
                    Day/Time
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500 bg-green-800"
                  >
                    9AM - 10AM
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500 bg-green-800"
                  >
                    10AM - 11AM
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500 bg-green-800"
                  >
                    11AM - 12PM
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500 bg-green-800"
                  >
                    12PM - 1PM
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500 bg-green-800"
                  >
                    1PM - 2PM
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500 bg-green-800"
                  >
                    2PM - 3PM
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500 bg-green-800"
                  >
                    3PM - 4PM
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 dark:border-neutral-500 bg-green-800"
                  >
                    4PM - 5PM
                  </th>
                  <th scope="col" className="px-6 py-4 bg-green-800">
                    5PM - 6:15PM
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500 bg-blue-900">
                    Monday
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500 bg-blue-900">
                    Tuesday
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500 bg-blue-900">
                    Wednesday
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500 bg-blue-900">
                    Thursday
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500 bg-blue-900">
                    Friday
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500 bg-blue-900">
                    Saturday
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500 bg-blue-900">
                    Sunday
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>{" "}
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 bg-slate-500">
                    Larry the Bird
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
