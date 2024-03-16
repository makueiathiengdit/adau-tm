import React from "react";

const DeleteBranchForm = ({ branch }) => {
  return (
    <div className="text-center">
      <div className="card border-0 bg-danger-subtle mb-3">
        <div className="card-header">
          <h3 className="card-title">Warning </h3>
        </div>
        <div className="card-body  text-center ">
          <h3 className="card-text">
            Are you sure you want to delete branch # {branch.name}
          </h3>
        </div>

        <div className="p-2">
          <button type="button" className="btn btn-primary mx-3">
            Cancel
          </button>
          <button type="button" className="btn btn-danger">
            Yes Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBranchForm;
