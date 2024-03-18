"use client";

import React, { useState } from "react";
import Link from "next/link";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "EMPLOYEE",
  });
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
  };
  return (
    <div className="mt-4 mx-2">
      <form className="row g-3 border rounded">
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
            placeholder="Enter username e.g awetthon"
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
            placeholder="Enter password e.g awetthon"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="role" className="form-label fw-bold">
            Role
          </label>
          <select
            id="role"
            className="form-select"
            name="role"
            value={formData.role}
          >
            <option value="EMPLOYEE">EMPLOYEE</option>
            <option value="BRANCH_MANAGER">BRANCH MANAGER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>

        <div className="col-12 p-2">
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </div>
        <div className="col-12">
          <div className="d-grid gap-2 mt-2">
            <p>
              Don't have an account?{" "}
              <Link href="/users/signup" className="text-primary">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
