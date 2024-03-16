"use client";
import React, { useState } from "react";
import { countries } from "@/app/data/countries";
import { useRouter } from "next/navigation";

const EditCompanyForm = ({ company }) => {
  const [formData, setFormDate] = useState({
    name: company?.name,
    description: company?.description,
    mobile_number: company?.mobile_number,
    email: company?.email,
    address: company?.address,
    city: company?.city,
    state: company?.state,
    country: company?.company,
  });
  const router = useRouter();
  const handleInputChange = (event) => {
    setFormDate({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    router.push("/companies");
  };
  return (
    <div className="container mt-4 d-flex shadow-sm ">
      <div className="p-2 flex-grow-1 ">
        <form className="row g-3">
          <div className="col-md-12">
            <label htmlFor="name" className="form-label fw-bold">
              Company Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Enter your company name"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="description" className="form-label fw-bold">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              placeholder="Enter Company decription/motto e.g Simple, Fast and Reliable"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="MobileNumber" className="form-label fw-bold">
              Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              id="MobileNumber"
              name="mobile_number"
              value={formData.mobile_number}
              placeholder="Enter Company mobile number e.g 211 925 360 800"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="email" className="form-label fw-bold">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter e.g adau@adau.com"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="address" className="form-label fw-bold">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              placeholder="Company main address e.g Shop No.5 Shirikat"
              onChange={handleInputChange}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="city" className="form-label fw-bold">
              City/Town
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              value={formData.city}
              placeholder="Enter city/town e.g Juba"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="state" className="form-label fw-bold">
              State
            </label>
            <input
              type="text"
              id="state"
              className="form-control"
              name="state"
              value={formData.state}
              placeholder="Enter State e.g Central Equatoria"
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="col-md-4">
            <label htmlFor="country" className="form-label fw-bold">
              country
            </label>
            <select
              id="country"
              className="form-select"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            >
              {countries.map((country, id) => (
                <option key={id}>{country.name}</option>
              ))}
            </select>
          </div>

          <div className="col-12">
            <div className="mb-3">
              <label for="logo" className="form-label fw-bold">
                Company Logo
              </label>
              <input className="form-control" type="file" id="logo" />
            </div>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary w-100"
              onClick={handleFormSubmit}
            >
              Save Changes
            </button>
          </div>
          <div className="mt-2"></div>
        </form>
      </div>
    </div>
  );
};

export default EditCompanyForm;
