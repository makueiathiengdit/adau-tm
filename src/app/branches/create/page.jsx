import React from "react";
import BranchForm from "../components/BranchForm";
import BaseFormLayout from "@/app/components/Form/BaseFormLayout";

const CreateBranchPage = () => {
  return (
    <BaseFormLayout title="New Branch Form">
      <BranchForm></BranchForm>
    </BaseFormLayout>
  );
};

export default CreateBranchPage;
