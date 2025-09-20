import { motion } from "framer-motion";

import Icon from "../UI/Icon";

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

  return (
    <motion.button
      className={`p-3 ${next ? "visible" : "invisible"}`}
      onClick={onPress}
      whileHover={{ x: previous ? -10 : 10 }}
      transition={{ type: "tween" }}
    >
      <Icon icon={icon.name} alt={icon.alt} width={34} height={34} themed />
    </motion.button>
  );
};

export default AboutButton;
