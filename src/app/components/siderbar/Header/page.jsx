import React from "react";
import Image from "next/image";
import CurrentDateTime from "./CurrentDateTime";

const Header = () => {
  return (
    <div>
      <nav className="navbar sticky-top bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width="45"
              height="45"
              className="d-inline-block "
              loading="lazy"
            />
            Adau Tranaction Manager
          </a>
          <div>
            <CurrentDateTime></CurrentDateTime>
          </div>
          <div className="rounded border p-2" width="100" height="100">
            <a href="/" className="text-white">
              Awet Thon
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
