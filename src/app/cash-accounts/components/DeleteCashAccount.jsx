"use client";

import DeleteItemForm from "@/app/components/Delete/DeleteItemForm";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
const DeleteCashAccount = () => {
  const router = useRouter();
  const item = {
    id: 1,
    name: "Cash Account One",
  };

  const handleDelete = (event) => {
    toast.success("Cash Account deleted successfully");
    router.push("/cash-accounts");
  };

  const handleCancel = (event) => {
    toast("Operation cancelled");
    router.push("/cash-accounts");
  };
  return (
    <div>
      <DeleteItemForm
        item={item.name}
        onCancel={handleCancel}
        onDelete={handleDelete}
      ></DeleteItemForm>
    </div>
  );
};

export default DeleteCashAccount;
