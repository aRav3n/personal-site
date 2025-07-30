import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import FooterComponent from "../partials/footer";
import HeaderComponent from "../partials/header";
import getProjects from "../functions/projectsList";

export default function RootElement() {
  const [pinnedProjects, setPinnedProjects] = useState([]);
  const [otherProjects, setOtherProjects] = useState([]);

  useEffect(() => {
    const { pinnedProjectsArray, otherProjectsArray } = getProjects();
    console.log(otherProjectsArray);

    setPinnedProjects(pinnedProjectsArray);
    setOtherProjects(otherProjectsArray);
  }, []);

  return (
    <>
      <HeaderComponent />
      <main>
        <Outlet
          context={{
            pinnedProjects,
            otherProjects,
          }}
        />
      </main>
      <FooterComponent />
    </>
  );
}
