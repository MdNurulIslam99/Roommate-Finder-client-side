import React from "react";
import BrowseListingInfo from "../BrowseListingInfo/BrowseListingInfo";
import BrowseListingDetailsTable from "../BrowseListingDetailsTable/BrowseListingDetailsTable";
import { useLoaderData } from "react-router";

const BrowseListing = () => {
  const emptyRooms = useLoaderData();
  console.log(emptyRooms);
  return (
    <div className="max-w-screen-2xl mx-auto px-16 ">
      <div className="mt-10 mb-10">
        <BrowseListingInfo></BrowseListingInfo>
      </div>
      <div className="mt-10 mb-10">
        <BrowseListingDetailsTable
          key={emptyRooms._id}
          emptyRooms={emptyRooms}
        ></BrowseListingDetailsTable>
      </div>
    </div>
  );
};

export default BrowseListing;
