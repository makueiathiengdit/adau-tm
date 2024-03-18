import Image from "next/image";
import React from "react";
import AdauLogo from "../Logo/Logo";

const HomePage = () => {
  return (
    <div className="container mt-4 text-center">
      <div className="mt-4"></div>
      <Image src="/adau/2.png" width="250" height="250"></Image>
      {/* <AdauLogo backgroundColor="blue" foregroundColor="white"></AdauLogo> */}
      <h1 className="fs-1 fw-bolder text-primary">Adau Transaction Manager</h1>
    </div>
  );
};

export default HomePage;
