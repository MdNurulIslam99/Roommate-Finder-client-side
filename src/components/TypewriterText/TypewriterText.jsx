import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypewriterText = () => {
  return (
    <div className="shadow-2xl rounded-lg mt-10 mb-5 p-10 bg-base-300">
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        Find Your Perfect Room For{" "}
        <span className="text-green-600">
          <Typewriter
            words={[
              "Monthly Rent",
              "Single Room",
              "Double Room",
              "Shared Room",
              "Stdio Room",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </span>
      </h1>
    </div>
  );
};

export default TypewriterText;
