import { RouterProvider, createBrowserRouter } from "react-router";

import RootLayout from "./pages/Root.tsx";
import ErrorPage from "./pages/Error.tsx";
import HomePage from "./pages/Home.tsx";
import AboutPage from "./pages/About.tsx";
import SkillsPage from "./pages/Skills.tsx";
import ProjectsPage, {
  loader as projectsLoader,
} from "./pages/projects/Projects.tsx";
import CreatorPage from "./pages/projects/Creator.tsx";
import ProjectPage, {
  loader as projectLoader,
} from "./pages/projects/Project.tsx";
import ContactPage, { action as contactAction } from "./pages/Contact.tsx";
import LoginPage from "./pages/Login.tsx";
import UpdaterPage, {
  loader as updaterLoader,
} from "./pages/projects/Updater.tsx";

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
      {
        path: "projects/:projectSlug",
        element: <ProjectPage />,
        // TODO
        loader: ({ params }) => projectLoader({ params }),
      },
      { path: "projects/add", element: <CreatorPage /> },
      {
        path: "projects/update/:projectSlug",
        element: <UpdaterPage />,
        // TODO
        loader: ({ params }) => updaterLoader({ params }),
      },
      { path: "contact", element: <ContactPage />, action: contactAction },
      { path: "auth/login", element: <LoginPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
