import axios from "axios";

const loadSkills = async () => {
  const res = await axios.get(import.meta.env.VITE_API_URL + "/skills");

  return res.data;
};

export const skillsLoader = () => {
  return {
    skills: loadSkills(),
  };
};

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

  return response.data;
};

export const projectLoader = async ({ params }: { params: { projectSlug: string }}) => {
  const slug = params.projectSlug;

  return {
    project: await loadProject(slug),
  };
};

const loadProjects = async () => {
  const response: Response = await fetch(
    import.meta.env.VITE_API_URL + "/projects",
  );
  if (!response.ok) {
    throw new Response("Failed to load projects");
  }

  return await response.json();
};

export const projectsLoader = () => {
  return {
    projects: loadProjects(),
  };
};
