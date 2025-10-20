import { Outlet } from "react-router";
import {lazy} from "react";
import { ThemeProvider, useTheme } from "next-themes";
import Navigation from "../components/Layout/Navigation/Navigation.tsx";
import AnimatedBackground from "../components/UI/AnimatedBackground.tsx";
const Footer = lazy(() => import("../components/Layout/Footer/Footer.tsx"));

const RootLayout = () => {
  const { resolvedTheme } = useTheme();

  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme={resolvedTheme}>
      <AnimatedBackground />
      <Navigation />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default RootLayout;
