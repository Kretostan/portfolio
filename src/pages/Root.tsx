import { Outlet } from "react-router";
import { ThemeProvider, useTheme } from "next-themes";
import { AnimatePresence } from "framer-motion";
import Navigation from "../components/Layout/Navigation.tsx";

const RootLayout = () => {
  const { resolvedTheme } = useTheme();

  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme={resolvedTheme}>
      <div className="animated-backround">
        <div className="orb"></div>
        <div className="orb"></div>
        <div className="orb"></div>
      </div>
      <Navigation />
      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default RootLayout;
