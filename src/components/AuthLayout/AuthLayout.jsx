import React from "react";
import NavBar from "../Header/NavBar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const AuthLayout = () => {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <div className="bg-base-300 min-h-[calc(100vh-360px)]">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AuthLayout;
