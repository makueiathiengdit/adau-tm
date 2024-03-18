import React from "react";

const BaseFormLayout = ({ title, children }) => {
  return (
    <div className="container mt-4 w-75">
      <div className="bg-primary-subtle text-center text-black p-2">
        <h3>{title}</h3>
      </div>
      <div className="container mt-3 border rounded p-2">{children}</div>
    </div>
  );
};

export default BaseFormLayout;
