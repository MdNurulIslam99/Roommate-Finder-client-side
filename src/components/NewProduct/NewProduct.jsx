import React from "react";

const NewProduct = () => {
  return (
    <div className="mt-10 mb-10 bg-blue-300 shadow-2xl rounded-2xl p-10">
      <div className="bg-base-200 shadow-2xl p-5 rounded-lg space-y-5">
        <h1 className="text-center lg:text-4xl md:text-3xl text-2xl font-bold  ">
          New Feature Launch: Post & Browse Flats for Sale!
        </h1>

        <p className="text-center px-5 font-semibold">
          We're excited to introduce a brand-new feature on our platform—Flat
          Sale Listings! Now, users can not only search for rentals but also buy
          and sell flats directly through our website. This new service is
          designed to make the process of buying or selling flats easier,
          faster, and more transparent.Our Demo Product here.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5  mt-10 ">
        <div className="bg-gray-300 p-5 rounded-lg ">
          <img
            className="rounded-lg h-[250px] w-[400px] shadow-2xl "
            src="https://i.ibb.co/Df83d3VT/flat6.jpg"
            alt="category1"
          />
        </div>
        <div className="bg-gray-300 p-5 rounded-lg ">
          <img
            className="rounded-lg h-[250px] w-[400px] shadow-2xl"
            src="https://i.ibb.co/zWMDTqgC/flat3.jpg"
            alt="category2"
          />
        </div>
        <div className="bg-gray-300 p-5 rounded-lg">
          <img
            className="rounded-lg h-[250px] w-[400px] shadow-2xl"
            src="https://i.ibb.co/PBNQ1WY/flat5.jpg"
            alt="category3"
          />
        </div>
        <div className="bg-gray-300 p-5 rounded-lg">
          <img
            className="rounded-lg h-[250px] w-[400px] shadow-2xl"
            src="https://i.ibb.co/zWMDTqgC/flat3.jpg"
            alt="category4"
          />
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
