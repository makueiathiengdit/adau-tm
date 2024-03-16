import React from "react";
import BranchList from "./components/BranchList";
import Link from "next/link";

const BranchesPage = () => {
  return (
    <div className="container">
      <h3>Branch Management Portal</h3>
      <div className="d-flex mt-2">
        <div className="p-2 flex-grow-1">
          <BranchList></BranchList>
        </div>
        <div className="p-2 flex-shrink-1">
          <div>
            <Link href="/branches/new" className="btn btn-primary">
              <i className="bi bi-plus-circle"></i> Create New Branch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchesPage;
