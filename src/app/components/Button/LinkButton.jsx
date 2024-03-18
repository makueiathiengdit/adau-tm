"use client";

import Link from "next/link";
import React from "react";

const LinkButton = ({ href, title }) => {
  return (
    <Link href={href} className="btn btn-primary mt-4 fw-bold fs-5">
      <i className="bi bi-plus-circle"></i> {title}
    </Link>
  );
};

export default LinkButton;
