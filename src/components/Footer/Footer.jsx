import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container u-center-middle u-text-center">
        <p className="footer__text">Made by Lilla Kőrösi, 2020 {" "}<FontAwesomeIcon icon={faGithub} className="footer__icon"/>{" "}
        <FontAwesomeIcon icon={faLinkedinIn} className="footer__icon"/></p>
      </div>
    </footer>
  );
}

export default Footer;
