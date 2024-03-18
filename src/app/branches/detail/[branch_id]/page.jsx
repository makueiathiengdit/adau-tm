"use client";

import { useParams } from "next/navigation";
import React from "react";

const BranchPage = () => {
  const { id } = useParams();
  return <div>Branch Details Page {id}</div>;
};

export default BranchPage;
