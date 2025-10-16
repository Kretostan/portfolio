import {useLocation, useNavigate} from "react-router";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";
import {useTheme} from "next-themes";
import LanguageSwitcher from "./LanguageSwitcher.tsx";
import Logo from "./Logo.tsx";
import ThemeSwitcher from "./ThemeSwitcher.tsx";

const Navigation = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();
  const { pathname } = useLocation();

  const handleNavigation = (path: string) => {
    if (path.startsWith("#")) {
      const sectionId = path.replace("#", "");
      if (pathname === "/") {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/", { state: { scrollTo: sectionId }});
      }
    } else if (path === "/" && pathname === "/") {
      const sectionId = "hero";
      const element = document.getElementById(sectionId);
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
            <motion.li onClick={() => handleNavigation("/")} whileHover={{ color: "var(--accent-color-1)" }} className="relative flex items-center h-full nav-underline cursor-pointer" key={resolvedTheme + " Home"}>{t("nav.home")}</motion.li>
            <motion.li onClick={() => handleNavigation("#about")} whileHover={{ color: "var(--accent-color-1)" }} className="relative flex items-center h-full nav-underline cursor-pointer" key={resolvedTheme + " About"}>{t("nav.about")}</motion.li>
            <motion.li onClick={() => handleNavigation("#skills")} whileHover={{ color: "var(--accent-color-1)" }} className="relative flex items-center h-full nav-underline cursor-pointer" key={resolvedTheme + " Skills"}>{t("nav.skills")}</motion.li>
            <motion.li onClick={() => handleNavigation("#projects")} whileHover={{ color: "var(--accent-color-1)" }} className="relative flex items-center h-full nav-underline cursor-pointer" key={resolvedTheme + " Projects"}>{t("nav.projects")}</motion.li>
            <motion.li onClick={() => handleNavigation("#contact")} whileHover={{ color: "var(--accent-color-1)" }} className="relative flex items-center h-full nav-underline cursor-pointer" key={resolvedTheme + " Contact"}>{t("nav.contact")}</motion.li>
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
