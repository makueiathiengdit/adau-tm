import React from "react";
const DeleteItemForm = ({ item, onDelete, onCancel }) => {
  return (
    <div className="container w-75">
      <div className="text-center">
        <div className="card border bg-primary-subtle mb-3">
          <div className="card-header bg-danger">
            <h3 className="card-title text-white">
              {" "}
              <i className="bi bi-exclamation-circle"> </i>Warning{" "}
            </h3>
          </div>
          <div className="card-body text-center ">
            <h3 className="card-text">
              Are you sure you want to delete #{" "}
              <span className="text-danger">{item}</span>
            </h3>
          </div>

          <div className="p-2">
            <button
              type="button"
              className="btn btn-primary mx-3"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button type="button" className="btn btn-danger" onClick={onDelete}>
              Yes Delete
            </button>
          </div>
          <div className="mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default DeleteItemForm;
