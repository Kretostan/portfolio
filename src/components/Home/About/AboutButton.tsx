import { motion } from "framer-motion";
import {useTheme} from "next-themes";
import PreviousButtonDark from "../../../assets/about/left-arrow-dark.svg?react";
import NextButtonDark from "../../../assets/about/right-arrow-dark.svg?react";
import PreviousButtonLight from "../../../assets/about/left-arrow-light.svg?react";
import NextButtonLight from "../../../assets/about/right-arrow-light.svg?react";
import Icon from "../../UI/Icon.tsx";

interface ButtonProps {
  next?: boolean;
  previous?: boolean;
  onPress: () => void;
}

const AboutButton = ({ onPress, next, previous }: ButtonProps) => {
  const {resolvedTheme} = useTheme();

  return (
    <motion.button
      className={`p-3 ${next ? "visible" : "invisible"} cursor-pointer`}
      onClick={onPress}
      whileHover={{ x: previous ? -10 : 10 }}
      transition={{ type: "tween" }}
      aria-label={previous ? "Previous about text" : "Next about text"}
    >
      {resolvedTheme === "dark"
        ? <Icon Icon={previous ? PreviousButtonDark : NextButtonDark} size={34} />
        : <Icon Icon={previous ? PreviousButtonLight : NextButtonLight} size={34} />}
    </motion.button>
  );
};

export default AboutButton;
