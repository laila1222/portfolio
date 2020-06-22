import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container u-center-middle u-text-center">
        <p className="footer__text">
          Made by Lilla Kőrösi, 2020{" "}
          <a href="https://github.com/Laila1222" className="footer__link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="footer__icon" />{" "}
          </a>{" "}
          <a href="https://www.linkedin.com/in/lilla-korosi/" className="footer__link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} className="footer__icon" />
          </a>{" "}
          <a href="https://twitter.com/lilla_korosi" className="footer__link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="footer__icon" />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
