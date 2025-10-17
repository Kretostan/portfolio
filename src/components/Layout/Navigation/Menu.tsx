import {motion} from "framer-motion";

type MenuProps = {
  isMenu: boolean;
  setMenu: (open: boolean) => void;
};

const Menu = ({ isMenu, setMenu }: MenuProps) => {
  return <motion.button
    whileHover={{ scale: 1.1, backgroundColor: "var(--accent-color-1)" }}
    className={`relative py-2 sm:px-4 sm:py-3 h-[48px] w-[48px] sm:h-[56px] sm:w-[56px] ${isMenu ? "bg-accent-theme-1" : "bg-bg-theme-2"} rounded-[50%] border-2 border-accent-theme-1 font-semibold cursor-pointer menu-button`}
    onClick={() => setMenu(!isMenu)}
  >
    <div className="menu"></div>
  </motion.button>;
};

export default Menu;
