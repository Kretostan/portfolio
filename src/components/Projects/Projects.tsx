import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import type { Project } from "../../@types";

type ProjectsProps = {
  data: { projects: Project[] } | { message: string };
};

const Projects = ({ data }: ProjectsProps) => {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 px-6 py-6 sm:py-8 mx-2 bg-bg-theme-2 rounded-xl">
      {"projects" in data &&
        data.projects.map((project) => (
          <div
            className="flex flex-col justify-between items-center h-[280px] max-w-[275px] border-2 border-accent-theme-1 rounded-lg overflow-hidden"
            key={project.title}
          >
            <img
              src={project.image}
              alt={`${project.title} home page`}
              className="flex h-full"
            />
            <div className="flex flex-col justify-center items-center gap-8 py-8 h-1/2">
              <h2 className="text-xl lg:text-2xl font-semibold">
                {project.title}
              </h2>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
                onMouseEnter={() => setIsHovered(project.slug)}
                onMouseLeave={() => setIsHovered(null)}
                className="flex flex-col justify-center items-center gap-0.5 cursor-pointer"
              >
                <button onClick={() => navigate("/projects/" + project.slug)}>
                  {t("projects.projectBtn")}
                </button>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered === project.slug ? 1 : 0 }}
                  transition={{ type: "tween", duration: 0.3 }}
                  className="h-0.5 w-full bg-accent-theme-1 opacity-0 rounded-xl"
                  key={project.slug}
                />
              </motion.div>
            </div>
          </div>
        ))}
      {"message" in data && t("projects.noProjects")}
    </div>
  );
};

export default Projects;
