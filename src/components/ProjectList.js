import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projEls = projects.map(el => {
    return <ProjectItem key={el.id} name={el.name} about={el.about} technologies={el.technologies} />
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projEls}
      </div>
    </div>
  );
}

export default ProjectList;
