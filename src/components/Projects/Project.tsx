import type { Project } from "../../@types";

const ProjectContent = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-bg-theme-2 rounded-xl">
      <img
        src={project.image}
        alt={`${project.title} home page`}
        className="rounded-lg m-4 project-image max-w-[750px]"
      />
      <div className="flex flex-col justify-center items-center gap-10 py-8 w-full">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          {project.title}
        </h2>
        <p>{project.description}</p>
        <div className="flex w-full justify-around">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Visit Page
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            Explore Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
