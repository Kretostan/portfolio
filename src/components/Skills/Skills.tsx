import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Await, useLoaderData } from "react-router";

import Spinner from "../UI/Spinner.tsx";
import SkillsContainer from "../Skills/SkillsContainer.tsx";

const Skills = () => {
  const { skills } = useLoaderData();
  const { t } = useTranslation();

  return (
    <section id="skills" className="flex flex-col justify-center items-center gap-6 py-24 w-full bg-bg-theme-2">
      <h3 className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 lg:gap-6 text-4xl font-black font-header text-transparent bg-clip-text bg-linear-to-r from-accent-theme-1 to-accent-theme-2">{t("skills.title")}</h3>
      <div className="flex flex-wrap justify-center items-center gap-12 mt-12 px-6 max-w-[1400px] w-full lg:text-lg">
        <Suspense fallback={<Spinner content="skills" />}>
          <Await resolve={skills}>
            {(resolvedSkills) => <SkillsContainer skills={resolvedSkills.skills} />}
          </Await>
        </Suspense>
      </div>
    </section>
  );
};

export default Skills;
