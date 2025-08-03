import { use, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import ProjectsDisplay from "../partials/projectListDisplay";
import "../style/indexPage.css";
import "../style/projects.css";

export default function IndexPage() {
  const { pinnedProjects } = useOutletContext();
  const navigate = useNavigate();

  return (
    <>
      <div className="header-extension">
        <p>
          I'm a self-motivated full stack developer with experience in the PERN
          stack (PostgreSQL + PrismaORM, ExpressJS, React, Node.js). I thrive in
          flexible work environments and am interested in applying my skills
          while continuing to learn even more about the world of web
          development. I'm adaptable, self-driven, and eager to expand my skill
          set with new technologies and stacks.
        </p>
      </div>
      <h1>Some of my past projects</h1>
      <ProjectsDisplay projects={pinnedProjects} className="highlights" />
      <button
        type="button"
        onClick={() => {
          navigate("/projects");
        }}
      >
        See more projects
      </button>
    </>
  );
}
