import React from "react";

const BrowseListingInfo = () => {
  return (
    <div>
      <div className="mb-10 bg-base-300 shadow-2xl rounded-2xl p-6 space-y-3">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-extrabold text-center">
          Find Your Perfect Match: Browse Listings
        </h1>
        <p className="font-semibold text-base text-center opacity-70 ">
          The Browse Roommate Listings page lets you explore all available
          roommate posts submitted by users. It displays key details like
          location, rent, room type, and availability in an easy-to-read table.
          Each listing includes a See More button that takes you to a detailed
          page for further information, helping you find the ideal roommate
          match quickly and effortlessly.
        </p>
      </div>
    </div>
  );
};

export default BrowseListingInfo;
