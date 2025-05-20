import React from "react";
import NavBar from "../Header/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <div className=" min-h-[calc(100vh-360px)]">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
