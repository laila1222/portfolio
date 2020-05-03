import React from "react";
import Technologies from "../Technologies/Technologies";
import ProjectCard from "../ProjectCard/ProjectCard";

import "./Project.scss";

function Project({ name, technologies, imageSrc, codesUrl, url }) {
  return (
    <div className="project u-flex u-margin-bottom-bigger">
      <div className="project__text-container">
        <div className="project__text-container--inner u-center-middle">
          <h3 className="project__title tertiary-heading u-text-center ">
            {name}
          </h3>
          <div className="project__technologies u-text-center">
            {technologies.map((tech) => {
              console.log(tech);
              return <Technologies technologyName={tech} />;
            })}
          </div>
        </div>
      </div>

      <div className="project__card">
        <ProjectCard imageSrc={imageSrc} codesUrl={codesUrl} url={url} />
      </div>
    </div>
  );
}

export default Project;
