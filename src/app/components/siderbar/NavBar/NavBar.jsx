"use client";

import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { links } from "@/app/data/links";
const NavBar = () => {
  return (
    <div className="navbar nav">
      <ul className="nav flex-column">
        {links.map((link, id) => (
          <NavLink item={link} key={id}></NavLink>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
