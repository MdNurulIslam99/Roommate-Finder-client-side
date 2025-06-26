import React, { use, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router"; //  Do NOT change
import {
  FaBars,
  FaTimes,
  FaHome,
  FaSignOutAlt,
  FaTachometerAlt,
  FaWarehouse,
  FaUserAlt,
  FaPlusCircle,
} from "react-icons/fa";

import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  const { signOutUser } = use(AuthContext); //  unchanged
  const navigate = useNavigate();

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged Out!",
          timer: 1500,
          showConfirmButton: false,
          position: "top-end",
        });
        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Logout failed",
          text: "Please try again!",
        });
      });
  };

  //  CHANGED: link click auto closes menu on small devices
  const handleNavClick = () => {
    if (window.innerWidth < 1024) setOpen(false);
  };

  return (
    <div className="flex min-h-screen relative">
      {/*  Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 w-64 bg-white shadow-lg h-full transform lg:translate-x-0 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-indigo-600">Dashboard</h2>
          <button
            className="lg:hidden text-gray-600"
            onClick={() => setOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        {/*  Sidebar Nav Links with Icons */}
        <nav className="flex flex-col gap-4 p-4 font-semibold">
          <NavLink
            to="/dashboard"
            end
            onClick={handleNavClick} //  Auto-close on click
            className={({ isActive }) =>
              isActive
                ? "text-indigo-700 font-bold flex items-center gap-2"
                : "text-gray-700 flex items-center gap-2"
            }
          >
            <FaTachometerAlt /> Overview
          </NavLink>

          <NavLink
            to="/dashboard/allItems"
            onClick={handleNavClick} //
            className={({ isActive }) =>
              isActive
                ? "text-indigo-700 font-bold flex items-center gap-2"
                : "text-gray-700 flex items-center gap-2"
            }
          >
            <FaWarehouse /> All Rooms Items
          </NavLink>

          <NavLink
            to="/dashboard/myItems"
            onClick={handleNavClick} //
            className={({ isActive }) =>
              isActive
                ? "text-indigo-700 font-bold flex items-center gap-2"
                : "text-gray-700 flex items-center gap-2"
            }
          >
            <FaUserAlt /> My Post Items
          </NavLink>

          <NavLink
            to="/dashboard/addToFindRoommate"
            onClick={handleNavClick} //
            className={({ isActive }) =>
              isActive
                ? "text-indigo-700 font-bold flex items-center gap-2"
                : "text-gray-700 flex items-center gap-2"
            }
          >
            <FaPlusCircle /> Add Room
          </NavLink>

          <hr className="my-4" />

          <NavLink
            to="/"
            onClick={handleNavClick} //
            className="text-gray-600 hover:text-indigo-700 flex items-center gap-2"
          >
            <FaHome /> Home
          </NavLink>

          <button
            onClick={handleLogout}
            className="text-red-600 hover:text-red-800 flex items-center gap-2"
          >
            <FaSignOutAlt /> Logout
          </button>
        </nav>
      </div>

      {/*  CHANGED: Overlay only blocks sidebar, NOT main content */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="lg:hidden fixed inset-0 z-40"
        >
          {/* Don't use bg-black here to avoid covering the whole screen */}
        </div>
      )}

      {/*  Main Content Area */}
      <div className="flex-1 lg:ml-64 p-4 z-0">
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-gray-600 mb-4"
        >
          <FaBars size={24} />
        </button>
        <div className=" ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
