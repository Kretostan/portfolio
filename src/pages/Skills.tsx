import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Await, useLoaderData } from "react-router";

import Title from "../components/UI/Title";
import Spinner from "../components/UI/Spinner.tsx";
import Skills from "../components/Skills/Skills.tsx";

const SkillsPage = () => {
  const { skills } = useLoaderData();
  const { t } = useTranslation();

  return (
    <>
      <Title>{t("skills.title")}</Title>
      <div className="flex flex-col items-center gap-12 px-6 lg:text-lg">
        <div className="px-4 sm:px-0 text-center">
          <p>{t("skills.subtitle")}</p>
          <p className="px-5 md:px-10 max-w-[600px]">{t("skills.subtitle-2")}</p>
        </div>
        <Suspense fallback={<Spinner content="skills" />}>
          <Await resolve={skills}>
            {(resolvedSkills) => <Skills skills={resolvedSkills} />}
          </Await>
        </Suspense>
      </div>
    </>
  );
};

export default SkillsPage;

const loadSkills = async () => {
  const res = await axios.get(import.meta.env.VITE_API_URL + "/skills");
  return res.data;
};

export const loader = () => {
  return {
    skills: loadSkills(),
  };
};
