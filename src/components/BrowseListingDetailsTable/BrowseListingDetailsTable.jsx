import React from "react";
import { NavLink } from "react-router";

const BrowseListingDetailsTable = ({ emptyRooms }) => {
  return (
    <div className="px-4 md:px-10 py-8 max-w-7xl mx-auto ">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Browse Roommate Listings
      </h2>
      <div className="overflow-x-auto rounded-2xl border ">
        <table className="min-w-full  bg-white shadow-2xl rounded-2xl ">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-6 border-b">Index Id</th>
              <th className="py-3 px-4 border-b">Photo</th>
              <th className="py-3 px-4 border-b">User Name</th>
              <th className="py-3 px-4 border-b">User Email</th>
              <th className="py-3 px-4 border-b">Location</th>
              <th className="py-3 px-4 border-b">Rent</th>
              <th className="py-3 px-4 border-b">Room Type</th>
              <th className="py-3 px-4 border-b">Availability</th>
              <th className="py-3 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {emptyRooms.map((item, index) => (
              <tr key={item._id} className="text-center hover:bg-gray-50">
                <td className="py-3 px-6 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">
                  <img
                    src={item.photoUrl}
                    alt={item.title}
                    className="h-16 w-20 object-cover rounded"
                  />
                </td>
                <td className="py-2 px-4 border-b">{item.userName}</td>
                <td className="py-2 px-4 border-b">{item.userEmail}</td>
                <td className="py-2 px-4 border-b">{item.location}</td>
                <td className="py-2 px-4 border-b">{item.rent} BDT</td>
                <td className="py-2 px-4 border-b">{item.roomType}</td>
                <td className="py-2 px-4 border-b capitalize">
                  {item.availability}
                </td>
                <td className="py-2 px-4 border-b">
                  <NavLink to={`/emptyRoom/${item._id}`}>
                    <button className=" mt-4 w-full bg-[#0EA106] font-semibold text-white py-2 rounded-lg hover:bg-blue-300 transition">
                      See More
                    </button>
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseListingDetailsTable;
