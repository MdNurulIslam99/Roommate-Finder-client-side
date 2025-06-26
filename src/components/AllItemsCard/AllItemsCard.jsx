import React from "react";
import { NavLink } from "react-router";

const RoommateCard = ({ data }) => {
  const { _id, title, photoUrl, description } = data || {};

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col h-full">
      <img src={photoUrl} alt={title} className="w-full h-40 object-cover" />

      <div className="p-4 flex flex-col justify-between flex-1">
        {" "}
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>

          <p className="text-gray-600 text-sm mb-3">
            <span className="font-bold">Description: </span>{" "}
            {description?.slice(0, 90)}...
          </p>
        </div>
        {/*  Button aligned bottom */}
        <NavLink to={`/emptyRoom/${_id}`}>
          <button className="mt-4 w-full bg-[#0EA106] text-white py-2 rounded-lg hover:bg-green-600 transition">
            See More
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default RoommateCard;
