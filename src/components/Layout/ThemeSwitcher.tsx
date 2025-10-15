import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const ThemeSwitcher = () => {
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
      className="hidden sm:flex p-4 bg-bg-theme-2 rounded-[50%] border-2 border-accent-theme-1 cursor-pointer select-none"
      onClick={changeThemeHandler}
      whileHover={{ scale: 1.1, backgroundColor: "var(--accent-color-1)" }}
      key={theme}
    >
      <img src={`/icons/${theme === "dark" ? "sun" : "moon"}.svg`} alt={themeIcon.alt} height={20} width={20} />
    </motion.button>
  );
};

export default ThemeSwitcher;
