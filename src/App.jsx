import React, { Component } from 'react'
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Contact from './components/Contact/Contact';
import About from './components/About/About';

// Data for projects
import ProjectsData from './projects/Projects.json';

import "./css/style.css";




class App extends Component {

  
  changeColor = () => {
    const nav = document.querySelectorAll(".navbar__link");
    console.log(nav);
    window.onscroll = () => {
      "use strict";
      if (document.body.scrollTop >= 900 || document.documentElement.scrollTop >= 900) {
        nav.forEach(link => link.style.color = "rgb(102, 38, 59)")
        
        
      }
      else {
        nav.forEach(link => link.style.color = "white")
      }
    }
  }


  componentDidMount() {
    this.changeColor();
  }
  




  render() {

    
    console.log(ProjectsData);
    return (
      <div className="App">
      <Navbar />
      <Header />
      <Projects projects={ProjectsData} />
      <About />
      <Contact />
    </div>
    )
  }
}

export default App

