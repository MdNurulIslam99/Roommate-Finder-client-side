import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import AllItemsCard from "../AllItemsCard/AllItemsCard";

const AllItems = () => {
  const allEmptyRooms = useLoaderData(); //  many data expected from loader

  // description State for display, sort, filter
  const [displayRooms, setDisplayRooms] = useState(allEmptyRooms);
  const [sortOrder, setSortOrder] = useState("");
  const [roomTypeFilter, setRoomTypeFilter] = useState("");

  // description Filtering and sorting logic
  useEffect(() => {
    let filtered = [...allEmptyRooms];

    //  FIXED: Improved filter logic (case insensitive + trimmed)
    if (roomTypeFilter) {
      const filterValue = roomTypeFilter.toLowerCase().trim();
      filtered = filtered.filter(
        (item) => item.roomType?.toLowerCase().trim() === filterValue
      );
    }

    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.rent - b.rent);
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.rent - a.rent);
    }

    setDisplayRooms(filtered);
  }, [roomTypeFilter, sortOrder, allEmptyRooms]);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-12 lg:px-16">
      {/*  Filter + Sort Controls */}
      <div className="mt-10 mb-10 flex flex-col md:flex-row gap-4 justify-between items-center">
        {/* description Room Type Filter */}
        <select
          onChange={(e) => setRoomTypeFilter(e.target.value)}
          value={roomTypeFilter}
          className="select select-bordered w-full md:w-1/3"
        >
          <option value="">Filter by Room Type</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Shared">Shared</option>
          <option value="Studio">Studio</option>
        </select>

        {/* description Rent Sorting */}
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
          className="select select-bordered w-full md:w-1/3"
        >
          <option value="">Sort by Rent</option>
          <option value="asc">Lowest to Highest</option>
          <option value="desc">Highest to Lowest</option>
        </select>
      </div>

      {/*  Grid of Cards */}
      <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayRooms?.length > 0 ? (
            displayRooms.map((data) => (
              <AllItemsCard key={data._id} data={data} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 text-lg">
              No items found for this filter.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllItems;
