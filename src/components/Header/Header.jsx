import React from "react";
import './Header.scss';

function Header() {
  return (
    <section className="section-header">
      <div className="header">
        <h1 className="header__primary-heading">Hi, I am Lilla</h1>
        <h2 className="header__secondary-heading">
          A Copenhagen based front end developer with passion in creating
          dynamic websites providing clean and responsive code with
          user-friendly experience.
        </h2>
        <a href="#" className="header__button">View my work</a>
      </div>
    </section>
  );
}

export default Header;
