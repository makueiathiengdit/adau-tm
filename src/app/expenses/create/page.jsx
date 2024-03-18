import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import BaseFormLayout from "@/app/components/Form/BaseFormLayout";

const CreateExpensePage = () => {
  return (
    <BaseFormLayout title="New Expense Form">
      <ExpenseForm></ExpenseForm>
    </BaseFormLayout>
  );
};

export default CreateExpensePage;
