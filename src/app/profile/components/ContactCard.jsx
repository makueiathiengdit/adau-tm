import React from "react";

const ContactCard = ({ email, mobile_number, username }) => {
  return (
    <div>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Username</h5>
          <p className="card-text">@{username}</p>
          <h5 className="card-title">Email</h5>
          <p className="card-text">{email}</p>
          <h5 className="card-title">Mobile Number</h5>
          <p className="card-text">{mobile_number}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
