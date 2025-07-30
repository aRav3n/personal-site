import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "../style/projects.css";

function SingleProjectDisplay({ project }) {
  const [linkClass, setLinkClass] = useState("hidden");
  function handleClick() {
    linkClass !== "hidden" ? setLinkClass("hidden") : setLinkClass("shown");
  }
  return (
    <div
      tabIndex="0"
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
    >
      <img src={project.screenshotPath} alt={`${project.name} screenshot`} />
      <strong>{project.name}</strong>
      <p>{project.description}</p>
      <div className={`links ${linkClass}`}>
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
    </div>
  );
}

export default function ProjectsDisplay({ projects, className }) {
  return (
    <div className={`projects ${className}`}>
      {projects.map((project) => {
        return <SingleProjectDisplay project={project} key={uuidv4()} />;
      })}
    </div>
  );
}
