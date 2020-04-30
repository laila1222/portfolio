import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <a href="#" className="navbar__link">
        About
      </a>
      <a href="#" className="navbar__link">
        Projects
      </a>
      <a href="#" className="navbar__link">
        Contact
      </a>
    </div>
  );
}

export default Navbar;
