import React from "react";
import CompanyForm from "../components/CompanyForm";
import BaseFormLayout from "@/app/components/Form/BaseFormLayout";

const CreateCompanyPage = () => {
  return (
    <BaseFormLayout title="New Company Form">
      <CompanyForm></CompanyForm>
    </BaseFormLayout>
  );
};

export default CreateCompanyPage;
