import React from "react";
import EditExpenseForm from "../../components/EditExpenseForm";
import BaseFormLayout from "@/app/components/Form/BaseFormLayout";

const EditExpensePage = () => {
  const expense = {
    item: "Lunch",
    quantity: 2,
    amount: 2500,
    currency: "SSP",
    account_type: "CASH",
    account_number: "Cash Account 1",
    remarks: "Lunch",
    employee: "Awet Thon",
    branch: "Juba Branch",
    company: "Adau TM",
    date_created: "18-03-2024",
  };
  return (
    <BaseFormLayout title="Edit Expense Form">
      <EditExpenseForm expense={expense}></EditExpenseForm>
    </BaseFormLayout>
  );
};

export default EditExpensePage;
