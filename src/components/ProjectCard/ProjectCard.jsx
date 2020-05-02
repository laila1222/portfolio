import React from "react";
import "./ProjectCard.scss";

function ProjectCard({ imageSrc }) {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <img src={imageSrc} alt="project image" className="card__img" />
      </div>
      <div className="card__side card__side--back">
      {/* <img src={imageSrc} alt="project image" className="card__img" /> */}
        {/* Layer over image to change color */}
        <div className="card__layer"></div>

        <div className="card__cta u-center-middle u-flex">
          <a href="#" className="card__link card__link--code u-text-center">
            Check out code
          </a>
          <a href="#" className="card__link card__link--site u-text-center">
            Visit site
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
