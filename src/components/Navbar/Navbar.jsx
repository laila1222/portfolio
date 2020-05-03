import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HamburgerMenu from "react-hamburger-menu";

import "./Navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.navPhoneRef = React.createRef();

    this.state = {
      open: false,
    };
  }

  menuClicked = () => {
    console.log("clicked");
    const navPhone = this.navPhoneRef.current;
    // console.log(nav);
    if (!this.state.open) {
      this.setState({ open: !this.state.open }, () => {
        navPhone.style.display = "block";
      });
    } else {
      this.setState({ open: !this.state.open }, () => {
        navPhone.style.display = "none";
      });
    }
    

  
  };

  closeNav = () => {
    this.menuClicked();
  }

  render() {
    return (
      <React.Fragment>
        <div className="navbar-container" >
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
          <div className="navbar-phone" ref={this.navPhoneRef}>
            <div className="navbar-phone__layer" onClick={()=> this.closeNav()}></div>
            <div className="navbar-phone__link-container u-center-middle">
              <AnchorLink href="#about" className="navbar-phone__link" onClick={() => this.closeNav()}>
                About
              </AnchorLink>
              <AnchorLink href="#projects" className="navbar-phone__link" onClick={() => this.closeNav()}>
                Projects
              </AnchorLink>
              <AnchorLink href="#contact" className="navbar-phone__link" onClick={() => this.closeNav()}>
                Contact
              </AnchorLink>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
