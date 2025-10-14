import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import type { Project } from "../../@types";

type ProjectsProps = {
  data: {
    projects: { projects: Project[] }
  };
};

const Projects = ({ data }: ProjectsProps) => {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const navigate = useNavigate();
  const { t } = useTranslation();
  console.log(data.projects.projects)
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 px-6 py-6 sm:py-8 mx-2 rounded-xl">
      {data?.projects.projects.map((project: Project) => (
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 0 20px 0px var(--accent-color-2)", outlineColor: "var(--accent-color-2)" }}
            className="flex flex-col h-[28em] w-[25em] border-2 bg-bg-content border-accent-theme-1 rounded-xl overflow-hidden"
            key={project.title}
          >
            <img src={project.image} alt={`${project.title} home page`} />
            <div className="flex flex-col justify-between px-6 py-7 h-3/5">
              <h2 className="text-accent-theme-1 text-xl lg:text-2xl font-semibold">
                {project.title}
              </h2>
              <p className="text-sm">Opis</p>
              <div className="flex gap-2">
                <p className="px-4 py-1 bg-bg-theme-2 text-accent-theme-1 outline-1 outline-accent-theme-1 rounded-2xl text-sm">React</p>
                <p className="px-4 py-1 bg-bg-theme-2 text-accent-theme-1 outline-1 outline-accent-theme-1 rounded-2xl text-sm">Node.js</p>
                <p className="px-4 py-1 bg-bg-theme-2 text-accent-theme-1 outline-1 outline-accent-theme-1 rounded-2xl text-sm">AWS</p>
              </div>
              <div className="flex w-full justify-around bg-bg-content">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring" }}
                  onMouseEnter={() => setIsHovered(project.url)}
                  onMouseLeave={() => setIsHovered(null)}
                  className="flex flex-col justify-center items-center gap-0.5 px-3 py-2 cursor-pointer"
                >
                  <a
                    className="flex items-center font-semibold text-lg"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("projects.visitBtn")}
                  </a>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered === project.url ? 1 : 0 }}
                    transition={{ type: "tween", duration: 0.3 }}
                    className="h-0.5 w-full bg-accent-theme-1 opacity-0 rounded-xl"
                    key={project.url}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring" }}
                  onMouseEnter={() => setIsHovered(project.github)}
                  onMouseLeave={() => setIsHovered(null)}
                  className="flex flex-col justify-center items-center gap-0.5 px-3 py-2 cursor-pointer"
                >
                  <a
                    className="flex items-center font-semibold text-lg"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("projects.repoBtn")}
                  </a>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered === project.github ? 1 : 0 }}
                    transition={{ type: "tween", duration: 0.3 }}
                    className="h-0.5 w-full bg-accent-theme-1 opacity-0 rounded-xl"
                    key={project.github}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
    </div>
  );
};

export default Projects;
