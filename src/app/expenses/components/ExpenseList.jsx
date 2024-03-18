import React from "react";
import Link from "next/link";
import { expenses } from "@/app/data/expenses";
const ExpenseList = () => {
  return (
    <>
      <div className="mt-4">
        <table className="table table-hover">
          <caption>All Expenses</caption>
          <thead>
            <tr className="table-active">
              <th scope="col">S/NO</th>
              <th scope="col">Date</th>
              <th scope="col">Item</th>
              <th scope="col">Quantity</th>
              <th scope="col">Amount</th>
              <th scope="col">Currency</th>
              <th scope="col">Account Type</th>
              <th scope="col">Account Number</th>
              <th scope="col">Employee</th>
              <th scope="col">Branch</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {expenses.map((expense, id) => (
              <tr key={id}>
                <th scope="row">{id + 1}</th>
                <td>{expense.date_created}</td>
                <td>{expense.item}</td>
                <td>{expense.quantity}</td>

                <td>{expense.amount}</td>
                <td>{expense.currency}</td>
                <td>{expense.account_type}</td>
                <td>{expense.account_number}</td>
                <td>{expense.employee}</td>
                <td>{expense.branch}</td>

                <td>
                  <Link
                    href={`/expenses/edit/${expense.id}`}
                    className="btn btn-info "
                  >
                    Edit
                  </Link>
                  {"   "}
                  <Link
                    href={`/expenses/delete/${expense.id}`}
                    className="btn btn-danger"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ExpenseList;
