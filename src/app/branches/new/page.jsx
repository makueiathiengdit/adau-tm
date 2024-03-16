import React from "react";
import BranchForm from "../components/BranchForm";

const CreateBranchPage = () => {
  return (
    <div className="mt-4">
      <h4 className="text-center">New Branch Form</h4>
      <div className="container w-75 border rounded">
        <BranchForm></BranchForm>
      </div>
    </div>
  );
};

export default CreateBranchPage;
