import React from "react";
const Loader = () => {
  return (
    <div className="container">
      <div className="text-center">
        <video width="300" height="300" autoPlay loop>
          <source src="/video/adau.mp4"></source>
        </video>
      </div>
    </div>
  );
};

export default Loader;
