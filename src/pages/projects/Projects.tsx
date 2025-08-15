import {Suspense} from "react";
import {Await, useLoaderData} from "react-router";

import Title from '../../components/ui/Title';
import Projects from "../../components/Projects/Projects";
import Spinner from "../../components/ui/Spinner";

const ProjectsPage = () => {
	const { projects } = useLoaderData();

	return <>
		<Title>My Projects</Title>
		<p className="text-center">Check out my work - click a project to see the details.</p>
		<div className="flex flex-col justify-center items-center gap-6">
			<Suspense fallback={<Spinner />}>
				<Await resolve={projects}>
					{(resolvedProjects) => <Projects data={resolvedProjects} />}
				</Await>
			</Suspense>
		</div>
	</>
};

export default ProjectsPage;

const loadProjects = async () => {
	const response: Response = await fetch(import.meta.env.VITE_API_URL + "/projects");
	if (!response.ok) {
		throw new Response("Failed to load projects");
	}
	return await response.json();
}

export const loader = () => {
	return {
		projects: loadProjects()
	}
}
