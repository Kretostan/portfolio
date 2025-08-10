import { motion } from "framer-motion";

import Icon from "../ui/Icon";

interface ButtonProps {
	next?: boolean;
	previous?: boolean;
	onPress: () => void;
}

const AboutButton = ({ onPress, next, previous }: ButtonProps) => {
	const icon = {
		name: previous ? "about/left-arrow" : "about/right-arrow",
		alt: previous ? "Previous" : "Next",
	};

	return <motion.button
		className={`p-3 ${next ? 'visible' : 'invisible'}`} onClick={onPress}
		whileHover={{ x: previous ? -5 : 5 }}
	>
		<Icon icon={icon.name} alt={icon.alt} width={32} height={32} themed />
	</motion.button>
}

export default AboutButton