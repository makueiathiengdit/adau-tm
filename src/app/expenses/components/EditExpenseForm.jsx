"use client";

import React, { useState } from "react";
import { currencies } from "@/app/data/currencies";
import { cash_accounts } from "@/app/data/cash-accounts";
import { mobile_money_accounts } from "./mobile-money-accounts";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const EditExpenseForm = ({ expense }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    item: expense.item,
    quantity: expense.quantity,
    amount: expense.amount,
    currency: expense.currency,
    account_type: expense.account_type,
    account_number: expense.account_number,
    remarks: expense.remarks,
    employee: expense.employee,
    branch: expense.branch,
    company: expense.company,
  });
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    toast.success("Expense updated successfully");
    router.push("/expenses");
  };
  return (
    <>
      <form className="row g-3 p-1">
        <div className="col-md-6">
          <label htmlFor="item" className="form-label text-black fw-bold">
            Item*
          </label>
          <input
            type="text"
            className="form-control"
            id="item"
            name="item"
            value={formData.item}
            placeholder="Enter item name e.g Lunch"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="quantity" className="form-label text-black fw-bold">
            Quantity*
          </label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            placeholder="Enter quantity e.g 1"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="amount" className="form-label text-black fw-bold">
            Amount*
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={formData.amount}
            placeholder="Enter item cost e.g 2500"
            onChange={handleInputChange}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="currency" className="form-label text-black fw-bold">
            Currency*
          </label>
          <select
            id="currency"
            className="form-select"
            name="currency"
            value={formData.currency}
          >
            {currencies.length > 0 &&
              currencies.map((currency, id) => (
                <option key={id}>{currency.name}</option>
              ))}
          </select>
        </div>
        <div className="col-md-6">
          <label
            htmlFor="account_type"
            className="form-label text-black fw-bold"
          >
            Account Type*
          </label>
          <select
            id="account_type"
            className="form-select"
            name="account_type"
            value={formData.account_type}
          >
            <option value="CASH">CASH</option>
            <option value="MOBILE_MONEY">MOBILE MONEY</option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="currency" className="form-label text-black fw-bold">
            Account Number*
          </label>
          <select
            id="currency"
            className="form-select"
            name="currency"
            value={formData.currency}
            onChange={handleInputChange}
          >
            {formData.account_type == "CASH"
              ? cash_accounts.map((account, id) => (
                  <option key={id}>{account.name}</option>
                ))
              : mobile_money_accounts.map((account, id) => (
                  <option key={id}>{account.name}</option>
                ))}
          </select>
        </div>
        <div className="col-md-12">
          <label htmlFor="remarks" className="form-label text-black fw-bold">
            Remarks
          </label>
          <input
            type="text"
            className="form-control"
            id="remarks"
            name="remarks"
            value={formData.remarks}
            placeholder="E.g lunch"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12 p-2">
          <button
            type="submit"
            className="btn btn-primary w-100 fw-bolder"
            onClick={handleFormSubmit}
          >
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
};

export default EditExpenseForm;
