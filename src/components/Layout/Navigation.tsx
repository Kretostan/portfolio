import LanguageSwitcher from "./LanguageSwitcher.tsx";
import Logo from "./Logo.tsx";
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import NavigationItems from "./NavigationItems.tsx";
import useIsMobile from "../../hooks/useIsMobile.ts";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    }
  })

  return <nav id="nav" className={`fixed flex flex-col justify-center items-center ${isMenuOpen && isMobile && "h-screen"} ${!isMobile && "border-b-1 border-accent-theme-1"} w-full bg-bg-theme-1 z-2000 overflow-hidden`}>
    <div className={`flex justify-between pl-1 pr-2 sm:px-6 py-4 max-w-[1200px] w-full ${isMobile && "border-b-1 border-accent-theme-1"}`}>
      <div className="flex items-center gap-8">
        <Logo />
        {!isMobile && <NavigationItems />}
      </div>
      <div className="flex justify-between items-center gap-3 sm:gap-4">
        <LanguageSwitcher />
        <ThemeSwitcher />
        {isMobile && <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "var(--accent-color-1)" }}
          className={`relative py-2 sm:px-4 sm:py-3 h-[48px] w-[48px] sm:h-[56px] sm:w-[56px] ${isMenuOpen ? "bg-accent-theme-1" : "bg-bg-theme-2"} rounded-[50%] border-2 border-accent-theme-1 font-semibold cursor-pointer menu-button`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="menu"></div>
        </motion.button>}
      </div>
    </div>
    {isMenuOpen && isMobile && <div className={`flex justify-center items-center h-full w-full bg-bg-content`}>
      <NavigationItems setMenu={setIsMenuOpen} />
    </div>}
  </nav>
};

export default Navigation;
