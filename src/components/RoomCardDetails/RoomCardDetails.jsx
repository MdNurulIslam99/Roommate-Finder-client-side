import React, { useContext, useState } from "react";
import { NavLink, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const RoomCardDetails = () => {
  const emptyRoomId = useLoaderData();

  const {
    _id,
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
    like,
  } = emptyRoomId || {};

  const { user } = useContext(AuthContext);

  const [likeCount, setLikeCount] = useState(like || 0);
  const [showContact, setShowContact] = useState(false); // NEW STATE

  const handleLike = () => {
    if (user?.email === userEmail) {
      Swal.fire({
        icon: "warning",
        title: "Oops!",
        text: "You can't like your own post.",
        timer: 1500,
        showConfirmButton: false,
      });
      return;
    }

    const newLikeCount = likeCount + 1;
    setLikeCount(newLikeCount);
    setShowContact(true); // SHOW CONTACT INFO AFTER LIKE

    fetch(`https://roommate-finder-server-psi.vercel.app/emptyRoom/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ like: newLikeCount }),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Liked!",
          text: "You liked this",
          timer: 1500,
          showConfirmButton: false,
        });
      });
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-16 my-10">
      <div className="mb-10 bg-base-300 shadow-2xl rounded-2xl p-6 space-y-3">
        <h1 className="text-4xl font-extrabold text-center">
          Featured Roommates Details Info
        </h1>
        <p className="font-semibold text-base text-center opacity-70 ">
          The "Featured Roommates Details" section is designed to showcase a
          handpicked list of roommate listings that are currently available
          <br />
          and stand out based on certain criteria like affordability, location,
          room quality, or user ratings.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img
          src={photoUrl}
          alt={title}
          className="w-full h-[400px] object-cover "
        />
        <div className="p-4 bg-base-300">
          <div>
            <div className="flex justify-between gap-5 lg:flex-row flex-col">
              <div>
                <h3 className="lg:text-4xl md:text-xl text-lg font-bold mb-2">
                  Rent Title :
                  <span className="md:text-3xl text-lg"> {title}</span>
                </h3>
              </div>

              <div>
                <h2 className=" lg:mr-10 lg:text-4xl md:text-3xl text-xl font-bold mb-2">
                  People Interested: {likeCount}
                </h2>
              </div>
            </div>

            <p className="md:text-xl text-lg font-bold text-gray-600 mb-1">
              Location :
              <span className="font-semibold text-lg"> {location}</span>
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
              <span className="font-semibold text-lg"> {contactEmail}</span>
            </p>

            {!showContact && (
              <p className="text-emerald-600 text-xl font-semibold">
                Click "Like" to reveal contact phone numbers.
              </p>
            )}

            {showContact && (
              <>
                <p className="md:text-xl text-lg font-bold text-gray-600">
                  ContactUs Phone:
                  <span className="font-semibold text-lg"> {contactPhone}</span>
                </p>
                <p className="md:text-xl text-lg font-bold text-gray-600">
                  ContactUs LandPhone:
                  <span className="font-semibold text-lg">
                    {" "}
                    {contactLandPhone}
                  </span>
                </p>
              </>
            )}
          </div>

          <div className="space-y-2 mt-2">
            <h2 className="md:text-xl text-lg font-semibold">About User :</h2>
            <p className="md:text-xl text-lg font-bold text-gray-600">
              User Email:
              <span className="font-semibold text-lg"> {userEmail}</span>
            </p>
            <p className="md:text-xl text-lg font-bold text-gray-600">
              UserName :
              <span className="font-semibold text-lg"> {userName} </span>
            </p>
          </div>

          <div>
            <p className="mt-3 md:text-xl text-lg text-green-600 font-bold">
              Status :
              {availability === "available" ? " Available" : " Not Available"}
            </p>
            <p className="md:text-xl text-lg font-base font-bold text-gray-700 mt-2">
              Description :
              <span className="md:text-lg text-base font-semibold">
                {" "}
                {description}
              </span>
            </p>
          </div>

          <div className="py-5 flex md:flex-row flex-col justify-center items-center gap-5">
            <button
              onClick={handleLike}
              className="w-full mt-5 px-8 py-3 md:text-xl text-lg text-center font-bold rounded-md text-gray-50 bg-violet-600 dark:bg-violet-600 dark:text-gray-50"
            >
              Like
            </button>

            <NavLink
              to="/"
              className="w-full mt-5 px-8 py-3 text-lg text-center font-bold rounded-md bg-violet-600 text-gray-50"
            >
              Back to Home Category
            </NavLink>
            <NavLink
              to="/browseListing"
              className="w-full mt-5 px-8 py-3 text-lg text-center font-bold rounded-md bg-violet-600 text-gray-50"
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
