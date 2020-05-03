import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <AnchorLink href="#about" className="navbar__link">
          About
        </AnchorLink>
        <AnchorLink href="#projects" className="navbar__link">
          Projects
        </AnchorLink>
        <AnchorLink href="#contact" className="navbar__link">
          Contact
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
