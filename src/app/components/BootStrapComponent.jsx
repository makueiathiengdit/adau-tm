"use client";
import React, { useEffect } from "react";

const BootStrapComponent = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
};

export default BootStrapComponent;
