import { RouterProvider, createBrowserRouter } from "react-router";

import RootLayout from "./pages/Root.tsx";
import ErrorPage from "./pages/Error.tsx"
import HomePage from "./pages/Home.tsx"
import AboutPage from "./pages/About.tsx";
import SkillsPage from "./pages/Skills.tsx";
import ProjectsPage from "./pages/projects/Projects.tsx";
import CreatorPage from "./pages/projects/Creator.tsx";
import ProjectPage from "./pages/projects/Project.tsx";
import ContactPage from "./pages/Contact.tsx";
import LoginPage from "./pages/Login.tsx";
import UpdaterPage from "./pages/projects/Updater.tsx";

import { loader as projectsLoader } from "./pages/projects/Projects.tsx";
import { loader as projectLoader } from "./pages/projects/Project.tsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "skills", element: <SkillsPage /> },
      { path: "projects", element: <ProjectsPage />, loader: projectsLoader },
      // TODO
      { path: "projects/:projectSlug", element: <ProjectPage />, loader: ({params}) => projectLoader({params}) },
      { path: "projects/add", element: <CreatorPage /> },
      { path: "projects/update", element: <UpdaterPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "login", element: <LoginPage /> }
    ]
  },
]);

export default function App() {
  return <RouterProvider router={router} />
}
