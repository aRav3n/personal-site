import { useState } from "react";

import PinnedProjects from "../partials/pinnedProjects";
import "../style/indexPage.css";

export default function IndexPage() {
  return (
    <>
      <div className="header-extension">
        I'm a self-motivated full stack developer with experience in the PERN
        stack (PostgreSQL + PrismaORM, ExpressJS, React, Node.js). I thrive in
        flexible work environments and am seeking a fully remote developer
        position to apply my skills and continue learning. I'm adaptable,
        self-driven, and eager to expand my skillset with new technologies and
        stacks.
      </div>
      <h1>Index page</h1>
      <PinnedProjects />
    </>
  );
}
