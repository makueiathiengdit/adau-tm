import React from "react";
import EmployeeForm from "../components/EmployeeForm";

const CreateEmployeePage = () => {
  return (
    <div className="container mt-4">
      <div className="bg-primary-subtle rounded p-1">
        <h3 className="text-center ">New Employee Form </h3>
      </div>
      <EmployeeForm></EmployeeForm>
    </div>
  );
};

export default CreateEmployeePage;
