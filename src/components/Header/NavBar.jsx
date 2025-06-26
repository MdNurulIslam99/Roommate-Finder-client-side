import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import userIcon from "/user.png";
import Swal from "sweetalert2";

const NavBar = () => {
  // const darkMode = true;
  const { user, signOutUser } = use(AuthContext);
  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        // alert("Sign-out successful");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Sign-out successful!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // An error happened.
        // console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Sign-out Cannot SignOut!",
          // footer: '<a href="#">Why do I have this issue?</a>',
        });
        // alert("Sign-out Unsuccessful");
      });
  };

  // Toggle Theme
  // const handleToggle = () => {
  //   console.log("button was clicked");
  // };
  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-base-100 shadow-sm px-6 md:px-12 lg:px-20 xl:px-24">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="cursor-pointer mr-3 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/addToFindRoommate">Add to Find Roommate</NavLink>
            </li>
            <li>
              <NavLink to="/browseListing">Browse Listing</NavLink>
            </li>
            <li>
              <NavLink to="/myListings">My Listings</NavLink>
            </li>
            <li>
              <NavLink to="/allItems">All Rooms</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          <img
            className="h-10 w-10 md:block hidden rounded-full"
            src="https://i.ibb.co/ccGK5VxL/icon.jpg"
            alt="logo"
          />
          <h1 className="fontPlusJakarta text-base md:text-xl font-extrabold">
            Roommate.Finder
          </h1>
        </NavLink>

        {/* <div className="px-2">{user && user.email}</div> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 fontMulish text-xl font-bold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addToFindRoommate"
              className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
            >
              Add Roommate
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/browseListing"
              className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
            >
              Browse Listing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myListings"
              className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
            >
              My Listings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allItems"
              className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
            >
              All Rooms
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
              >
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end  space-x-5">
        {user ? (
          <div className="flex gap-3">
            <div className="relative group">
              <img
                className="w-12 h-12 rounded-full cursor-pointer hidden md:block"
                src={user.photoURL || userIcon}
                alt="user"
              />
              <div className="absolute bottom-[-90px] left-1/2 transform -translate-x-1/2 bg-white shadow-md p-2 rounded-lg w-48 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <p className="font-semibold text-gray-800">
                  {user.displayName}
                </p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>

            <div>
              <button
                onClick={handleLogOut}
                className="btn bg-[#0EA106] rounded-4xl text-white px-3 md:px-5 fontMulish text-base md:text-xl"
              >
                LogOut
              </button>
            </div>
          </div>
        ) : (
          <div className=" flex md:flex-row flex-col py-3 md:py-0 gap-1">
            <NavLink
              to="/auth/signin"
              className="btn bg-[#0EA106] rounded-4xl text-white px-5 fontMulish font-bold text-base md:text-xl"
            >
              Login
            </NavLink>
            <NavLink
              to="/auth/signup"
              className="btn bg-[#0EA106] rounded-4xl text-white px-5 fontMulish font-bold text-base md:text-xl"
            >
              Sign Up
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
