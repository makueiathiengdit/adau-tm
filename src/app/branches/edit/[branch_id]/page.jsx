import React from "react";
import EditBranchForm from "../../components/EditBranchForm";
import { branches } from "@/app/data/branches";
import BaseFormLayout from "@/app/components/Form/BaseFormLayout";
const EditBranchPage = ({ params }) => {
  const branch = branches.filter((b) => b.id == params.id)[0];
  return (
    <BaseFormLayout title="Edit Branch Form">
      <EditBranchForm branch={branch}></EditBranchForm>
    </BaseFormLayout>
  );
};

export default EditBranchPage;
