"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
const SignUpPage = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="contianer mt-4 w-50">
        {/* <h1 className="text-center">SignUpPage</h1> */}
        <div className="text-center">
          <Image src="/blue.png" alt="logo" width="75" height="75" />
        </div>
        <div className="card">
          {/* <h5 className="card-header bg-primary text-center text-white">
            Sign Up
          </h5> */}

          <div className="card-body">
            <form className="row g-2">
              <div className="col-md-12">
                <label htmlFor="username" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={state.username}
                  placeholder="Enter username e.g Awet"
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-12">
                <label htmlFor="username" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={state.username}
                  placeholder="Enter username e.g Thon"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={state.username}
                  placeholder="Enter username e.g awetthon"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={state.email}
                  placeholder="Enter email e.g awetthon@adau.com"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="password should be at least 6 characters long"
                  value={state.password}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-12">
                <div className="d-grid gap-2 mt-4">
                  <button className="btn btn-primary" type="button">
                    Sign Up
                  </button>
                </div>
              </div>
              <div className="col-12">
                <div className="d-grid gap-2 mt-4">
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
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
