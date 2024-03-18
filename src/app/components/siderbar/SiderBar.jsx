import React from "react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

const SiderBar = () => {
  return (
    <div className="sidebar bg-body-tertiary">
      <div className="bg-primary p-1 ">
        <h5 className="text-white fw-bold">Adau Transaction Manager</h5>
      </div>
      <div className="sidebar-menu ">
        <NavBar></NavBar>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default SiderBar;
