import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

import "./About.scss";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      featureOpen: false,
    };
  }

  arrowClicked = () => {
    if (!this.state.featureOpen) {
      this.setState({ featureOpen: true }, () => {});
    }
  };

  render() {
    return (
      <section className="section-about about" id="about">
        <div className="about__container">
          <h2 className="about__heading secondary-heading u-text-center u-margin-bottom-medium">
            About me
          </h2>
          <div className="about__content u-flex">
            <div className="about__text-container ">
              {/* <p className="about__text u-margin-bottom-small">
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
              </p> */}

              <div className="about--text-container">
                <div className="about__text--col about__text--col--1">
                  <h3 className="about__text__title tertiary-heading">Story</h3>

                  <p className="about__text">
                    I entered the coding world in the beginning of 2019, when I
                    was accepted to {" "}
                    <a
                      href="https://www.hackyourfuture.dk/"
                      className="about__text__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hack Your Future
                    </a>{" "}
                    coding school. I have never before enjoyed learning and
                    being focused so much, as I did in the following 8 months. I
                    learnt new programming concepts languages, tehcnologies
                    every week, and created projects from schratch.
                  </p>
                  <p className="about__text u-margin-bottom-small">
                    {" "}
                    After graduation I did an internship as a front end
                    developer. Since then I have been learning and
                    improving my skills on my own along with different smaller
                    courses, and have been developing smaller projects.
                  </p>
                </div>

                <div className="about__text--col">
                  <h3
                    className="about__text__title tertiary-heading
"
                  >
                    Objectives
                  </h3>
                  <p className="about__text ">
                    I consider myself a front end developer with an interest in
                    UX and UI design, however I also have backend knowledge and
                    experience.
                    <p className="about__text">
                      This year I am determined to get many more project under
                      my belt that I can show off, and I would also love to find
                      a position as a web developer.{" "}
                    </p>
                    <p className="about__text u-margin-bottom-small">
                      As I am participating in the{" "}
                      <a
                        href="https://www.100daysofcode.com/"
                        className="about__text__link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        #100DaysOfCode challenge
                      </a>
                      , I am committed to code every day for 100 days, and post
                      about my progress on{" "}
                      <a
                        href="https://twitter.com/lilla_korosi"
                        className="about__text__link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter
                      </a>
                      .
                    </p>
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="about__image-container">
              <img src={PlaceHolder} alt="lilla" className="about__image" />
            </div> */}
          </div>
          <div className="about__features u-flex">
            <div className="feature feature--tech">
              <h3 className="feature__heading tertiary-heading">
                <FontAwesomeIcon icon={faTools} className="feature__icon" />
                Technlogoies I work with
                {/* <FontAwesomeIcon
                  icon={faArrowDown}
                  className="feature__arrow "
                /> */}
              </h3>

              <div className="feature__list feature__list--tech">
                <p className="feature__item">HTML</p>
                <p className="feature__item">CSS</p>
                <p className="feature__item">Sass</p>
                <p className="feature__item">Bootstrap</p>
                <p className="feature__item">JavaScript</p>
                <p className="feature__item">NodeJs</p>
                <p className="feature__item">ReactJs</p>
                <p className="feature__item">SQL</p>
                <p className="feature__item">KnexJs</p>
                <p className="feature__item">Terminal</p>
              </div>
            </div>
            <div className="feature feature--soft">
              <h3 className="feature__heading tertiary-heading">
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  className="feature__icon "
                />
                Softwares I use
                {/* <FontAwesomeIcon
                  icon={faArrowDown}
                  className="feature__arrow "
                /> */}
              </h3>

              <div className="feature__list feature__list--soft">
                <p className="feature__item">StoryBook</p>
                <p className="feature__item">Firebase, Firestore</p>
                <p className="feature__item">Postman</p>
                <p className="feature__item">MySQL Workbench</p>
                <p className="feature__item">Swagger</p>
                <p className="feature__item">Git Bash</p>
                <p className="feature__item">Github</p>
                <p className="feature__item">Figma</p>
                <p className="feature__item">Photoshop</p>
                <p className="feature__item">Visual Studio Code</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
