import { NavLink, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdatePost = () => {
  const post = useLoaderData();
  const navigate = useNavigate();

  const {
    _id,
    title,
    location,
    rent,
    roomType,
    photoUrl,
    lifestyle,
    description,
    contactEmail,
    contactPhone,
    contactLandPhone,
    availability,
    like,
    userName,
    userEmail,
  } = post;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedPost = {
      title: form.title.value,
      location: form.location.value,
      rent: form.rent.value,
      roomType: form.roomType.value,
      photoUrl: form.photoUrl.value,
      lifestyle: form.lifestyle.value,
      description: form.description.value,
      contactEmail: form.contactEmail.value,
      contactPhone: form.contactPhone.value,
      contactLandPhone: form.contactLandPhone.value,
      availability: form.availability.value,
      userName,
      userEmail,
    };

    fetch(`https://roommate-finder-server-psi.vercel.app/emptyRoom/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Success", "Post updated successfully!", "success");
          navigate("/myListings");
        } else {
          Swal.fire("Warning", "No changes were made.", "info");
        }
      });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 bg-base-300 rounded-2xl shadow-2xl my-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Updated to Find a Roommate
      </h2>
      <form onSubmit={handleUpdate} className="space-y-3 max-w-xl mx-auto">
        <div>
          <label className="label font-bold text-lg text-black">Title</label>
          <input
            name="title"
            defaultValue={title}
            className="input input-bordered rounded-lg w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <div>
            <label className="label font-bold text-lg text-black">
              Location
            </label>
            <input
              name="location"
              defaultValue={location}
              className="input input-bordered rounded-lg w-full"
            />
          </div>

          <div>
            <label className="label font-bold text-lg text-black">Rent</label>
            <input
              name="rent"
              defaultValue={rent}
              className="input input-bordered rounded-lg w-full"
            />
          </div>
        </div>
        <div>
          <label className="label font-bold text-lg text-black">
            Room Type
          </label>
          <select
            name="roomType"
            defaultValue={roomType}
            className="select select-bordered rounded-lg w-full"
          >
            <option value="">Select</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Shared">Shared</option>
            <option value="Studio">Studio</option>
          </select>
        </div>

        <div>
          <label className="label font-bold text-lg text-black">
            Photo URL
          </label>
          <input
            name="photoUrl"
            defaultValue={photoUrl}
            className="input input-bordered rounded-lg w-full"
          />
        </div>

        <div>
          <label className="label font-bold text-lg text-black">
            Lifestyle
          </label>
          <select
            name="lifestyle"
            defaultValue={lifestyle}
            className="select select-bordered rounded-lg w-full"
          >
            <option value="">Select</option>
            <option value="Pets">Pets</option>
            <option value="Smoking">Smoking</option>
            <option value="NonSmoking and Alcohol">
              NonSmoking and Alcohol
            </option>
            <option value="Night Owl">Night Owl</option>
          </select>
        </div>

        <div>
          <label className="label font-bold text-lg text-black">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={description}
            rows={4}
            className="textarea textarea-bordered rounded-lg w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="label font-bold text-lg text-black">
              Contact Email
            </label>
            <input
              name="contactEmail"
              defaultValue={contactEmail}
              className="input input-bordered rounded-lg w-full"
            />
          </div>

          <div>
            <label className="label font-bold text-lg text-black">
              Contact Phone
            </label>
            <input
              name="contactPhone"
              defaultValue={contactPhone}
              className="input input-bordered rounded-lg w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="label font-bold text-lg text-black">
              Contact Land Phone
            </label>
            <input
              name="contactLandPhone"
              defaultValue={contactLandPhone}
              className="input input-bordered rounded-lg w-full"
            />
          </div>

          <div>
            <label className="label font-bold text-lg text-black">
              Availability
            </label>
            <select
              name="availability"
              defaultValue={availability}
              className="select select-bordered rounded-lg w-full"
            >
              <option value="">Select</option>
              <option value="available">Available</option>
              <option value="not-available">Not Available</option>
            </select>
          </div>
        </div>

        <div>
          <label className="label font-bold text-lg text-black">Liked</label>
          <input
            name="like"
            defaultValue={like}
            className="input input-bordered rounded-lg w-full bg-gray-100 cursor-not-allowed"
          />
        </div>
        <div>
          <label className="label font-bold text-lg text-black">
            User Name (Read-only)
          </label>
          <input
            name="userName"
            defaultValue={userName}
            readOnly
            className="input input-bordered rounded-lg w-full bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="label font-bold text-lg text-black">
            User Email (Read-only)
          </label>
          <input
            name="userEmail"
            defaultValue={userEmail}
            readOnly
            className="input input-bordered rounded-lg w-full bg-gray-100 cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full text-lg font-bold"
        >
          Updated Post
        </button>
        <NavLink to="/myListings">
          <button
            type="submit"
            className="btn bg-[#0EA106] text-white w-full text-lg font-bold"
          >
            Back to MyListing
          </button>
        </NavLink>
      </form>
    </div>
  );
};

export default UpdatePost;
