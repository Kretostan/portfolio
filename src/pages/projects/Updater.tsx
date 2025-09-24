import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Await, useLoaderData, useNavigate } from "react-router";
import axios from "axios";

import Updater from "../../components/Projects/Updater.tsx";
import Title from "../../components/UI/Title.tsx";
import Spinner from "../../components/UI/Spinner.tsx";

import type { Project } from "../../@types";
import type { RootState } from "../../store/store.ts";
import ProtectedRoute from "../../components/ProtectedRoute.tsx";

const ProjectUpdaterPage = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const { project } = useLoaderData<{ project: Project }>();

  return (
    <ProtectedRoute>
      <div className="flex flex-col gap-12">
        <Title>Update Project</Title>
        <div className="flex flex-col gap-3 px-4 w-full">
          <div className="flex justify-between px-4">
            <button
              onClick={() => navigate("/projects")}
              className="cursor-pointer px-2 py-1 border-1 rounded"
            >
              Back
            </button>
            {auth.role === "admin" && (
              <div className="flex gap-6">
                <button
                  className="bg-accent-theme-1 text-bg-theme-2 px-4 py-2 rounded cursor-pointer"
                  onClick={async () => {
                    try {
                      const response = await axios.delete(
                        import.meta.env.VITE_API_URL +
                        "/projects/" +
                        project.slug,
                        { withCredentials: true },
                      );
                      if (response.status === 200) {
                        navigate("/projects");
                      }
                    } catch (error) {
                      console.error("Error deleting project:", error);
                    }
                  }}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
          <Suspense fallback={<Spinner />}>
            <Await resolve={project}>
              {(resolvedProject) => <Updater project={resolvedProject} />}
            </Await>
          </Suspense>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default ProjectUpdaterPage;
