import {Suspense} from "react";
import {Await, useLoaderData} from "react-router";
import axios from "axios";

import Title from "../../components/ui/Title";
import ProjectContent from "../../components/Projects/Project";
import Spinner from "../../components/ui/Loader.tsx";

const ProjectPage = () => {
  const {project} = useLoaderData();

  return <div className="flex flex-col gap-12">
    <Title>Project Page</Title>
    <Suspense fallback={<Spinner />}>
      <Await resolve={project}>
        {(resolvedProject) => <ProjectContent project={resolvedProject} />}
      </Await>
    </Suspense>
  </div>
};

export default ProjectPage;

const loadProject = async (slug: string) => {
  const response = await axios.get(import.meta.env.VITE_API_URL + "/projects/" + slug);

  if (response.status !== 200) {
    throw new Response("Failed to load project", {status: response.status, statusText: response.statusText});
  }

  const data = response.data;
  return data.project;
}

export const loader = async ({params}: {params: {projectSlug: string}}) => {
  const slug = params.projectSlug;

  return {
    project: await loadProject(slug)
  }
}