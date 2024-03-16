import React from "react";
import EditBranchForm from "../../components/EditBranchForm";
import { branches } from "@/app/data/branches";
const EditBranchPage = ({ params }) => {
  const branch = branches.filter((b) => b.id == params.id)[0];
  return (
    <div>
      Editing Branch with id: {params.id}
      <EditBranchForm branch={branch}></EditBranchForm>
    </div>
  );
};

export default EditBranchPage;
