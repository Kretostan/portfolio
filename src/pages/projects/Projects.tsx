import { Suspense } from "react";
import { Await, useLoaderData, useNavigate } from "react-router";

import Projects from "../../components/Projects/Projects";
import Title from "../../components/UI/Title";
import Spinner from "../../components/UI/Spinner";
import Button from "../../components/UI/Button.tsx";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import type { RootState } from "../../store/store.ts";

const ProjectsPage = () => {
  const { projects } = useLoaderData();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const auth = useSelector((state: RootState) => state.auth);

  return (
    <>
      <Title>{t("projects.title")}</Title>
      <p className="text-center">{t("projects.subtitle")}</p>
      <div className="flex flex-col justify-center items-center gap-6">
        {auth.token && auth.role === "admin" && (
          <Button onClick={() => navigate("/projects/add")}>Add</Button>
        )}
        <Suspense fallback={<Spinner />}>
          <Await resolve={projects}>
            {(resolvedProjects) => <Projects data={resolvedProjects} />}
          </Await>
        </Suspense>
      </div>
    </>
  );
};

export default ProjectsPage;

const loadProjects = async () => {
  const response: Response = await fetch(
    import.meta.env.VITE_API_URL + "/projects",
  );
  if (!response.ok) {
    throw new Response("Failed to load projects");
  }
  return await response.json();
};

export const loader = () => {
  return {
    projects: loadProjects(),
  };
};
