import React from "react";

const AdauLogo = ({ backgroundColor, foregroundColor }) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem",
      }}
    >
      <div style={{ color: foregroundColor }}>
        <canvas
          width="100"
          height="100"
          style={{ border: "none", borderRadius: "50" }}
        />
        <div style={{ fontFamily: "Canvas Sans" }}>ADAU</div>
      </div>
    </div>
  );
};

export default AdauLogo;
