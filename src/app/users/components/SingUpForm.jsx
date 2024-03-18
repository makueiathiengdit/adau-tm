"use client";
import React, { useState } from "react";
import Link from "next/link";
const SingUpForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
  };
  return (
    <div className="mt-4 mx-2">
      <form className="row g-3">
        <div className="col-md-12">
          <label htmlFor="first_name" className="form-label fw-bold">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            placeholder="Enter First Name e.g Awet"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="last_name" className="form-label fw-bold">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            placeholder="Enter Last name  e.g Thon"
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
            placeholder="Enter email e.g awetthon@gmail.com"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="username" className="form-label fw-bold">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            placeholder="Create username e.g awetthon"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="password" className="form-label fw-bold">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            placeholder="Password should be at least characters long"
            onChange={handleInputChange}
          />
        </div>

        <div className="col-12 p-2">
          <button type="submit" className="btn btn-primary w-100">
            Create Account
          </button>
        </div>
        <div className="col-12">
          <div className="d-grid gap-2 mt-2">
            <p>
              Already have an account?{" "}
              <Link href="/users/login" className="text-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SingUpForm;
