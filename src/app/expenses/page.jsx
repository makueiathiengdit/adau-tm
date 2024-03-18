import React from "react";
import ExpenseList from "./components/ExpenseList";
import LinkButton from "../components/Button/LinkButton";

const ExpenseHomePage = () => {
  return (
    <div>
      ExpenseHomePage
      <div className="d-flex mt-2">
        <div className="p-2 flex-grow-1">
          {/* content */}
          <ExpenseList></ExpenseList>
        </div>
        <div className="p-2 flex-shrink-1">
          {/* action buttons */}
          <LinkButton href="/expenses/create" title="New Expense"></LinkButton>
        </div>
      </div>
    </div>
  );
};

export default ExpenseHomePage;
