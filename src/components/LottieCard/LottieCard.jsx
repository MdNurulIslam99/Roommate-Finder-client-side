import Lottie from "lottie-react";
import React from "react";
import animationRoom from "../../assets/animationroom2.json";
import animationRoom1 from "../../assets/animationroom.json";
import animationRoom2 from "../../assets/animationroom3.json";

const LottieCard = () => {
  return (
    <div className="p-5 shadow-2xl rounded-2xl bg-base-200 mt-10 mb-10 ">
      <div>
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center mt-5 mb-10">
          Lottie Animated Component
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        <div className="w-full mx-auto shadow-2xl">
          <Lottie animationData={animationRoom} loop={true} />
        </div>
        <div className="w-full mx-auto">
          <Lottie animationData={animationRoom1} loop={true} />
        </div>
        <div className="w-full mx-auto">
          <Lottie animationData={animationRoom2} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default LottieCard;
