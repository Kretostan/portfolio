import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import MenuItem from "./MenuItem";

const Menu = ({ showMenu }: { showMenu: boolean }) => {
  const { t } = useTranslation();

  const menuVariants = {
    initial: { x: 90 },
    animate: { x: 0 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      {showMenu && (
        <motion.ul
          key="menu"
          variants={menuVariants}
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.07, type: "tween" }}
          exit="exit"
          className="flex flex-1 flex-col justify-around gap-10 py-8"
        >
          <MenuItem path="Home" active={location.pathname === "/"}>{t("menu.first")}</MenuItem>
          <MenuItem path="About" active={location.pathname === "/about"}>{t("menu.second")}</MenuItem>
          <MenuItem path="Skills" active={location.pathname === "/skills"}>{t("menu.third")}</MenuItem>
          <MenuItem path="Projects" active={location.pathname === "/projects"}>{t("menu.fourth")}</MenuItem>
          <MenuItem path="Contact" active={location.pathname === "/contact"}>{t("menu.fifth")}</MenuItem>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default Menu;
