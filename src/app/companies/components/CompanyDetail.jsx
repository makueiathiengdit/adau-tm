import React from "react";
import Image from "next/image";
const CompanyDetail = ({ company }) => {
  return (
    <div>
      <div className="card mb-3 w-75 border-0 shadow-sm">
        <div className="row g-0 border rounded border-primary-subtle">
          <div className="col-md-2">
            <Image
              src={company.logo}
              className="img-fluid rounded-start"
              alt="company logo"
              width="130"
              height="130"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title fw-bolder">{company.name}</h2>
              <h6 className="card-text">{company.description}</h6>
              <p className="card-text">
                <small className="text-body-secondary">
                  Joined {company.date_joint}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
