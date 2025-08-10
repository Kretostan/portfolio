import {Suspense} from "react";
import {Await, useLoaderData, useNavigate} from "react-router";
import {useSelector} from "react-redux";

import Title from '../../components/ui/Title';
import Projects from "../../components/Projects/Projects";
import Spinner from "../../components/ui/Loader.tsx";

import type {RootState} from "../../store/store.ts";

const ProjectsPage = () => {
	const {projects} = useLoaderData();
	const auth = useSelector((state: RootState) => state.auth);
	const navigate = useNavigate();

	return <>
		<Title>Projects page</Title>
		<p className="text-center">
			To jest lista projektów. Wybierz jakiś po więcej informacji.
		</p>
		<div className="flex flex-col justify-center items-center gap-6">
			{auth.role === "admin" && <button onClick={() => navigate("add")} className="bg-accent-theme-1 text-bg-theme-2 px-4 py-2 rounded-lg">Add Project</button>}
			<Suspense fallback={<Spinner />}>
				<Await resolve={projects}>
					{(resolvedProjects) => <Projects projects={resolvedProjects} />}
				</Await>
			</Suspense>
		</div>
	</>
};

export default ProjectsPage;

const loadProjects = async () => {
	const response = await fetch(import.meta.env.VITE_API_URL + "/projects");
	if (!response.ok) {
		throw new Response("Failed to load projects", {status: response.status, statusText: response.statusText});
	}
	const data = await response.json();
	return data.projects;
}

export const loader = () => {
	return {
		projects: loadProjects()
	}
}
