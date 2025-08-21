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
      className={
        "px-6 py-2 bg-accent-theme-2 text-white rounded-lg cursor-pointer" +
        className
      }
      whileHover={{ opacity: 0.85, backgroundColor: "var(--accent-color-1)" }}
      onClick={onClick}
      key={resolvedTheme}
    >
      {children}
    </motion.button>
  );
};

export default Button;
