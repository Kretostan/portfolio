import axios from "axios";
import { Navigate, useNavigate } from "react-router";
import { useSelector } from "react-redux";

import type { RootState } from "../../store/store.ts";
import type { FormEvent } from "react";
import Title from "../../components/UI/Title.tsx";
import Button from "../../components/UI/Button.tsx";

const CreatorPage = () => {
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);

  if (!auth.token && auth.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  const handleAddProject = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());
    const response = await axios.post(
      import.meta.env.VITE_API_URL + "/projects",
      jsonData,
      {
        withCredentials: true,
      },
    );
    if (response.status === 201) {
      navigate("/projects");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-16">
      <Title>Creator Page</Title>
      <form
        onSubmit={handleAddProject}
        className="flex flex-col gap-2 mx-3 sm:mx-0 p-8 sm:max-w-[500px] sm:w-full bg-bg-theme-2 rounded-xl ring"
      >
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="title" className="text-error-label-color">
              Project Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              className="bg-error-bg-color border-1 border-error-label-color placeholder:text-error-color"
            />
          </div>
          <div>
            <label htmlFor="image">Project Image</label>
            <input type="text" id="image" name="image" placeholder="AWS S3" />
          </div>
          <div>
            <label htmlFor="url">Project URL</label>
            <input type="text" id="url" name="url" placeholder="Page URL" />
          </div>
          <div>
            <label htmlFor="github">Project Repo</label>
            <input type="text" id="github" name="github" placeholder="Repo" />
          </div>
          <div>
            <label htmlFor="description">Project Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Description"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-error-color">Field cannot be empty</p>
          <div className="flex justify-center items-center pt-4">
            <Button>Add</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatorPage;
