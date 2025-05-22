import React from "react";
import CountUp from "react-countup";

const CustomerReview = () => {
  return (
    <div className="shadow-2xl p-4 rounded-2xl my-5 bg-green-300">
      <div className=" fontMulish text-center mt-5 space-y-3">
        <h1 className=" lg:text-4xl md:text-3xl text-2xl font-bold">
          We Provide Best RoomRent News Services
        </h1>
        <p className="md:text-lg text-base font-semibold opacity-80 p-5">
          At RoomRent News, we are dedicated to simplifying your search for the
          perfect place to live. Whether you're a student, working professional,
          or a newcomer to the city, our platform keeps you informed and
          connected with the latest and most reliable room rental updates.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 mt-10 mb-10">
        <div className="bg-gray-100 p-6 space-y-2 rounded-2xl w-68">
          <img src="/success-staffs.png" alt="totalEmployee" />
          <h1 className="text-4xl font-bold">
            <CountUp
              start={0}
              end={199}
              duration={20}
              className="text-4xl font-bold"
            />
            +
          </h1>
          <p className="text-base font-semibold opacity-80">Total Employee</p>
        </div>

        <div className="bg-gray-100 p-6 space-y-2 rounded-2xl w-68 ">
          <img src="/success-review.png" alt="total" />
          <h1 className="text-4xl font-bold">
            <CountUp
              start={3000}
              end={3367}
              duration={20}
              className="text-4xl font-bold"
            />
            +
          </h1>
          <p className="text-base font-semibold opacity-80">Total Reviews</p>
        </div>

        <div className="bg-gray-100 p-6 space-y-2 rounded-2xl w-68">
          <img
            className="h-18 w-18"
            src="https://img.icons8.com/?size=160&id=91234&format=png"
            alt="totalLawer"
          />
          <h1 className="text-4xl font-bold">
            <CountUp
              start={1450}
              end={1900}
              duration={20}
              className="text-4xl font-bold"
            />
            +
          </h1>
          <p className="text-base font-semibold opacity-80">Already Occupied</p>
        </div>

        <div className="bg-gray-100 p-6 space-y-2 rounded-2xl w-68">
          <img
            className="h-18 w-18 "
            src="https://img.icons8.com/?size=160&id=67366&format=png"
            alt="totalLawer"
          />
          <h1 className="text-4xl font-bold">
            <CountUp
              start={199}
              end={500}
              duration={20}
              className="text-4xl font-bold"
            />
            +
          </h1>
          <p className="text-base font-semibold opacity-80">
            Already Booked Rented
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
