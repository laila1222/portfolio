import React, { Component } from 'react'
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import ProjectsData from './projects/Projects.json';

import "./css/style.css";




class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  




  render() {
    console.log(ProjectsData);
    return (
      <div className="App">
      <Navbar />
      <Header />
      <Projects projects={ProjectsData} />
    </div>
    )
  }
}

export default App

