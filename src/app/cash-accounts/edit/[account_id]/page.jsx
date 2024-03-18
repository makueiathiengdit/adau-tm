import BaseFormLayout from "@/app/components/Form/BaseFormLayout";
import React from "react";
import EditCashAccountForm from "../../components/EditCashAccountForm";

const EditCashAccountPage = () => {
  return (
    <div>
      <BaseFormLayout title="Edit Cash Account Form">
        <EditCashAccountForm></EditCashAccountForm>
      </BaseFormLayout>
    </div>
  );
};

export default EditCashAccountPage;
