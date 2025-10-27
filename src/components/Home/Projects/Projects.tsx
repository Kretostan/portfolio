import { Suspense } from "react";
import { Await, useLoaderData } from "react-router";
import { useTranslation } from "react-i18next";
import ProjectsList from "./ProjectsList.tsx";
import Spinner from "../../UI/Spinner.tsx";

const Projects = () => {
  const { projects } = useLoaderData();
  const { t } = useTranslation();

  return <section id="projects" className="relativepy-14 px-4 py-16 z-1500">
    <h2 className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 lg:gap-6 text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-accent-theme-1 to-accent-theme-2 font-header">{t("projects.title")}</h2>
    <div className="flex flex-wrap justify-center items-center gap-10 pt-18 rounded-xl">
      <Suspense fallback={<Spinner content="projects" />}>
        <Await resolve={projects}>
          {(resolvedProjects) => <ProjectsList data={resolvedProjects} />}
        </Await>
      </Suspense>
    </div>
  </section>;
};

export default Projects;
