import axios from "axios";

import type {Project} from "../../types";
import type {FormEvent} from "react";
import Button from "../ui/Button.tsx";

const Updater = ({ project }: { project: Project }) => {
  const onSubmitUpdate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());
    await axios.patch(
      import.meta.env.VITE_API_URL + "/projects/" + project.slug,
      jsonData,
      {withCredentials: true}
    );
  };

  return <form onSubmit={onSubmitUpdate} className="px-8 py-6 max-w-[500px] bg-bg-theme-2 rounded-xl">
    <div>
      <div className="flex flex-col py-2 text-sm">
        <label id="title" htmlFor="title" className="py-1">Title:</label>
        <input type="text" name="title" placeholder="Title..." className={"px-1 py-1 bg-[#ffffff] border-2 border-accent-theme-1 focus:border-accent-theme-2 text-lg text-[#424242] rounded outline-none min-h-[35px] max-h-[150px]"} value={project.title} required />
      </div>
      <div className="flex flex-col py-2 text-sm">
        <label id="description" htmlFor="description" className="py-1">Description:</label>
        <input type="text" name="description" placeholder="Description..." className={"px-1 py-1 bg-[#ffffff] border-2 border-accent-theme-1 focus:border-accent-theme-2 text-lg text-[#424242] rounded outline-none min-h-[35px] max-h-[150px]"} value={project.description} required />
      </div>
      <div className="flex flex-col py-2 text-sm">
        <label id="image" htmlFor="image" className="py-1">Image:</label>
        <input type="text" name="image" placeholder="Image..." className={"px-1 py-1 bg-[#ffffff] border-2 border-accent-theme-1 focus:border-accent-theme-2 text-lg text-[#424242] rounded outline-none min-h-[35px] max-h-[150px]"} value={project.image} required />
      </div>
      <div className="flex flex-col py-2 text-sm">
        <label id="url" htmlFor="url" className="py-1">URL:</label>
        <input type="text" name="url" placeholder="URL..." className="px-1 py-1 bg-[#ffffff] border-2 border-accent-theme-1 focus:border-accent-theme-2 text-lg text-[#424242] rounded outline-none min-h-[35px] max-h-[150px]" value={project.url} required />
      </div>
      <div className="flex flex-col py-2 text-sm">
        <label id="github" htmlFor="github" className="py-1">GitHub:</label>
        <input type="text" name="github" placeholder="GitHub..." className="px-1 py-1 bg-[#ffffff] border-2 border-accent-theme-1 focus:border-accent-theme-2 text-lg text-[#424242] rounded outline-none min-h-[35px] max-h-[150px]" value={project.github} required />
      </div>
    </div>
    <div className="flex justify-end pt-3 w-full">
      <Button>Send</Button>
    </div>
  </form>
}

export default Updater;
