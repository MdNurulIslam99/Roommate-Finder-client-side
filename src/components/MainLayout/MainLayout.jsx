import React from "react";
import NavBar from "../Header/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";
import { ThemeProvider } from "../Context/ThemeContext";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const MainLayout = () => {
  return (
    <ThemeProvider>
      <div>
        <ThemeSwitch></ThemeSwitch>
      </div>
      <div className=" dark:bg-gray-900 dark:text-blue-600">
        <div>
          <NavBar></NavBar>
        </div>
        <div className=" min-h-[calc(100vh-360px)] pt-16">
          <Outlet></Outlet>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
