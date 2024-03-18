import BaseFormLayout from "@/app/components/Form/BaseFormLayout";
import React from "react";
import EditEmployeeForm from "../../components/EditEmployeeForm";
import { employees } from "@/app/data/employees";

const EditEmployeePage = () => {
  return (
    <>
      <BaseFormLayout title="Edit Employee Form">
        <EditEmployeeForm employee={employees[0]}></EditEmployeeForm>
      </BaseFormLayout>
    </>
  );
};

export default EditEmployeePage;
