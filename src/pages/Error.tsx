import { useNavigate } from "react-router";

const ErrorPage = () => {
	const navigate = useNavigate();

	return (
		<div className="flex w-screen flex-col items-center justify-center gap-y-4 pt-36 text-xl">
			<h2 className="pb-10 text-5xl font-bold"><span>404</span> Not Found</h2>
			<p>Could not find requested resource</p>
			<button
				onClick={() => navigate("/")}
				className="cursor-pointer"
			>Home Page</button>
		</div>
	);
}

export default ErrorPage;