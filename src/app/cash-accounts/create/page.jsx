import BaseFormLayout from "@/app/components/Form/BaseFormLayout";
import React from "react";
import CashAccountForm from "../components/CashAccountForm";

const CreateCashAccountPage = () => {
  return (
    <>
      <BaseFormLayout title="New Cash Account Form">
        <CashAccountForm></CashAccountForm>
      </BaseFormLayout>
    </>
  );
};

export default CreateCashAccountPage;
