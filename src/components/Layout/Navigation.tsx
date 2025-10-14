import {useLocation, useNavigate} from "react-router";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher.tsx";
import Logo from "./Logo.tsx";
import ThemeSwitcher from "./ThemeSwitcher.tsx";

const Navigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const handleNavigation = (path: string) => {
    if (path === "/") {
      if (pathname !== "/") {
        navigate(path);
      }
      const element = document.getElementById("hero");
      element?.scrollIntoView({ behavior: "smooth" });
    } else if (path.startsWith("#")) {
      if (pathname !== "/") {
        navigate(path);
      }
      const element = document.querySelector(path);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="fixed flex justify-center w-full bg-bg-theme-1 border-b-1 border-accent-theme-1 z-2000">
      <div className="flex justify-between px-6 py-4 w-[1200px]">
        <div className="flex items-center gap-8">
          <Logo />
          <ul className="flex gap-7 h-full items-center">
            {/* TODO: Pseudo element na najechaniu (animacja) */}
            <motion.li onClick={() => handleNavigation("/")} whileHover={{ color: "var(--accent-color-1)" }} className="relative flex items-center h-full nav-underline cursor-pointer">{t("nav.home")}</motion.li>
            <motion.li onClick={() => handleNavigation("#about")} whileHover={{ color: "var(--accent-color-1)" }} className="relative flex items-center h-full nav-underline cursor-pointer">{t("nav.about")}</motion.li>
            <motion.li onClick={() => handleNavigation("#skills")} whileHover={{ color: "var(--accent-color-1)" }} className="relative flex items-center h-full nav-underline cursor-pointer">{t("nav.skills")}</motion.li>
            <motion.li onClick={() => handleNavigation("#projects")} whileHover={{ color: "var(--accent-color-1)" }} className="relative flex items-center h-full nav-underline cursor-pointer">{t("nav.projects")}</motion.li>
            <motion.li onClick={() => handleNavigation("#contact")} whileHover={{ color: "var(--accent-color-1)" }} className="relative flex items-center h-full nav-underline cursor-pointer">{t("nav.contact")}</motion.li>
          </ul>
        </div>
        <div className="flex justify-between items-center gap-4">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
