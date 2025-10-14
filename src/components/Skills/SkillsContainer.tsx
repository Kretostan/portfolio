import {useState} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";

import type { Category } from "../../@types";

import SkillCard from "./SkillCard.tsx";
import {useTranslation} from "react-i18next";

type SkillsProps = {
  skills: { skills: Category[] };
};

const SkillsContainer = ({ skills }: SkillsProps) => {
  const { resolvedTheme } = useTheme();
  const { t } = useTranslation();

  const skillCategory = skills?.skills.filter(
    (skill) => skill.name === "Frontend",
  );

  return skillCategory.map((category, index) => (
    <AnimatePresence key={index}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-wrap justify-center items-center gap-6 px-2 pt-12 pb-2 w-full"
      >
        <motion.div whileHover={{ y: -5, boxShadow: "0 0 10px 2px var(--accent-color-1)", backgroundColor: "var(--background-1)", outlineColor: "var(--accent-color-2)" }} className="flex flex-col gap-4 p-6 h-[12em] w-[20em] outline-2 outline-accent-theme-1 bg-bg-content rounded-xl cursor-pointer">
          <h4 className="pt-2 text-accent-theme-1 font-bold text-xl ">Frontend Development</h4>
          <p>React, JavaScript, TypeScript, HTML5, CSS3, Responsive Design</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  ));
};

export default SkillsContainer;
