import React from "react";

const UsersSkeleton = () => {
  return (
    <div className="container text-center mt-4">
      <div className="spinner-border text-center text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <h6>Loading...</h6>
    </div>
  );
};

export default UsersSkeleton;
