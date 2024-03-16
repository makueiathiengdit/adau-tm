"use client";

import React, { useState } from "react";
import { countries } from "@/app/data/countries";
const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    gender: "",
    email: "",
    mobile_number: "",
    address: "",
    city: "",
    state: "",
    country: "South Sudan",
  });
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
  };
  return (
    <div className="container mt-3">
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="first_name" className="form-label fw-bold">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            placeholder="Enter first name e.g Awet"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="last_name" className="form-label fw-bold">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            placeholder="Enter last name e.g Thon"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="dob" className="form-label fw-bold">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            id="dob"
            name="dob"
            value={formData.dob}
            placeholder="Date format dd/mm/yyyy e.g 30/03/1960"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="country" className="form-label fw-bold">
            Gender
          </label>
          <select
            id="country"
            className="form-select"
            name="country"
            value={formData.gender}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label fw-bold">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Enter email e.g awetthon@adau.com "
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="mobile_number" className="form-label fw-bold">
            Mobile Number
          </label>
          <input
            type="text"
            className="form-control"
            id="mobile_number"
            name="mobile_number"
            value={formData.mobile_number}
            placeholder="Enter mobile number e.g 211 925 360 800"
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
            value={formData.address}
            placeholder="Enter address e.g House No.175, Block C, Gudele"
            onChange={handleInputChange}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="city" className="form-label fw-bold">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={formData.city}
            placeholder="e.g Juba "
            onChange={handleInputChange}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="state" className="form-label fw-bold">
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="state"
            name="state"
            value={formData.state}
            placeholder="Enter state e.g Central Equatoria"
            onChange={handleInputChange}
          />
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

        <div className="col-12 p-2">
          <button type="submit" className="btn btn-primary w-100">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
