import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import Icon from "./Icon";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect((): void => {
    setMounted(true);
  }, [setMounted]);

  if (!mounted) {
    return null;
  }

  const changeThemeHandler = (): void => {
    setTheme((prevTheme): string => (prevTheme === "dark" ? "light" : "dark"));
  };

  const themeIcon = {
    icon: theme === "dark" ? "sun" : "moon",
    alt: theme === "dark" ? "Sun icon" : "Moon icon",
  };

  return (
    <motion.button
      className="hidden sm:flex p-2 cursor-pointer select-none"
      onClick={changeThemeHandler}
      whileHover={{ scale: 1.15 }}
    >
      <Icon icon={themeIcon.icon} alt={themeIcon.alt} height={22} width={22} />
    </motion.button>
  );
};

export default ThemeSwitch;
