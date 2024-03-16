"use client";

import React, { useState } from "react";
import { countries } from "@/app/data/countries";
import { useRouter } from "next/navigation";

const EditBranchForm = ({ branch }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: branch.name,
    mobile_number: branch.mobile_number,
    address: branch.address,
    city: branch.city,
    state: branch.state,
    country: branch.country,
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    router.push("/branches");
  };
  return (
    <div className="mt-3">
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Branch Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Enter Branch name e.g Shirikat Branch"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="mobile_number" className="form-label">
            Contact Number
          </label>
          <input
            type="text"
            className="form-control"
            id="mobile_number"
            name="mobile_number"
            value={formData.mobile_number}
            placeholder="Enter branch contact number e.g 211 925 360 800"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={formData.address}
            placeholder="Shop No. 5, Shirikat"
            name="address"
            onChange={handleInputChange}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="city" className="form-label">
            City/Town
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={formData.city}
            placeholder="Enter City or Town e.g Juba"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="city" className="form-label">
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="state"
            value={formData.state}
            placeholder="Enter State e.g Central Equatoria"
            onChange={handleInputChange}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <select
            id="country"
            className="form-select"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          >
            {countries.map((cntry, id) => (
              <option value={cntry.name} key={id}>
                {cntry.name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-12 p-2">
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
        <div className="m-2"></div>
      </form>
    </div>
  );
};

export default EditBranchForm;
