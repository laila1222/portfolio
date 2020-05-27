import React from "react";
import "./ProjectCard.scss";

function ProjectCard({ imageSrc, codesUrl, url }) {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <img src={imageSrc} alt="project" className="card__img" />
      </div>
      <div className="card__side card__side--back">
      {/* <img src={imageSrc} alt="project image" className="card__img" /> */}
        {/* Layer over image to change color */}
        <div className="card__layer"></div>

        <div className="card__cta u-center-middle u-flex">
          <a href={codesUrl} className="card__link card__link--code u-text-center" target="_blank" rel="noopener noreferrer"> 
            See code
          </a>
          <a href={url} className="card__link card__link--site u-text-center" target="_blank" rel="noopener noreferrer">
            Visit site
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
