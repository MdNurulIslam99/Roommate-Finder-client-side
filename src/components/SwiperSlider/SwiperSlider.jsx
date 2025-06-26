import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperSlider = () => {
  return (
    //  Max height set to 70vh for desktop, 60vh for mobile
    <div className="w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {" "}
      {/* CHANGED */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full h-full"
      >
        {/*  Each slide container fixed to same height/width */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center rounded-2xl flex items-center justify-center text-white text-center"
            style={{
              backgroundImage: "url(https://i.ibb.co/3yFK0hKP/banner-5-1.webp)",
            }}
          >
            <div className="px-2 md:px-1 lg:px-0">
              <div className="bg-black bg-opacity-50 p-6 md:p-8 rounded-lg">
                <h1 className="text-xl md:text-4xl lg:text-5xl font-bold">
                  Find Your Perfect Roommate – Safe and Easy
                </h1>
                <p className="mt-4 text-sm md:text-lg lg:text-xl">
                  RoomMatch helps users find compatible roommates by matching
                  lifestyle, location, and preferences—all on a secure,
                  all-in-one platform...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center rounded-2xl flex items-center justify-center text-white text-center"
            style={{
              backgroundImage: "url(https://i.ibb.co/WWywjynj/banner-4-1.jpg)",
            }}
          >
            <div className="px-2 md:px-1 lg:px-0">
              <div className="bg-black bg-opacity-50 p-6 md:p-8 rounded-lg">
                <h1 className="text-xl md:text-4xl lg:text-5xl font-bold">
                  Smart Living Starts with the Right Roommate
                </h1>
                <p className="mt-4 text-sm md:text-lg lg:text-xl">
                  ShareSpace helps you find trusted roommates or rooms by
                  filtering based on budget, habits, and location for a
                  stress-free living experience...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center rounded-2xl flex items-center justify-center text-white text-center"
            style={{
              backgroundImage: "url(https://i.ibb.co/3930QYbX/banner2-1.jpg)",
            }}
          >
            <div className="px-2 md:px-1 lg:px-0">
              <div className="bg-black bg-opacity-50 p-6 md:p-8 rounded-lg">
                <h1 className="text-xl md:text-4xl lg:text-5xl font-bold">
                  Find a Roommate Who Feels Like a Friend
                </h1>
                <p className="mt-4 text-sm md:text-lg lg:text-xl">
                  LiveBuddy connects like-minded people to find or offer shared
                  housing quickly and safely through an easy-to-use platform...
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
