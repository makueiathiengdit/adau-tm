import React from "react";
import EmployeeForm from "../components/EmployeeForm";
import BaseFormLayout from "@/app/components/Form/BaseFormLayout";

const CreateEmployeePage = () => {
  return (
    <BaseFormLayout title="New Employee Form">
      <EmployeeForm></EmployeeForm>
    </BaseFormLayout>
  );
};

export default CreateEmployeePage;
