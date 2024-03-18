"use client";
import React, { Suspense } from "react";
import BranchList from "./components/BranchList";
import Link from "next/link";
import LinkButton from "../components/Button/LinkButton";

const BranchHomePage = () => {
  return (
    <div className="container">
      <h3>Branch Management Portal</h3>
      <div className="d-flex mt-2">
        <div className="p-2 flex-grow-1">
          <Suspense fallback=<h5>Loading branches...</h5>>
            <BranchList></BranchList>
          </Suspense>
        </div>
        <div className="p-2 flex-shrink-1">
          <LinkButton
            href="/branches/create"
            title="Add New Branch"
          ></LinkButton>
        </div>
      </div>
    </div>
  );
};

export default BranchHomePage;
