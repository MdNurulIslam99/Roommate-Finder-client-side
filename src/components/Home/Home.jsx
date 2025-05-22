import React from "react";
import SwiperSlider from "../SwiperSlider/SwiperSlider";
import { useLoaderData } from "react-router";
import EmptyRoomCardContainer from "../EmptyRoomCardContainer/EmptyRoomCardContainer";
import FeaturedRoommates from "../FeaturedRoommates/FeaturedRoommates";
import CustomerReview from "../CustomerReview/CustomerReview";
import NewProduct from "../NewProduct/NewProduct";

const Home = () => {
  const emptyRooms = useLoaderData();
  console.log(emptyRooms);
  return (
    <div className="max-w-screen-2xl mx-auto px-16">
      <div className="mt-10 mb-10">
        <SwiperSlider></SwiperSlider>
      </div>
      <div className="mt-20">
        <FeaturedRoommates></FeaturedRoommates>
      </div>
      <div>
        <EmptyRoomCardContainer
          key={emptyRooms._id}
          emptyRooms={emptyRooms}
        ></EmptyRoomCardContainer>
      </div>

      <div>
        <CustomerReview></CustomerReview>
      </div>

      <div>
        <NewProduct></NewProduct>
      </div>
    </div>
  );
};

export default Home;
