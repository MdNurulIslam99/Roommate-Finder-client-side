import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddFindRoomMate = () => {
  const { user } = use(AuthContext);
  const lifestyleOptions = ["Pets", "Smoking", "Night Owl"];

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // Get lifestyle checkboxes (multi-value)
    const lifestyle = formData.getAll("lifestyle");

    // Convert FormData to object
    const roomFinderData = Object.fromEntries(formData.entries());

    // Add multi-value checkbox data manually
    roomFinderData.lifestyle = lifestyle;
    roomFinderData.userEmail = user?.email;
    roomFinderData.userName = user?.displayName;

    // console.log("Form submitted:", roomFinderData);
    // Store to data in database.

    fetch("http://localhost:3000/emptyRoom", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(roomFinderData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added Data Submitted Successfully ",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log("after submit data", data);
          // form.reset();
        }
      });
  };
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 bg-base-300 rounded-2xl shadow-2xl my-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Add to Find a Roommate
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5  p-6 ">
        <div>
          <label className="block text-lg font-bold mb-1">Title</label>
          <input
            type="text"
            name="title"
            className="w-full border rounded px-3 py-2"
            placeholder="Looking for a roommate in NYC"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-bold mb-1">Location</label>
            <input
              type="text"
              name="location"
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-bold mb-1">Rent Amount</label>
            <input
              type="number"
              name="rent"
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-lg font-bold mb-1">Room Type</label>
          <select
            name="roomType"
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Select</option>
            <option value="Single">Single</option>
            <option value="Shared">Double</option>
            <option value="Shared">Shared</option>
            <option value="Studio">Studio</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-bold mb-2">
            Lifestyle Preferences
          </label>
          <div className="flex gap-4 flex-wrap">
            {lifestyleOptions.map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input type="checkbox" name="lifestyle" value={item} />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-lg font-bold mb-1">Description</label>
          <textarea
            name="description"
            className="w-full border rounded px-3 py-2"
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block text-lg font-bold mb-1">
            Contact With Email
          </label>
          <input
            type="email"
            name="contactEmail"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-bold mb-1">
            Contact With Phone
          </label>
          <input
            type="number"
            name="contactPhone"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-bold mb-1">
            Contact With Land Phone
          </label>
          <input
            type="number"
            name="contactLandPhone"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-bold mb-1">Availability</label>
          <select
            name="availability"
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="available">Available</option>
            <option value="not-available">Not Available</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-4 ">
          <div>
            <label className="block text-lg font-bold mb-1 ">User Email</label>
            <input
              type="text"
              name="userEmail"
              value={user?.email || ""}
              readOnly
              className="w-full border rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-lg font-bold mb-1">User Name</label>
            <input
              type="text"
              name="userName"
              value={user?.displayName || ""}
              readOnly
              className="w-full border rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Add button
        </button>
      </form>
    </div>
  );
};

export default AddFindRoomMate;
