import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Button = ({ children }: { children: string }) => {
    const { resolvedTheme } = useTheme();

    return <motion.button
        className="px-6 py-2 border-1 border-none text-[#fff] rounded-xl cursor-pointer bg-accent-theme-1"
        whileHover={{ opacity: 0.85, backgroundColor: "var(--accent-color-2)" }}
        key={resolvedTheme}
    >
        {children}
    </motion.button>
}

export default Button