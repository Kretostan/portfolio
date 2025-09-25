import { Suspense } from "react";
import { Await, useLoaderData, useNavigate } from "react-router";
import { useSelector } from "react-redux";

import type { RootState } from "../../store/store.ts";
import type {Project} from "../../@types";

import ProjectContent from "../../components/Projects/Project";
import BackButton from "../../components/Projects/BackButton.tsx";
import Title from "../../components/UI/Title";
import Spinner from "../../components/UI/Spinner";
import axios from "axios";

const ProjectPage = () => {
  const { project } = useLoaderData() as { project: Project  };
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);

  const deleteProjectHandler = async () => {
    await axios.delete(import.meta.env.VITE_API_URL +"/projects/" + project.slug);
  }

  return (
    <div className="flex flex-col gap-6">
      <Title>{project.title}</Title>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between px-4 py-2">
          <BackButton />
          {auth.isLoggedIn && auth.role === "admin" && (
            <div className="flex gap-6">
              <button
                className="px-4 py-2 bg-accent-theme-1 rounded cursor-pointer"
                onClick={() => navigate("/projects/update/" + project.slug)}
              >
                Update
              </button>
              <button
                className="px-4 py-2 bg-accent-theme-1 rounded cursor-pointer"
                onClick={deleteProjectHandler}
              >
                Delete
              </button>
            </div>
          )}
        </div>
        <Suspense fallback={<Spinner />}>
          <Await resolve={project}>
            {(resolvedProject) => <ProjectContent project={resolvedProject} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default ProjectPage;
