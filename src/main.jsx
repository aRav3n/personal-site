import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style/index.css";

import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import ErrorPage from "./pages/error";
import IndexPage from "./pages";
import ProjectsPage from "./pages/projects";
import RootElement from "./pages/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <IndexPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
