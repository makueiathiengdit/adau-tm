"use client";

import React, { useState } from "react";
import { currencies } from "@/app/data/currencies";
import { branches } from "@/app/data/branches";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const EditCashAccountForm = ({ account }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    account_name: "",
    currency: "",
    description: "",
    branch: "",
    company: "",
  });
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    toast.success("Cash Account updated successfully");
    router.push("/cash-accounts");
  };
  return (
    <>
      <form className="row g-3 p-1">
        <div className="col-md-6">
          <label
            htmlFor="account_name"
            className="form-label text-black fw-bold"
          >
            Account Name*
          </label>
          <input
            type="text"
            className="form-control"
            id="account_name"
            name="account_name"
            value={formData.account_name}
            placeholder="Enter Account name e.g Main Account"
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
        <div className="col-md-12">
          <label
            htmlFor="description"
            className="form-label text-black fw-bold"
          >
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            placeholder="Enter short description"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="branch" className="form-label text-black fw-bold">
            Branch*
          </label>
          <select
            id="branch"
            className="form-select"
            name="branch"
            value={formData.branch}
          >
            {branches.length > 0 &&
              branches.map((branch, id) => (
                <option key={id}>{branch.name}</option>
              ))}
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="company" className="form-label text-black fw-bold">
            Company
          </label>
          <select
            id="company"
            className="form-select"
            name="company"
            value={formData.company}
          >
            <option value="COMPANY_1">COMPANY 1</option>
          </select>
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
        <div className="mt-2"></div>
      </form>
    </>
  );
};

export default EditCashAccountForm;
