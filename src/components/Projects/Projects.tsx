import {useState} from "react";
import {motion} from "framer-motion";

import type {Project} from "../../types";

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({projects}: ProjectsProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return <div className="flex flex-col gap-6 sm:gap-8 px-6 py-6 sm:py-8 mx-2 bg-bg-theme-2 rounded-xl">
    <div className="flex flex-wrap justify-center items-center gap-6">
      {projects.length > 0 ? projects.map(project =>
      <div
        className="flex flex-col justify-between items-center h-[280px] w-[275px] border-1 border-accent-theme-1 rounded overflow-hidden"
        key={project.title}
      >
        <img src={project.image} alt={`${project.title} home page`} className="flex items-center h-full" />
        <div className="flex flex-col justify-center items-center gap-8 py-8 h-1/2">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">{project.title}</h2>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex flex-col justify-center items-center cursor-pointer"
          >
            <a
              className="flex items-center"
              href={`/projects/${project.slug}`}
              rel="noopener noreferrer"
            >Explore</a>
            <motion.span
              initial={{opacity: 0}}
              animate={{opacity: isHovered ? 1 : 0}}
              transition={{ type: 'tween', duration: 0.3 }}
              className="h-0.5 w-full bg-accent-theme-1 opacity-0"
            />
          </div>
        </div>
      </div>): <p>No projects available at the moment.</p>}
    </div>
  </div>;
}

export default Projects