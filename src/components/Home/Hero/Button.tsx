import {motion} from 'framer-motion';
import {useTranslation} from "react-i18next";

const Button = () => {
  const { t } = useTranslation();

  return <motion.button
    initial={{ boxShadow: "none" }}
    animate={{ boxShadow: "0 5px 15px 0px var(--accent-color-1)" }}
    aria-label="Go to About page"
    className="px-10 py-4 lg:text-lg bg-gradient-button text-[var(--opposite-foreground-1)] font-semibold rounded-4xl cursor-pointer"
    onClick={() => {
      const element = document.getElementById("projects");
      element?.scrollIntoView({ behavior: "smooth" });
    }}
    whileHover={{ y: -3, boxShadow: "0px 8px 20px 5px var(--accent-color-1)" , transition: { type: "tween" } }}
  >
    {t("home.button")}
  </motion.button>;
};

export default Button;
