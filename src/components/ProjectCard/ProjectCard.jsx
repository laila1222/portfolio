import React from "react";
import "./ProjectCard.scss";

function ProjectCard({ imageSrc }) {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <img
          src="/images/weather.jpg"
          alt="project image"
          className="card__img"
        />
      </div>
      <div className="card__side card__side--back">
          <div className="card__cta">
              <a href="#" className="card__link--code">Check out code</a>
              <a href="#" className="card__link--code">Visit site</a>
          </div>
      </div>
    </div>
  );
}

export default ProjectCard;
