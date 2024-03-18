import React from "react";
import EditCompanyForm from "../../components/EditCompanyForm";
import BaseFormLayout from "@/app/components/Form/BaseFormLayout";

const EditCompanyPage = () => {
  return (
    <BaseFormLayout title="Edit Company Form">
      <EditCompanyForm></EditCompanyForm>
    </BaseFormLayout>
  );
};

export default EditCompanyPage;
