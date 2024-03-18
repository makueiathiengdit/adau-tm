"use client";

import DeleteItemForm from "@/app/components/Delete/DeleteItemForm";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteExpenseForm = ({ id }) => {
  const router = useRouter();
  const item = {
    id: 1,
    name: "Expense 1",
  };
  const handleDelete = (event) => {
    router.push("/expenses");
  };
  const handdleCancel = (event) => {
    router.push("/expenses");
  };
  return (
    <div className="mt-4">
      <DeleteItemForm
        item={item.name}
        onDelete={handleDelete}
        onCancel={handdleCancel}
      ></DeleteItemForm>
    </div>
  );
};

export default DeleteExpenseForm;
