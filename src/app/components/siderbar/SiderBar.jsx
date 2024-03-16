import React from "react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

const SiderBar = () => {
  return (
    <div className="sidebar bg-body-tertiary">
      <h5 className="text-black">Adau Transaction Manager</h5>
      <div className="sidebar-menu ">
        <NavBar></NavBar>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default SiderBar;
