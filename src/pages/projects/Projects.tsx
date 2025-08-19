import { Suspense } from "react";
import { Await, Navigate, useLoaderData, useNavigate } from "react-router";

import Projects from "../../components/Projects/Projects";
import Title from "../../components/UI/Title";
import Spinner from "../../components/UI/Spinner";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store.ts";
import Button from "../../components/UI/Button.tsx";

const ProjectsPage = () => {
  const { projects } = useLoaderData();
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  if (!auth.token && auth.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Title>My Projects</Title>
      <p className="text-center">
        Check out my work - click a project to see the details.
      </p>
      <div className="flex flex-col justify-center items-center gap-6">
        <Button onClick={() => navigate("/projects/add")}>Add</Button>
        <Suspense fallback={<Spinner />}>
          <Await resolve={projects}>
            {(resolvedProjects) => <Projects data={resolvedProjects} />}
          </Await>
        </Suspense>
      </div>
    </>
  );
};

export default ProjectsPage;

const loadProjects = async () => {
  const response: Response = await fetch(
    import.meta.env.VITE_API_URL + "/projects",
  );
  if (!response.ok) {
    throw new Response("Failed to load projects");
  }
  return await response.json();
};

export const loader = () => {
  return {
    projects: loadProjects(),
  };
};
