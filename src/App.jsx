import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

// Data for projects
import ProjectsData from "./projects/Projects.json";

import "./css/style.css";

class App extends Component {
  changeColor = () => {
    // Nav links
    const nav = document.querySelectorAll(".navbar__link");
    // Nav container
    const navContainer = document.querySelector('.navbar-container');
    // Hamburgermenu
    const hamburgerMenu = document.querySelectorAll(".hamburger span");
    console.log(hamburgerMenu);
    
    window.onscroll = () => {
      if (
        // If user has scrolled down more than 750px from top
        document.body.scrollTop >= 750 ||
        document.documentElement.scrollTop >= 750
      ) {
        // Container appears
        navContainer.style.backgroundColor = "white";
        navContainer.style.borderBottom = "1px solid rgb(110, 41, 51)";
        // Links get new color
        nav.forEach((link) => {
          link.style.color = "rgb(102, 38, 59)";
        });
        // Hamburger gets new color
        hamburgerMenu.forEach((span) => {
          span.style.backgroundColor = "rgb(102, 38, 59)";
        })

      } else {
        // If user scrolls up below 750px from top
        // Nav container is not visible
        navContainer.style.backgroundColor = "transparent";
        navContainer.style.borderBottom = "none";
         // Nav links get back to color white
        nav.forEach((link) => {
          link.style.color = "white";
        });
        // Hamburger menu changes back to color white
        hamburgerMenu.forEach((span) => {
          span.style.backgroundColor = "white";
        })
      }
    };
  };

  componentDidMount() {
    this.changeColor();
  }

  render() {
    console.log(ProjectsData);
    return (
      <div>
        <Navbar />
        <Header />
        <Projects projects={ProjectsData} />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
