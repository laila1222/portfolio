import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container u-center-middle u-text-center">
        <p className="footer__text">
          Made by Lilla Kőrösi, 2020{" "}
          <a href="https://github.com/Laila1222" className="footer__link">
            <FontAwesomeIcon icon={faGithub} className="footer__icon" />{" "}
          </a>{" "}
          <a href="https://www.linkedin.com/in/lilla-korosi/" className="footer__link">
            <FontAwesomeIcon icon={faLinkedinIn} className="footer__icon" />
          </a>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
