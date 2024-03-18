import React from "react";
import Avatar from "./Avatar";

const ProfileCard = ({ profile }) => {
  return (
    <div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-2">
            <Avatar src={profile?.image} width="110" height="110"></Avatar>
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h3 className="card-title fw-bolder">
                {profile.first_name} {profile.last_name}{" "}
                <span className="text-primary fs-5">
                  {profile.is_verified ? (
                    <i className="bi bi-patch-check-fill text-primary"></i>
                  ) : (
                    ""
                  )}
                </span>
              </h3>

              <p className="card-text text-body-secondary fw-bold">
                {profile.role}
              </p>
              <p className="card-text fw-bold">
                <small className="text-body-secondary">
                  Joined {profile.date_created}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
