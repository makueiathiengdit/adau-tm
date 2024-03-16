import React from "react";
import DeleteBranchForm from "../../components/DeleteBranchForm";
import { branches } from "@/app/data/branches";
const DeleteBranchPage = ({ params }) => {
  const branch = branches.filter((b) => b.id == params.id)[0];
  return (
    <div className="container mt-4">
      <DeleteBranchForm branch={branch}></DeleteBranchForm>
    </div>
  );
};

export default DeleteBranchPage;
