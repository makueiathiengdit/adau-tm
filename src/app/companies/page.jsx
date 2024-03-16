import React from "react";
import CompanyDetail from "./components/CompanyDetail";

// company home page
const CompanyPage = () => {
  const company = {
    name: "Adau Transation Manager",
    description: "For all your transactions",
    date_joint: "15-02-2024",
    logo: "/blue.png",
  };
  return (
    <div className="container">
      <h3>Company Home Page</h3>
      <CompanyDetail company={company}></CompanyDetail>
    </div>
  );
};

export default CompanyPage;
