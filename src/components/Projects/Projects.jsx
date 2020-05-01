import React from "react";
import "./Projects.scss";
import Project from "../ProjectDisplay/Project";

function Projects({ projects }) {
  console.log(projects);
  return (
    <section className="section-projects projects">
      <h3 className="secondary-heading projects__heading u-margin-bottom-big u-text-center">
        Projects
      </h3>
      {projects.map((project) => {
        return (
          <Project name={project.name} technologies={project.technologies} key={project.id} imageSrc={project.image} />
        );
      })}
    </section>
  );
}

export default Projects;
