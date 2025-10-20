import {lazy} from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import "./i18n.ts";
const RootLayout = lazy(() => import("./pages/Root.tsx"));
const ErrorPage = lazy(() => import("./pages/Error.tsx"));
const HomePage = lazy(() => import("./pages/Home.tsx"));
const ContactPage = lazy(() => import("./pages/Contact"));

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, loader: async () => {
        const { skillsLoader, projectsLoader } = await import("./utils/loaders.ts");
        const skills = skillsLoader();
        const projects = projectsLoader();
        return { skills, projects };
      }},
      { path: "contact", element: <ContactPage />, action: async (args) => {
          const { contactAction } = await import("./utils/actions.ts");
          return contactAction(args);
        }, },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
};
