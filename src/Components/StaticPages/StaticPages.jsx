import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import "../../App.css";
function StaticPages() {
  return (
    <div className="max-w-[1300px] mx-auto">
      <Navbar />
      <div className="Home">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default StaticPages;
