import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,html}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["Poppins", "sans-serif"],
        text: ["Fira Code", "sans-serif"],
      },
      colors: {
        "accent-theme-1": "var(--accent-color-1)",
        "accent-theme-2": "var(--accent-color-2)",
        "bg-theme-1": "var(--background-1)",
        "bg-theme-2": "var(--background-2)",
        "bg-content": "var(--background-content)",
        "text-theme-1": "var(--foreground-1)",
        "text-theme-2": "var(--foreground-2)",
        "error-input-backgroundColor": "#f8d7da",
        "error-input-borderColor": "#E74c3c",
        "error-label-color": "#dc3545",
      },
      backgroundImage: ({ theme }) => ({
        "gradient-logo": `linear-gradient(90deg, ${theme("colors.accent-1")}, ${theme("colors.accent-2")}, ${theme("colors.accent-3")})`,
        "gradient-button": `linear-gradient(90deg, ${theme("colors.accent-theme-1")}, ${theme("colors.accent-theme-2")})`,
        "gradient-vertical": `linear-gradient(180deg, ${theme("colors.accent-2")}, ${theme("colors.accent-3")})`,
      }),
      boxShadow: {
        "own-shadow": "box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [forms()],
} satisfies Config;
