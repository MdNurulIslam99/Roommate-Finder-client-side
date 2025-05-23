import React from "react";
import { NavLink } from "react-router";

const RoomEmptyCard = ({ data }) => {
  const { title, photoUrl, roomType, rent, availability, location, _id } =
    data || {};
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden
         hover:shadow-lg transition duration-300"
    >
      <img
        src={photoUrl}
        alt="Smart Home Box"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="md:text-2xl text-xl font-bold">
          Room RentTitle :{" "}
          <span className="md:text-xl text-lg font-extrabold">{title}</span>
        </h3>

        <div className="mt-2">
          <p className="text-base text-gray-600">
            <span className="font-bold">Rent Location :</span> {location}.
          </p>
          <p className="text-base text-gray-600">
            <span className="font-bold">Room Type :</span> {roomType}.
          </p>
          <p className=" font-semibold text-base text-gray-600">
            <span className="font-bold">Room Rent :</span>{" "}
            <span className="font-bold text-indigo-400">{rent} Taka</span>
          </p>
          <p className="text-base text-gray-600">
            {" "}
            <span className="font-bold">RoomRent Status :</span> {availability}
          </p>
        </div>
        <NavLink to={`/emptyRoom/${_id}`}>
          {/* to={`/roomCardDetails/${_id}`} */}
          <button className=" mt-4 w-full bg-[#0EA106] font-semibold text-white py-2 rounded-lg hover:bg-blue-300 transition">
            See More
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default RoomEmptyCard;
