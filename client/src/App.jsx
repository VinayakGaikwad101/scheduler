import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import ProtectRoutes from "./utils/ProtectRoutes";
import PublicRoutes from "./utils/PublicRoutes";
import LoggedNavbar from "./components/LoggedNavbar";
import { ToastContainer } from "react-toastify";
import TimeTableEdit from "./pages/TimeTableEdit";
import TimeTable from "./pages/TimeTable";
import ViewProfile from "./pages/ViewProfile";
import DeleteTimetable from "./pages/DeleteTimetable";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PublicRoutes>
          <Navbar />
          <Home />
        </PublicRoutes>
      ),
    },
    {
      path: "/signup",
      element: (
        <PublicRoutes>
          <Navbar />
          <Signup />
        </PublicRoutes>
      ),
    },
    {
      path: "/login",
      element: (
        <PublicRoutes>
          <Navbar />
          <Login />
        </PublicRoutes>
      ),
    },
    {
      path: "/about",
      element: (
        <PublicRoutes>
          <Navbar />
          <About />
        </PublicRoutes>
      ),
    },
    {
      path: "/profile",
      element: (
        <ProtectRoutes>
          <LoggedNavbar />
          <Profile />
          <ToastContainer />
        </ProtectRoutes>
      ),
    },
    {
      path: "/timetable",
      element: (
        <ProtectRoutes>
          <LoggedNavbar />
          <TimeTable />
          <ToastContainer />
        </ProtectRoutes>
      ),
    },
    {
      path: "/edit-timetable",
      element: (
        <ProtectRoutes>
          <LoggedNavbar />
          <TimeTableEdit />
          <ToastContainer />
        </ProtectRoutes>
      ),
    },
    {
      path: "/view-profile",
      element: (
        <ProtectRoutes>
          <LoggedNavbar />
          <ViewProfile />
          <ToastContainer />
        </ProtectRoutes>
      ),
    },
    {
      path: "/delete-timetable",
      element: (
        <ProtectRoutes>
          <LoggedNavbar />
          <DeleteTimetable />
          <ToastContainer />
        </ProtectRoutes>
      ),
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
