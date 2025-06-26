import React from "react";
import { useLoaderData } from "react-router";
import BrowseListingInfo from "../BrowseListingInfo/BrowseListingInfo";
import DashboardAllItemTable from "../../DashboardAllItemTable/DashboardAllItemTable";

const DashboardAllItem = () => {
  const emptyRooms = useLoaderData();
  //console.log(emptyRooms);
  return (
    <div className="max-w-screen-2xl mx-auto px-16 ">
      <div className="mt-10 mb-10">
        <BrowseListingInfo></BrowseListingInfo>
      </div>
      <div className="mt-10 mb-10">
        <DashboardAllItemTable
          key={emptyRooms._id}
          emptyRooms={emptyRooms}
        ></DashboardAllItemTable>
      </div>
    </div>
  );
};

export default DashboardAllItem;
