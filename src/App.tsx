import {lazy} from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import "./i18n.ts";
const RootLayout = lazy(() => import("./pages/Root.tsx"));
const ErrorPage = lazy(() => import("./pages/Error.tsx"));
const HomePage = lazy(() => import("./pages/Home.tsx"));
const ContactPage = lazy(() => import("./pages/Contact"));
import { contactAction } from "./utils/actions.ts";
import { skillsLoader, projectsLoader } from "./utils/loaders.ts";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, loader: async () => {
        const [skills, projects] = await Promise.all([
          skillsLoader(),
          projectsLoader(),
        ]);
        return { skills, projects };
      }},
      { path: "contact", element: <ContactPage />, action: contactAction },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
};
