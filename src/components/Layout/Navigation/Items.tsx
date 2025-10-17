import {motion} from "framer-motion";
import {useLocation, useNavigate} from "react-router";
import {useTranslation} from "react-i18next";
import {useTheme} from "next-themes";
import useIsMobile from "../../../hooks/useIsMobile.ts";

const NavigationItems = ({ setMenu }: { setMenu?: (open: boolean) => void}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();
  const { pathname } = useLocation();
  const isMobile = useIsMobile();

  const handleNavigation = (path: string) => {
    if (path.startsWith("#")) {
      const sectionId = path.replace("#", "");
      navigate("/", { state: { scrollTo: sectionId }});
    } else if (path === "/" && pathname === "/") {
      const sectionId = "hero";
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  return <ul className={`flex ${isMobile && "flex-col"} nav items-center gap-7 h-full`}>
    <motion.li onClick={() => {
      handleNavigation("/");
      setMenu?.(false);
    }} whileHover={{ color: "var(--accent-color-1)" }} className={`relative flex items-center h-full nav-underline cursor-pointer ${isMobile && "text-lg"}`} key={resolvedTheme + " Home"}>{t("nav.home")}</motion.li>
    <motion.li onClick={() => {
      handleNavigation("#about");
      setMenu?.(false);
    }} whileHover={{ color: "var(--accent-color-1)" }} className={`relative flex items-center h-full nav-underline cursor-pointer ${isMobile && "text-lg"}`} key={resolvedTheme + " About"}>{t("nav.about")}</motion.li>
    <motion.li onClick={() => {
      handleNavigation("#skills");
      setMenu?.(false);
    }} whileHover={{ color: "var(--accent-color-1)" }} className={`relative flex items-center h-full nav-underline cursor-pointer ${isMobile && "text-lg"}`} key={resolvedTheme + " Skills"}>{t("nav.skills")}</motion.li>
    <motion.li onClick={() => {
      handleNavigation("#projects");
      setMenu?.(false);
    }} whileHover={{ color: "var(--accent-color-1)" }} className={`relative flex items-center h-full nav-underline cursor-pointer ${isMobile && "text-lg"}`} key={resolvedTheme + " Projects"}>{t("nav.projects")}</motion.li>
    <motion.li onClick={() => {
      handleNavigation("#contact");
      setMenu?.(false);
    }} whileHover={{ color: "var(--accent-color-1)" }} className={`relative flex items-center h-full nav-underline cursor-pointer ${isMobile && "text-lg"}`} key={resolvedTheme + " Contact"}>{t("nav.contact")}</motion.li>
  </ul>;
}

export default NavigationItems;
