import { useNavigate } from "react-router";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const BackButton = () => {
  const navigate = useNavigate();
  const { resolvedTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <motion.button
      whileHover={{
        backgroundColor: "var(--foreground-1)",
        color: "var(--background-1)",
      }}
      onClick={() => navigate("/projects")}
      className="cursor-pointer py-1.25 w-[80px] border-2 rounded-lg text-lg"
      key={resolvedTheme}
    >
      {t("projects.backBtn")}
    </motion.button>
  );
};

export default BackButton;
