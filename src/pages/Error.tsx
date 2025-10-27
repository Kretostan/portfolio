import { useNavigate } from "react-router";
import {motion} from "framer-motion";

const ErrorPage = () => {
	const navigate = useNavigate();

	return (
		<div className="flex w-screen flex-col items-center gap-4 pt-36 h-screen bg-bg-theme-1 text-xl">
			<h2 className="pb-10 text-5xl font-bold"><span className="bg-clip-text text-transparent bg-linear-to-r from-accent-theme-1 to-accent-theme-2">404</span> Not Found</h2>
			<p>Could not find requested resource</p>
			<motion.button
				whileHover={{
					color: "var(--accent-color-1)"
				}}
				onClick={() => navigate("/")}
				className="cursor-pointer"
			>
				Home Page
			</motion.button>
		</div>
	);
}

export default ErrorPage;
