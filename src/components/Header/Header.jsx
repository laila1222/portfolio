import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './Header.scss';

function Header() {
  return (
    <section className="section-header">
      <div className="header u-center-middle">
        <h1 className="header__primary-heading primary-heading">Hi, I am Lilla</h1>
        <h2 className="header__secondary-heading secondary-heading u-margin-bottom-small">
          A Copenhagen based front end developer with passion in creating
          dynamic websites providing clean and responsive code with
          user-friendly experience.
        </h2>
        <AnchorLink href="#projects" className="header__button ">View my work</AnchorLink>
      </div>
    </section>
  );
}

export default Header;
