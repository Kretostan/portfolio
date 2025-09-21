import {useState} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";

import type { Category } from "../../@types";

import SkillCard from "./SkillCard.tsx";
import Tooltip from "../UI/Tooltip.tsx";
import {useTranslation} from "react-i18next";

type SkillsProps = {
  skills: Category[];
};

const Skills = ({ skills }: SkillsProps) => {
  const [currentCategory, setCurrentCategory] = useState<string>("Frontend");
  const [hoveredIcon, setHoveredIcon] = useState<string | null>("");
  const { resolvedTheme } = useTheme();
  const { t } = useTranslation();

  const skillCategory = skills.filter(
    (skill) => skill.name === currentCategory,
  );

  return skillCategory.map((category, index) => (
    <AnimatePresence key={index}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-1 flex-col items-center gap-6 max-w-[500px] w-full overflow-hidden"
      >
        <div className="py-1 w-full bg-bg-theme-2 border-3 border-accent-theme-2 rounded-2xl">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={category.fullName}
            className="flex justify-center px-10 py-4 text-xl sm:text-2xl font-semibold"
          >
            {category.name !== "Others" ? category.fullName : t("skills.category-3") }
          </motion.h2>
          <div className="flex justify-around py-4">
            {skills.map((category) => (
              <motion.h3
                whileHover={{ color: "var(--accent-color-1)" }}
                className={`flex justify-center items-center text-lg sm:text-xl font-semibold ${currentCategory === category.name && "text-accent-theme-1"} cursor-pointer`}
                onClick={() => setCurrentCategory(category.name)}
                key={`Current - ${currentCategory}, ${category.name}, ${resolvedTheme}`}
              >
                {category.name}
              </motion.h3>
            ))}
          </div>
        </div>
        <motion.div
          key={category.fullName}
          className="px-10 py-4 w-full bg-bg-theme-2 border-3 border-accent-theme-2 rounded-3xl"
        >
          {category.skills.map((skill) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col pt-2"
              key={`${category.name}-${skill.skillName}`}
            >
              <h4 className="py-3 text-lg font-semibold text-center">
                {skill.skillName}
              </h4>
              <div
                className={`relative flex flex-wrap justify-around ${category.name === "Frontend" || category.name === "Others" ? "gap-12" : "gap-20"} mx-auto px-2 py-4`}
              >
                {skill.icons.map((icon) => (
                  <div
                    onMouseEnter={() => setHoveredIcon(icon.alt)}
                    onMouseLeave={() => setHoveredIcon(null)}
                    className="cursor-pointer"
                    key={`${skill.skillName}-${icon.alt}`}
                  >
                    {icon.alt === hoveredIcon && <Tooltip name={icon.alt} />}
                    <SkillCard icon={icon} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  ));
};

export default Skills;
