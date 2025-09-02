import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

import type { RootState } from "../../store/store";
import { setCurrentPage, setShowMenu } from "../../store/menuSlice";

export const MenuItem = ({
  children,
  path,
}: {
  children: string;
  path: string;
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentPage = useSelector((state: RootState) => state.menu.currentPage);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const activePageStyle =
    currentPage === children || (currentPage === "/" && children === "Home");

  const setCurrentPageHandler = (pageRoute: string): void => {
    if (pageRoute === "Home") {
      navigate("/");
    } else {
      navigate(pageRoute.toLowerCase());
    }
    dispatch(setCurrentPage(pageRoute));
    dispatch(setShowMenu(false));
  };

  const itemVariants = {
    initial: { x: 90, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 90, opacity: 0 },
  };

  return (
    <motion.li
      key={children}
      variants={itemVariants}
      transition={{ type: "tween" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setCurrentPageHandler(path)}
      className={`relative flex justify-center items-center py-3 sm:py-5 text-lg md:text-xl`}
    >
      {children}
      <motion.span
        initial={{
          width: 0,
          left: "50%",
        }}
        animate={{
          width: isHovered || activePageStyle ? "100%" : "0%",
          left: isHovered || activePageStyle ? "0" : "50%",
        }}
        transition={{ type: "tween", duration: 0.3 }}
        className={`absolute bottom-0 h-0.5 bg-accent-theme-2 cursor-pointer ${activePageStyle}`}
      />
    </motion.li>
  );
};
export default MenuItem;
