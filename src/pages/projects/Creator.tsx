import axios from "axios";
import {Navigate, useNavigate} from "react-router";
import {useSelector} from "react-redux";
import type {RootState} from "../../store/store.ts";

const CreatorPage = () => {
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);

  if (!auth.token && auth.role !== "admin") {
    return <Navigate to="/" replace />
  }

  const handleAddProject = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());
    const response = await axios.post(import.meta.env.VITE_API_URL + "/projects", jsonData, {
      withCredentials: true});

    if (response.status === 201) {
      navigate("/projects");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Creator Page</h1>
      <p className="text-lg text-gray-700">This is the Creator page.</p>
      <form onSubmit={handleAddProject}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Project Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter project title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Project Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter project url"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
            Project Url
          </label>
          <input
            type="text"
            id="url"
            name="url"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter project url"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="github">
            Project Repo
          </label>
          <input
            type="text"
            id="github"
            name="github"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter project repo"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Project Description
          </label>
          <textarea
            id="description"
            name="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter project description"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Project
        </button>
      </form>
    </div>
  );
}

export default CreatorPage;