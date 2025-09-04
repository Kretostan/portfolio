import { Suspense } from "react";
import { Await, useLoaderData, useNavigate } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";

import type { RootState } from "../../store/store.ts";

import ProjectContent from "../../components/Projects/Project";
import BackButton from "../../components/Projects/BackButton.tsx";
import Title from "../../components/UI/Title";
import Spinner from "../../components/UI/Spinner";

const ProjectPage = () => {
  const { project } = useLoaderData();
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);

  return (
    <div className="flex flex-col gap-12">
      <Title>{project.title}</Title>
      <div className="flex flex-col gap-3 px-4">
        <div className="flex justify-between px-4 py-2">
          <BackButton />
          {auth.isLoggedIn && auth.role === "admin" && (
            <div className="flex gap-6">
              <button
                className="bg-accent-theme-1 text-bg-theme-2 px-4 py-2 rounded cursor-pointer"
                onClick={() => navigate("/projects/update/" + project.slug)}
              >
                Update
              </button>
            </div>
          )}
        </div>
        <Suspense fallback={<Spinner />}>
          <Await resolve={project}>
            <ProjectContent project={project} />
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default ProjectPage;

const loadProject = async (slug: string) => {
  const response = await axios.get(
    import.meta.env.VITE_API_URL + "/projects/" + slug,
  );

  if (response.status !== 200) {
    throw new Response("Failed to load project", {
      status: response.status,
      statusText: response.statusText,
    });
  }

  const data = response.data;
  return data.project;
};

export const loader = async ({
  params,
}: {
  params: { projectSlug: string };
}) => {
  const slug = params.projectSlug;

  return {
    project: await loadProject(slug),
  };
};
