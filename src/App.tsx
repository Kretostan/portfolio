import { RouterProvider, createBrowserRouter } from "react-router";
import "./i18n.ts";
import RootLayout from "./pages/Root.tsx";
import ErrorPage from "./pages/Error.tsx";
import HomePage from "./pages/Home.tsx";
import ContactPage, { action as contactAction } from "./pages/Contact.tsx";
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
