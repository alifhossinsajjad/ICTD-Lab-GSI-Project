import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/sheard/Navbar";
import Footer from "../components/sheard/Footer";

const RootLayout = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 mt-40">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
