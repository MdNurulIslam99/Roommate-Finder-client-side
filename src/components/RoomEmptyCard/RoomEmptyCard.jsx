import React from "react";
import { NavLink } from "react-router";

//  Accept description & fullDescription for details page
const RoomEmptyCard = ({ data }) => {
  const {
    _id,
    title,
    photoUrl,
    // roomType,
    // rent,
    // availability,
    // location,
    description, //  added
  } = data || {};

  return (
    //  Make card height consistent using flex and h-full
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col h-full">
      <img
        src={photoUrl}
        alt={title}
        className="w-full h-40 object-cover" //  reduced height for balance
      />

      <div className="p-4 flex flex-col justify-between flex-1">
        {" "}
        {/*  CHANGED */}
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>

          {/*  Added short description */}
          <p className="text-gray-600 text-sm mb-3">
            <span className="font-bold">Description: </span>{" "}
            {description?.slice(0, 90)}...
          </p>

          {/* <p className="text-base text-gray-600">
            <span className="font-bold">Location:</span> {location}
          </p>
          <p className="text-base text-gray-600">
            <span className="font-bold">Room Type:</span> {roomType}
          </p>
          <p className="text-base text-gray-600">
            <span className="font-bold">Rent:</span>{" "}
            <span className="text-indigo-500 font-bold">{rent} Taka</span>
          </p>
          <p className="text-base text-gray-600">
            <span className="font-bold">Status:</span> {availability}
          </p> */}
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

export default RoomEmptyCard;
