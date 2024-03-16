"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// export const metadata = {
//   title: "Login",
//   description: "Login Page",
// };

const LoginPage = () => {
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
      <div className="contianer mt-4 w-25">
        {/* <h1 className="text-center">SignUpPage</h1> */}
        <div className="text-center">
          <Image src="/blue.png" alt="logo" width="75" height="75" />
        </div>
        <div className="card">
          {/* <h5 className="card-header bg-primary text-center text-white">
            Login
          </h5> */}

          <div className="card-body">
            <form className="row g-2">
              <div className="col-md-12">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={state.username}
                  placeholder="Enter username"
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
                  placeholder="Enter your password"
                  value={state.password}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-12">
                <div className="d-grid gap-2 mt-4">
                  <button className="btn btn-primary" type="button">
                    Login
                  </button>
                </div>
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
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
