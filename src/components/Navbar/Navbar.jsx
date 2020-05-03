import React, { Component } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import HamburgerMenu from 'react-hamburger-menu';

import "./Navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  menuClicked = () => {
    console.log('clicked');
}

  render() {
    return (
      <React.Fragment>
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
    <div>
    <HamburgerMenu
      isOpen={this.state.open}
      menuClicked={() => this.menuClicked()}
      width={26}
      height={20}
      strokeWidth={2}
      rotate={0}
      color="white"
      borderRadius={0}
      animationDuration={0.5}
      className="hamburger"
    />
  </div>
  </React.Fragment>
    )
  }
}

export default Navbar

