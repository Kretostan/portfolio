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
          <MenuItem>{t("menu.first")}</MenuItem>
          <MenuItem>{t("menu.second")}</MenuItem>
          <MenuItem>{t("menu.third")}</MenuItem>
          <MenuItem>{t("menu.fourth")}</MenuItem>
          <MenuItem>{t("menu.fifth")}</MenuItem>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default Menu;
