import React from "react";

const SupportDelevary = () => {
  return (
    <div className="shadow-2xl p-4 rounded-2xl  bg-green-300">
      <div className=" fontMulish text-center mt-3 space-y-3 bg-white shadow-2xl p-4 rounded-2xl">
        <h1 className=" lg:text-4xl md:text-3xl text-2xl font-bold ">
          Roommate Listings & Change Assistant
        </h1>
        <p className="md:text-lg text-base font-semibold opacity-80 p-4">
          The Room Change Assistant is a 24/7 support feature that helps users
          easily switch rooms or accommodations. It offers access to listings,
          comparisons, and direct contact with hosts or roommates. With
          real-time chat, FAQs, and smart suggestions, it simplifies relocation
          and provides round-the-clock assistance, making moving stress-free and
          more efficient.
        </p>
      </div>
      <div className="mt-5">
        <img
          className="rounded-lg w-full h-[400px]"
          src="https://i.ibb.co/YThBcpxh/delevary.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default SupportDelevary;
