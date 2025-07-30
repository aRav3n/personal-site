import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import ProjectsDisplay from "../partials/projectListDisplay";

export default function ProjectsPage() {
  const { pinnedProjects, otherProjects } = useOutletContext();

  return (
    <>
      <h1>My Projects</h1>
      <ProjectsDisplay projects={pinnedProjects} className="" />
      <ProjectsDisplay projects={otherProjects} className="" />
    </>
  );
}
