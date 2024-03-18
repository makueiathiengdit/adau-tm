import React from "react";

const AddressCard = ({ address_street, address_city, address_state }) => {
  return (
    <div>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Address</h5>
          <p className="card-text">{address_street}</p>
          <h5 className="card-title">City</h5>
          <p className="card-text">{address_city}</p>
          <h5 className="card-title">State</h5>
          <p className="card-text">{address_state}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
