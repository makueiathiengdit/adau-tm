"use client";

import React, { useState } from "react";
import { countries } from "@/app/data/countries";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const EditEmployeeForm = ({ employee }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    first_name: employee.first_name,
    last_name: employee.last_name,
    dob: employee.dob,
    gender: employee.gender,
    email: employee.email,
    mobile_number: employee.mobile_number,
    address_street: employee.address_street,
    address_city: employee.address_city,
    address_state: employee.address_state,
    address_country: "South Sudan",
  });
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    toast.success("Employee detail updated successfully");
    router.push("/employees");
  };
  return (
    <>
      <form className="row g-3 p-1">
        <div className="col-md-6">
          <label htmlFor="first_name" className="form-label text-black fw-bold">
            First Name*
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
          <label htmlFor="last_name" className="form-label text-black fw-bold">
            Last Name*
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
          <label htmlFor="dob" className="form-label text-black fw-bold">
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
          <label htmlFor="gender" className="form-label text-black fw-bold">
            Gender
          </label>
          <select
            id="gender"
            className="form-select"
            name="gender"
            value={formData.gender}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label text-black fw-bold">
            Email*
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
          <label
            htmlFor="mobile_number"
            className="form-label text-black fw-bold"
          >
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
          <label
            htmlFor="address_street"
            className="form-label text-black fw-bold"
          >
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address_street"
            value={formData.address_street}
            placeholder="Enter address_street e.g House No.175, Block C, Gudele"
            onChange={handleInputChange}
          />
        </div>

        <div className="col-md-4">
          <label
            htmlFor="address_city"
            className="form-label text-black fw-bold"
          >
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="address_city"
            name="address_city"
            value={formData.address_city}
            placeholder="e.g Juba "
            onChange={handleInputChange}
          />
        </div>

        <div className="col-md-4">
          <label
            htmlFor="address_state"
            className="form-label text-black fw-bold"
          >
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="address_state"
            name="address_state"
            value={formData.address_state}
            placeholder="Enter address_state e.g Central Equatoria"
            onChange={handleInputChange}
          />
        </div>

        <div className="col-md-4">
          <label
            htmlFor="address_country"
            className="form-label text-black fw-bold"
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
            {countries.map((address_country, id) => (
              <option key={id}>{address_country.name}</option>
            ))}
          </select>
        </div>

        <div className="col-12 p-2">
          <button
            type="submit"
            className="btn btn-primary fw-bold w-100"
            onClick={handleFormSubmit}
          >
            Save Changes
          </button>
        </div>
        <div className="mt-2"></div>
      </form>
    </>
  );
};

export default EditEmployeeForm;
