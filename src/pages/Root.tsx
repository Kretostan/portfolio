import { useEffect, useState } from "react";
import { useSelector, Provider } from "react-redux";
import { Outlet } from "react-router";
import { ThemeProvider, useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

import Header from "../components/Layout/Header.tsx";
import Menu from "../components/Menu/Menu.tsx";
import Footer from "../components/Layout/Footer.tsx";

import { store } from "../store/store.ts";
import type { RootState } from "../store/store.ts";

const RootLayout = () => {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const showMenu = useSelector((state: RootState) => state.menu.showMenu);

  useEffect((): void => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme={resolvedTheme}>
      <Provider store={store}>
        <div className="flex flex-col justify-center min-h-screen ">
          <Header />
          <main className="flex flex-1 justify-center w-full bg-bg-theme-1">
            <AnimatePresence mode="wait">
              {!showMenu ? (
                <motion.section
                  className="flex flex-col gap-10 sm:gap-14 py-14 max-w-[1200px]"
                  key="content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { type: "tween" } }}
                  exit={{ opacity: 0, transition: { type: "tween" } }}
                >
                  <Outlet />
                </motion.section>
              ) : (
                <section className="flex mx-auto">
                  <Menu showMenu={showMenu} />
                </section>
              )}
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Provider>
    </ThemeProvider>
  );
};

export default RootLayout;
