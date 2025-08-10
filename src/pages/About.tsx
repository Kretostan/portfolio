
import Title from '../components/ui/Title';
import AboutText from "../components/About/AboutText";

const AboutPage = () => {
	return <>
		<Title>About</Title>
		<div className="flex flex-col lg:flex-row justify-center items-center h-full rounded-xl">
			<AboutText />
			<div className="relative h-full w-1/4">
				<img
					src="https://kretostan-portfolio.s3.eu-north-1.amazonaws.com/about.png"
					alt="Kretostan's photo"
					className="object-cover"
				/>
			</div>
		</div>
	</>
};

export default AboutPage;