import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "../style/projects.css";

function SingleProjectDisplay({ project }) {
  return (
    <div>
      <strong>{project.name}</strong>
      <p>{project.description}</p>
      <div className="links">
        <a
          href={project.livePreviewUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Website
        </a>
        {project.repoIfPublicElseNull ? (
          <a
            href={project.repoIfPublicElseNull}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-github"></ion-icon> Project GitHub
          </a>
        ) : null}
      </div>
      <img src={project.screenshotPath} alt={`${project.name} screenshot`} />
    </div>
  );
}

export default function ProjectsDisplay({ projects, className }) {
  return (
    <div className={`projects ${className}`}>
      <span></span>
      {projects.map((project) => {
        return <SingleProjectDisplay project={project} key={uuidv4()} />;
      })}
      <span></span>
    </div>
  );
}
