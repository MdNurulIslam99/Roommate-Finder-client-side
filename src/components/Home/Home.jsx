import React from "react";
import SwiperSlider from "../SwiperSlider/SwiperSlider";
import { useLoaderData } from "react-router";
import EmptyRoomCardContainer from "../EmptyRoomCardContainer/EmptyRoomCardContainer";
import FeaturedRoommates from "../FeaturedRoommates/FeaturedRoommates";
import CustomerReview from "../CustomerReview/CustomerReview";
import NewProduct from "../NewProduct/NewProduct";
import SupportDelevary from "../SupportDelevary/SupportDelevary";
import { ThemeProvider } from "../Context/ThemeContext";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import LottieCard from "../LottieCard/LottieCard";

const Home = () => {
  const emptyRooms = useLoaderData();
  console.log(emptyRooms);
  return (
    <ThemeProvider>
      <div>
        <ThemeSwitch></ThemeSwitch>
      </div>

      <div className="max-w-screen-2xl mx-auto px-16 dark:bg-gray-900 dark:text-blue-600 py-1">
        <div className="mt-10 mb-10">
          <SwiperSlider></SwiperSlider>
        </div>
        <div className="mt-20 ">
          <FeaturedRoommates></FeaturedRoommates>
        </div>
        <div>
          <EmptyRoomCardContainer
            key={emptyRooms._id}
            emptyRooms={emptyRooms}
          ></EmptyRoomCardContainer>
        </div>

        <div>
          <LottieCard></LottieCard>
        </div>

        <div>
          <CustomerReview></CustomerReview>
        </div>

        <div>
          <NewProduct></NewProduct>
        </div>

        <div className="mt-10 mb-10">
          <SupportDelevary></SupportDelevary>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
