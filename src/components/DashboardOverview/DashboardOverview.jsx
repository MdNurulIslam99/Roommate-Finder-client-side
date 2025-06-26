import React, { use, useEffect, useState } from "react";

import userIcon from "/user.png";
import { AuthContext } from "../Provider/AuthProvider";
const DashboardOverview = () => {
  const { user } = use(AuthContext);
  const [allItems, setAllItems] = useState([]);
  const [myItems, setMyItems] = useState([]);

  // ✅ CHANGED: Fetch all items
  useEffect(() => {
    fetch("http://localhost:3000/emptyRoom")
      .then((res) => res.json())
      .then((data) => {
        setAllItems(data);
        const myData = data.filter((item) => item.userEmail === user?.email);
        setMyItems(myData);
      });
  }, [user?.email]);

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-8">📊 Dashboard Overview</h2>

      {/* ✅ CHANGED: Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-blue-100 p-6 rounded-xl shadow text-center">
          <h3 className="text-xl font-semibold text-blue-800">Total Items</h3>
          <p className="text-4xl font-bold text-blue-900">{allItems.length}</p>
        </div>
        <div className="bg-green-100 p-6 rounded-xl shadow text-center">
          <h3 className="text-xl font-semibold text-green-800">My Items</h3>
          <p className="text-4xl font-bold text-green-900">{myItems.length}</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-xl shadow text-center">
          <h3 className="text-xl font-semibold text-yellow-800">
            Shared Rooms
          </h3>
          <p className="text-4xl font-bold text-yellow-900">
            {
              allItems.filter(
                (item) => item.roomType.toLowerCase() === "shared"
              ).length
            }
          </p>
        </div>
        <div className="bg-purple-100 p-6 rounded-xl shadow text-center">
          <h3 className="text-xl font-semibold text-purple-800">
            Studio Rooms
          </h3>
          <p className="text-4xl font-bold text-purple-900">
            {
              allItems.filter(
                (item) => item.roomType.toLowerCase() === "studio"
              ).length
            }
          </p>
        </div>
      </div>

      {/* ✅ CHANGED: User Info */}
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
        <img
          src={user?.photoURL || userIcon}
          alt="User"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h3 className="text-2xl font-bold text-gray-800">
            {user?.displayName || "No Name Found"}
          </h3>
          <p className="text-gray-600">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
