import { v4 as uuidv4 } from "uuid";
import { Globe } from "lucide-react";

import "../style/projects.css";

function SingleProjectDisplay({ project }) {
  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <div className="links">
        {project.livePreviewUrl !== "" ? (
          <a
            href={project.livePreviewUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe />
            Website
          </a>
        ) : null}
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
      {projects.map((project) => {
        return <SingleProjectDisplay project={project} key={uuidv4()} />;
      })}
    </div>
  );
}
