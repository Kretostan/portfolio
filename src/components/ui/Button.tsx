import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Button = ({ children }: { children: string }) => {
  const { resolvedTheme } = useTheme();

  return (
    <motion.button
      className="px-6 py-2 bg-accent-theme-2 text-white rounded-lg cursor-pointer"
      whileHover={{ opacity: 0.85, backgroundColor: "var(--accent-color-1)" }}
      key={resolvedTheme}
    >
      {children}
    </motion.button>
  );
};

export default Button;
