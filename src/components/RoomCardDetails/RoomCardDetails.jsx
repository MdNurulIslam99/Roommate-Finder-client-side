import React from "react";
import { NavLink, useLoaderData } from "react-router";

const RoomCardDetails = () => {
  const emptyRoomId = useLoaderData();
  console.log(emptyRoomId);
  //   const { _id } = useParams();
  //   const emptyRoomId = data.find((emptyRoomData) => emptyRoomData._id == _id);
  const {
    title,
    photoUrl,
    roomType,
    rent,
    availability,
    location,
    description,
    userName,
    lifestyle,
    userEmail,
    contactEmail,
    contactLandPhone,
    contactPhone,
  } = emptyRoomId || {};
  return (
    <div className="max-w-screen-2xl mx-auto px-16 my-10">
      <div className="mb-10 bg-base-300 shadow-2xl rounded-2xl p-6 space-y-3">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-extrabold text-center">
          Featured Roommates Details Info
        </h1>
        <p className="font-semibold text-base text-center opacity-70 ">
          Explore detailed profiles of top roommate listings, including rent,
          room type, lifestyle, and contact info. Each post offers a clear{" "}
          <br />
          description to help you make quick, confident choices—whether you
          prefer a single room, shared space, or studio.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img
          src={photoUrl}
          alt={title}
          className="w-full h-[400px] object-cover "
        />
        <div className="p-4 bg-base-300 ">
          <div>
            <h3 className="md:text-3xl md:text-xl text-lg font-bold mb-2">
              RentPost : <span className="md:text-3xl text-lg">{title}</span>
            </h3>
            <p className="md:text-xl text-lg font-bold text-gray-600 mb-1">
              Location :
              <span className="font-semibold text-lg "> {location}</span>
            </p>
            <p className="md:text-xl text-lg text-gray-600 font-bold mb-1">
              Rent :<span className="font-semibold text-lg"> {rent} BDT</span>
            </p>
            <p className="md:text-xl text-lg font-bold text-gray-600 mb-1">
              Room Type :
              <span className="font-semibold text-lg"> {roomType} </span>
            </p>
            <p className="font-bold md:text-xl text-lg text-gray-600 mb-1">
              Lifestyle :
              <span className="font-semibold text-lg"> {lifestyle}</span>
            </p>
          </div>
          <div className="mt-2 space-y-2">
            <p className="md:text-xl text-lg font-bold text-gray-600">
              ContactUs Email :
              <span className="font-semibold text-lg"> {contactEmail}</span>{" "}
            </p>
            <p className="md:text-xl text-lg font-bold text-gray-600">
              ContactUs Phone:
              <span className="font-semibold text-lg">
                {" "}
                {contactPhone}
              </span>{" "}
            </p>
            <p className="md:text-xl text-lg font-bold text-gray-600">
              ContactUs LandPhone:
              <span className="font-semibold text-lg">
                {" "}
                {contactLandPhone}{" "}
              </span>
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="md:text-xl text-lg  font-semibold">About User :</h2>
            <p className="md:text-xl text-lg font-bold text-gray-600">
              User Email:
              <span className="font-semibold text-lg"> {userEmail}</span>{" "}
            </p>
            <p className="md:text-xl text-lg font-bold text-gray-600">
              UserName :
              <span className="font-semibold text-lg"> {userName} </span>
            </p>
          </div>
          <div>
            <p className="mt-3 md:text-xl text-lg text-green-600 font-bold">
              Status :{" "}
              {availability === "available" ? "Available" : "Not Available"}
            </p>
            <p className="md:text-xl text-lg font-base font-bold text-gray-700 mt-2">
              Description :
              <span className="md:text-lg text-base font-semibold">
                {" "}
                {description}{" "}
              </span>
            </p>
          </div>

          <div className="py-5 flex md:flex-row flex-col justify-center items-center gap-5">
            <button className="w-full mt-5 px-8 py-3 md:text-xl text-lg text-center font-bold rounded-md dark:bg-violet-600 dark:text-gray-50">
              Like
            </button>
            <NavLink
              to="/"
              type="submit"
              className="w-full mt-5 px-8 py-3 text-lg text-center font-bold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Back to Home Category
            </NavLink>
            <NavLink
              to="/browseListing"
              type="submit"
              className="w-full mt-5 px-8 py-3 text-lg text-center font-bold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Back to BrowseListing
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCardDetails;
