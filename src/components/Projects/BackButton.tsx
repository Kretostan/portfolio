import { useNavigate } from "react-router";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const BackButton = () => {
  const navigate = useNavigate();
  const { resolvedTheme } = useTheme();

  return (
    <motion.button
      whileHover={{
        backgroundColor: "var(--foreground-1)",
        color: "var(--background-1)",
      }}
      onClick={() => navigate("/projects")}
      className="cursor-pointer px-4 py-1 border-1 rounded-lg text-lg"
      key={resolvedTheme}
    >
      Back
    </motion.button>
  );
};

export default BackButton;
