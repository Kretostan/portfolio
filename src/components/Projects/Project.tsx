import {useNavigate} from "react-router";
import {useSelector} from "react-redux";
import axios from "axios";

import type {RootState} from "../../store/store.ts";
import type {Project} from "../../types";

const ProjectContent = ({project}: {project: Project}) => {
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);

  return <div className="flex flex-col gap-3 px-4">
    <div className="flex justify-between px-4">
      <button onClick={() => navigate("/projects")} className="cursor-pointer px-2 py-1 border-1 rounded">⬅ Back</button>
      {(auth.role === "admin") && <div className="flex gap-6">
          <button className="bg-accent-theme-1 text-bg-theme-2 px-4 py-2 rounded cursor-pointer" onClick={async () => {
            try {
              const response = await axios.patch(import.meta.env.VITE_API_URL + "/projects/" + project.slug, {withCredentials: true});
              if (response.status === 200) {
                // TODO: Inna nawigacja prawdopodobnie
                navigate("/projects/" + project.slug);
              }
            } catch (error) {
              console.error("Error updating project:", error);
            }
          }}>Update</button>
          <button className="bg-accent-theme-1 text-bg-theme-2 px-4 py-2 rounded cursor-pointer" onClick={async () => {
            try {
              const response = await axios.delete(import.meta.env.VITE_API_URL + "/projects/" + project.slug, {withCredentials: true});
              if (response.status === 200) {
                navigate("/projects");
              }
            } catch (error) {
              console.error("Error deleting project:", error);
            }
          }}>Delete</button>
      </div>}
    </div>
    <div className="flex flex-col justify-center items-center bg-bg-theme-2 rounded-xl">
      <img
        src={project.image}
        alt={`${project.title} home page`}
        className="rounded-lg m-4 project-image max-w-[750px]"
      />
      <div className="flex flex-col justify-center items-center gap-10 py-8 w-full">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">{project.title}</h2>
        <p>{project.description}</p>
        <div className="flex w-full justify-around">
          <a href={project.url} target="_blank" rel="noopener noreferrer">Visit Page</a>
          <a href={project.github} target="_blank" rel="noopener noreferrer">Explore Repo</a>
        </div>
      </div>
    </div>
  </div>
}

export default ProjectContent;