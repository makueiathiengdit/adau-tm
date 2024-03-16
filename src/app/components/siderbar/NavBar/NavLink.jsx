import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ item }) => {
  const path = usePathname();
  const active = path == item.path;
  return (
    <div
      className={`nav-item card border-0 mt-2 ${
        active ? "bg-primary-subtle" : ""
      }`}
    >
      <li className="nav-link  p-2 hover list-group-item card-body">
        <i className={`bi bi-${item.icon} px-2`}></i>
        <Link href={item.path}>{item.title}</Link>
      </li>
    </div>
  );
};

export default NavLink;
