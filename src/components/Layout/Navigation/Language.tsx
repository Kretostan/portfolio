import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {useTheme} from "next-themes";

const Language = () => {
  const { i18n } = useTranslation();
  const { theme } = useTheme();

  return i18n.languages.map((lng) => {
    const shortLng = lng.split("-")[0];
    if (shortLng !== i18n.resolvedLanguage) {
      return (
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "var(--accent-color-1)" }}
          className="px-3 py-2 sm:px-4 sm:py-3 bg-bg-theme-2 text-lg rounded-[50%] border-2 border-accent-theme-1 font-semibold cursor-pointer"
          onClick={() => i18n.changeLanguage(lng)}
          key={lng + " " + theme}
        >
          {lng.toUpperCase()}
        </motion.button>
      );
    }
  });
};

export default Language;
