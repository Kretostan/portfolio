import { useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "../../@types";
import CardSlider from "./CardSlider.tsx";

const ProjectContent = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  return (
    <div className="flex flex-col bg-bg-theme-2 rounded-3xl border-2 border-accent-theme-2">
      <h2 className="flex justify-center py-6 text-xl sm:text-2xl lg:text-3xl font-semibold">
        {project.title}
      </h2>
      <img
        src={project.image}
        alt={`${project.title} home page`}
        className="max-w-[750px]"
      />
      <div className="flex flex-col justify-center items-center gap-10 py-8">
        {/*TODO: To card slider pass project.description*/}
        <CardSlider />
        <div className="flex w-full justify-around">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring" }}
            onMouseEnter={() => setIsHovered(project.url)}
            onMouseLeave={() => setIsHovered(null)}
            className="flex flex-col justify-center items-center gap-0.5 cursor-pointer"
          >
            <a
              className="flex items-center font-semibold text-lg"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Page
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
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring" }}
            onMouseEnter={() => setIsHovered(project.github)}
            onMouseLeave={() => setIsHovered(null)}
            className="flex flex-col justify-center items-center gap-0.5 cursor-pointer"
          >
            <a
              className="flex items-center font-semibold text-lg"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Repo
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
    </div>
  );
};

export default ProjectContent;
