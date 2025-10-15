import { motion } from "framer-motion";
import { useTheme } from "next-themes";

type ButtonType = {
  children: string;
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, onClick, className }: ButtonType) => {
  const { resolvedTheme } = useTheme();

  return (
    <motion.button
      className={`px-6 py-3 font-semibold bg-accent-theme-2 text-[var(--opposite-foreground-1)] rounded-lg cursor-pointer ${className ? className : ""}`}
      whileHover={{ y: -3, boxShadow: "0 4px 10px 1px var(--accent-color-2)" }}
      onClick={onClick}
      key={resolvedTheme}
    >
      {children}
    </motion.button>
  );
};

export default Button;
