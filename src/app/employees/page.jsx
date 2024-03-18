"use client";

import React, { Suspense } from "react";

import EmployeeList from "./components/EmployeeList";
import LinkButton from "../components/Button/LinkButton";
const EmployeeHomePage = () => {
  return (
    <div>
      <h3>Employees Page</h3>
      <div className="d-flex mt-2">
        <div className="p-2 flex-grow-1">
          <EmployeeList></EmployeeList>
        </div>
        <div className="p-2 flex-shrink-1">
          <LinkButton
            href="/employees/create"
            title="Add New Employee"
          ></LinkButton>
        </div>
      </div>
    </div>
  );
};

export default EmployeeHomePage;
