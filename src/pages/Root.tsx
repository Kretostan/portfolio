import {lazy} from "react";
import { Outlet } from "react-router";
import { ThemeProvider, useTheme } from "next-themes";
import Navigation from "../components/Layout/Navigation/Navigation.tsx";
import Footer from "../components/Layout/Footer/Footer.tsx";

const RootLayout = () => {
  const { resolvedTheme } = useTheme();

  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme={resolvedTheme}>
      <Navigation />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default RootLayout;
