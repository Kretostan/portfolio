import { AnimatePresence, motion } from "framer-motion";

import MenuItem from "./MenuItem";

const Menu = ({ showMenu }: { showMenu: boolean }) => {
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
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Contact</MenuItem>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default Menu;
