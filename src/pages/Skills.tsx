import { useState } from "react";
import { useTranslation } from "react-i18next";

import Title from "../components/UI/Title";
import SkillsCards from "../components/Skills/SkillsCards";
import SkillsCategories from "../components/Skills/SkillsCategories";
import SkillCategory from "../components/Skills/SkillCategory";
import { categories } from "../models/skills";

const SkillsPage = () => {
  const [categoryId, setCategoryId] = useState<number>(1);
  const { t } = useTranslation();

  const categoryHandler = (id: number): void => {
    setCategoryId(id);
  };

  return (
    <>
      <Title>{t("skills.title")}</Title>
      <div className="flex flex-col items-center gap-10">
        <p>{t("skills.subtitle")}</p>
        <div className="flex flex-1 flex-col gap-9 py-9 w-full bg-bg-theme-2 rounded-xl">
          <SkillCategory categoryId={categoryId} />
          <div className="flex flex-col md:flex-row gap-12 px-12 h-full">
            <SkillsCategories
              categories={categories}
              onSetCategory={categoryHandler}
            />
            <SkillsCards skillsId={categoryId} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
