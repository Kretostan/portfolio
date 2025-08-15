import axios from "axios";

import type { Project } from "../../types";
import { type ChangeEvent, type FormEvent, useState } from "react";
import Button from "../ui/Button.tsx";
import { useNavigate } from "react-router";

const Updater = ({ project }: { project: Project }) => {
  const [formData, setFormData] = useState<Project>(project);
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevProject) => {
      return {
        ...prevProject,
        [name]: value,
      };
    });
  };

  const onSubmitUpdate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    const response = await axios.patch(
      import.meta.env.VITE_API_URL + "/projects/" + project.slug,
      formData,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      },
    );

    if (response.status === 200) {
      navigate("/projects");
    }
  };

  return (
    <form
      onSubmit={onSubmitUpdate}
      className="px-8 py-6 max-w-[500px] bg-bg-theme-2 rounded-xl"
    >
      <div>
        <div className="flex flex-col py-2 text-sm">
          <label id="title" htmlFor="title" className="py-1">
            Title:
          </label>
          <input
            type="text"
            name="title"
            placeholder="Title..."
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col py-2 text-sm">
          <label id="description" htmlFor="description" className="py-1">
            Description:
          </label>
          <input
            type="text"
            name="description"
            placeholder="Description..."
            value={formData.description}
            required
          />
        </div>
        <div className="flex flex-col py-2 text-sm">
          <label id="image" htmlFor="image" className="py-1">
            Image:
          </label>
          <input
            type="text"
            name="image"
            placeholder="Image..."
            value={formData.image}
            required
          />
        </div>
        <div className="flex flex-col py-2 text-sm">
          <label id="url" htmlFor="url" className="py-1">
            URL:
          </label>
          <input
            type="text"
            name="url"
            placeholder="URL..."
            value={formData.url}
            required
          />
        </div>
        <div className="flex flex-col py-2 text-sm">
          <label id="github" htmlFor="github" className="py-1">
            GitHub:
          </label>
          <input
            type="text"
            name="github"
            placeholder="GitHub..."
            value={formData.github}
            required
          />
        </div>
      </div>
      <div className="flex justify-end pt-3 w-full">
        <Button>Send</Button>
      </div>
    </form>
  );
};

export default Updater;
