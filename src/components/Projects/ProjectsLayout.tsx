import { Suspense } from "react";
import { Await, useLoaderData } from "react-router";
import { useTranslation } from "react-i18next";
import Projects from "../../components/Projects/Projects";

import Spinner from "../../components/UI/Spinner";

const ProjectsLayout = () => {
  const { projects } = useLoaderData();
  const { t } = useTranslation();

  return (
    <section id="projects" className="pt-18">
      <h3 className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 lg:gap-6 text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-accent-theme-1 to-accent-theme-2 font-header">{t("projects.title")}</h3>
      <div className="flex flex-col justify-center items-center gap-6 pt-8">
        <Suspense fallback={<Spinner />}>
          <Await resolve={projects}>
            {(resolvedProjects) => <Projects data={resolvedProjects} />}
          </Await>
        </Suspense>
      </div>
    </section>
  );
};

export default ProjectsLayout;
