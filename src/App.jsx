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
    const nav = document.querySelectorAll(".navbar__link");
    const navContainer = document.querySelector('.navbar-container');
    
    // console.log(nav);
    window.onscroll = () => {
      "use strict";
      if (
        document.body.scrollTop >= 750 ||
        document.documentElement.scrollTop >= 750
      ) {
        navContainer.style.backgroundColor = "white";
        navContainer.style.borderBottom = "1px solid rgb(110, 41, 51)";
        nav.forEach((link) => {
          link.style.color = "rgb(102, 38, 59)";
        });
      } else {
        nav.forEach((link) => {
          navContainer.style.backgroundColor = "transparent";
          navContainer.style.borderBottom = "none";
          link.style.color = "white";
        });
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
