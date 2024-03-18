"use client";

import React, { useState } from "react";
import { countries } from "@/app/data/countries";
import { useRouter } from "next/navigation";

const EditBranchForm = ({ branch }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: branch.name,
    mobile_number: branch.mobile_number,
    address_street: branch.address_street,
    address_city: branch.address_city,
    address_state: branch.address_state,
    address_country: branch.address_country,
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    router.push("/branches");
  };
  return (
    <>
      <form className="row g-3 p-1">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label text-black  fw-bold">
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
          <label
            htmlFor="mobile_number"
            className="form-label text-black  fw-bold"
          >
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
          <label
            htmlFor="address_street"
            className="form-label  text-black fw-bold"
          >
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address_street"
            value={formData.address_street}
            placeholder="Shop No. 5, Shirikat"
            name="address_street"
            onChange={handleInputChange}
          />
        </div>

        <div className="col-md-4">
          <label
            htmlFor="address_city"
            className="form-label  text-black fw-bold"
          >
            City/Town
          </label>
          <input
            type="text"
            className="form-control"
            id="address_city"
            name="address_city"
            value={formData.address_city}
            placeholder="Enter address_city or Town e.g Juba"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-4">
          <label
            htmlFor="addrress_state"
            className="form-label text-black  fw-bold"
          >
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="addrress_state"
            name="address_state"
            value={formData.address_state}
            placeholder="Enter State e.g Central Equatoria"
            onChange={handleInputChange}
          />
        </div>

        <div className="col-md-4">
          <label
            htmlFor="address_country"
            className="form-label  text-black fw-bold"
          >
            Country
          </label>
          <select
            id="address_country"
            className="form-select"
            name="address_country"
            value={formData.address_country}
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
              className="btn btn-primary fw-bold"
              type="submit"
              onClick={handleSubmit}
            >
              Save Changes
            </button>
          </div>
        </div>
        <div className="m-1"></div>
      </form>
    </>
  );
};

export default EditBranchForm;
