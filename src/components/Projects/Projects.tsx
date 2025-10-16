import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {useTheme} from "next-themes";
import type { IProject } from "../../types";

type ProjectsProps = {
  data: {
    projects: { projects: IProject[] }
  };
};

const Projects = ({ data }: ProjectsProps) => {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex flex-wrap justify-center items-center gap-10 pt-18 rounded-xl">
      {data?.projects.projects.map((project: IProject) => (
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 0 20px 0px var(--accent-color-2)", outlineColor: "var(--accent-color-2)" }}
            className="flex flex-col max-w-[25em] border-2 bg-bg-content border-accent-theme-1 rounded-xl overflow-hidden"
            key={project.title}
          >
            <img src={project.image} alt={`${project.title} home page`} />
            <div className="flex flex-col justify-between gap-5 px-6 py-7 h-3/5">
              <h2 className="text-accent-theme-1 text-xl lg:text-2xl font-semibold">
                {project.title}
              </h2>
              <p className="h-[90px] text-sm">{project.description.en}</p>
              <div className="flex gap-2">
                {project.stack.map((tech, index) => <motion.p whileHover={{
                  color: "var(--opposite-foreground-1)",
                  backgroundColor: "var(--accent-color-1)",
                }} className="px-4 py-1 bg-bg-theme-2 text-accent-theme-1 border-1 border-accent-theme-1 rounded-2xl text-sm" key={index + " " + resolvedTheme}>{tech}</motion.p>)}
              </div>
              <div className="flex w-full justify-around gap-4 bg-bg-content">
                <motion.a
                  whileHover={{
                    y: -3,
                    boxShadow: "0 0 10px 2px var(--accent-color-2)",
                  }}
                  href={project.page}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 w-1/2 bg-accent-theme-2 text-[var(--opposite-foreground-1)] rounded-lg text-center cursor-pointer"
                >
                  {t("projects.pageBtn")}
                </motion.a>
                <motion.a
                  whileHover={{
                    color: "var(--opposite-foreground-1)",
                    backgroundColor: "var(--accent-color-1)",
                  }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 w-1/2 text-accent-theme-1 border-2 border-accent-theme-1 rounded-lg text-center cursor-pointer"
                  key={resolvedTheme}
                >
                  GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
    </div>
  );
};

export default Projects;
