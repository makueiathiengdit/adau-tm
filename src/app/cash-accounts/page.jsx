import React from "react";
import CashAccountList from "./components/CashAccountList";
import LinkButton from "../components/Button/LinkButton";

const CashAccountHomePage = () => {
  return (
    <div className="d-flex mt-2">
      <div className="p-2 flex-grow-1">
        <CashAccountList></CashAccountList>
      </div>
      <div className="p-2 flex-shrink-1">
        <LinkButton
          href="/cash-accounts/create"
          title="New Account"
        ></LinkButton>
      </div>
    </div>
  );
};

export default CashAccountHomePage;
