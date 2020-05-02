import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

import "./About.scss";

function About() {
  return (
    <section className="section-about about">
      <div className="about__container">
        <h2 className="about__heading secondary-heading u-text-center u-margin-bottom-big">
          About me
        </h2>
        <div className="about__content u-flex">
          <div className="about__text-container ">
            <p className="about__text u-margin-bottom-small">
              I am a webdeveloper living in Copenhagen, Denmark, with high
              motivation for creating beautiful websites for multiple browsers
              and mobile devices.
            </p>
            <p className="about__text u-margin-bottom-small">
              I am passionate about writing code from scratch and continuously
              deepening my knowledge in programming by learning new
              technologies.
            </p>
            <p className="about__text u-margin-bottom-small">
              I could be described as an open and cheerful person who likes
              working in a team, but also enjoys having individual
              responsibilities.
            </p>
          </div>
          <div className="about__features u-flex">
            <div className="feature">
              <FontAwesomeIcon icon={faTools} className="feature__icon " />
              <h3 className="feature__heading tertiary-heading u-text-center">
                Technlogoies I work with
              </h3>
              <div className="feature__list">
                <p className="feature__item">HTML</p>
                <p className="feature__item">CSS</p>
                <p className="feature__item">Sass</p>
                <p className="feature__item">JavaScript</p>
                <p className="feature__item">Node.js</p>
                <p className="feature__item">Reacj.js</p>
                <p className="feature__item">SQL</p>
                <p className="feature__item">Terminal</p>
              </div>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faLaptopCode} className="feature__icon " />
              <h3 className="feature__heading tertiary-heading u-text-center">
              Softwares I use
               
              </h3>
              <div className="feature__list">
                  <p className="feature__item">StoryBook</p>
                  <p className="feature__item">Firebase, Firestore</p>
                  <p className="feature__item">Postman</p>
                  <p className="feature__item">MySQL Workbench</p>
                  <p className="feature__item">Git Bash</p>
                  <p className="feature__item">Github</p>
                  <p className="feature__item">Figma</p>
                  <p className="feature__item">Photoshop</p>
                  <p className="feature__item">Visual Studio Code</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
