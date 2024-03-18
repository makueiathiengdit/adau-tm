import React from "react";
import CompanyDetail from "./components/CompanyDetail";
import Link from "next/link";

// company home page
const CompanyHomePage = () => {
  const company = {
    name: "Adau Transation Manager",
    description: "For all your transactions",
    date_joint: "15-02-2024",
    logo: "/adau/3.png",
  };
  return (
    <div className="container">
      <h3>Company Home Page</h3>
      <CompanyDetail company={company}></CompanyDetail>
      <Link href="/companies/create" className="btn btn-primary fw-bold fs-3">
        <i className="bi bi-plus-circle"></i> Create New Company
      </Link>
    </div>
  );
};

export default CompanyHomePage;
