import React from "react";

import dayMode from "../../assets/dayMode.png";
import nightMode from "../../assets/nightMode.png";
import { useTheme } from "../Context/ThemeContext";

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="absolute top-4 right-32 md:top-3 md:right-8 cursor-pointer">
      <div onClick={toggleTheme}>
        {theme === "light" ? (
          <img src={dayMode} alt="day mode" className="w-8 h-auto" />
        ) : (
          <img src={nightMode} alt="night mode" className="w-8 h-auto" />
        )}
      </div>
    </div>
  );
}

export default ThemeSwitch;
