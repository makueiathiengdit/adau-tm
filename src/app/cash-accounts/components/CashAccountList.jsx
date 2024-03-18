import React from "react";
import { cash_accounts } from "@/app/data/cash-accounts";
import Link from "next/link";
const CashAccountList = () => {
  return (
    <div className="mt-4">
      <table className="table table-hover">
        <caption className="fw-bold">All Cash Accounts</caption>

        <thead>
          <tr className="table-active">
            <th scope="col">S/NO</th>
            <th scope="col">Account Number</th>
            <th scope="col">Account Name</th>
            <th scope="col">Balance</th>
            <th scope="col">Currency</th>
            <th scope="col">Branch</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {cash_accounts.map((account, id) => (
            <tr key={id}>
              <th scope="row">{id + 1}</th>
              <td>{account.account_number}</td>
              <td>{account?.account_name}</td>
              <td>{account.account_balance}</td>
              <td>{account.currency}</td>
              <td>{account.branch}</td>
              <td>{account.status}</td>

              <td>
                <Link
                  href={`/cash-accounts/edit/${account.id}`}
                  className="btn btn-info "
                >
                  Edit
                </Link>
                {"   "}
                <Link
                  href={`/cash-accounts/delete/${account.id}`}
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
  );
};

export default CashAccountList;
