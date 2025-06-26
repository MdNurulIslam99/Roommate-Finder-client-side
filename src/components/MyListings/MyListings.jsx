import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { NavLink } from "react-router";

const MyListings = () => {
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) return;

    fetch("https://roommate-finder-server-psi.vercel.app/emptyRoom")
      .then((res) => res.json())
      .then((postsData) => {
        const filteredPosts = postsData.filter(
          (post) => post.userEmail === user.email
        );
        setPosts(filteredPosts);
        setLoadingPosts(false);
      });
    // .catch((err) => {
    //   console.error("Failed to fetch roommate posts:", err);
    //   setLoadingPosts(false);
    // });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://roommate-finder-server-psi.vercel.app/emptyRoom/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingData = (prev) =>
                prev.filter((post) => post._id !== id);
              setPosts(remainingData);
              Swal.fire({
                title: "Deleted!",
                text: "Your Data has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  if (loading || loadingPosts)
    return <p className="text-center mt-10">Loading...</p>;
  if (!user) return <p className="text-center mt-10">No user logged in.</p>;
  if (posts.length === 0)
    return <p className="text-center mt-10">You have no roommate posts yet.</p>;

  return (
    <div className="px-4 md:px-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 rounded-2xl border my-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
          My Roommate Posts
        </h2>
        <div className="overflow-x-auto shadow-2xl border rounded-2xl">
          <table className="min-w-full bg-white text-sm md:text-base">
            <thead>
              <tr className="bg-blue-400 text-white">
                <th className="py-2 px-3 md:py-3 md:px-6 text-left">
                  Index Id
                </th>
                <th className="py-2 px-3 md:py-3 md:px-6 text-left">Title</th>
                <th className="py-2 px-3 md:py-3 md:px-6 text-left">
                  Location
                </th>
                <th className="py-2 px-3 md:py-3 md:px-6 text-left">
                  Rent (BDT)
                </th>
                <th className="py-2 px-3 md:py-3 md:px-6 text-left">
                  Room Type
                </th>
                <th className="py-2 px-3 md:py-3 md:px-6 text-left">
                  Availability
                </th>
                <th className="py-2 px-3 md:py-3 md:px-6 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {posts.map(
                (
                  { _id, title, location, rent, roomType, availability },
                  index
                ) => (
                  <tr
                    key={_id}
                    className="border-b hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-2 px-3 md:py-3 md:px-6">{index + 1}</td>
                    <td className="py-2 px-3 md:py-3 md:px-6">{title}</td>
                    <td className="py-2 px-3 md:py-3 md:px-6">{location}</td>
                    <td className="py-2 px-3 md:py-3 md:px-6">{rent}</td>
                    <td className="py-2 px-3 md:py-3 md:px-6">{roomType}</td>
                    <td className="py-2 px-3 md:py-3 md:px-6 capitalize">
                      {availability}
                    </td>
                    <td className="py-2 px-3 md:py-3 md:px-6 text-center">
                      <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
                        <NavLink to={`/updatePost/${_id}`}>
                          <button className="bg-[#0EA106] hover:bg-[#546b65] text-white px-3 py-1 rounded">
                            Update
                          </button>
                        </NavLink>
                        <button
                          onClick={() => handleDelete(_id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyListings;
