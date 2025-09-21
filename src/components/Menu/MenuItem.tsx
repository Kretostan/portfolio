import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

import { setShowMenu } from "../../store/menuSlice";

export const MenuItem = ({
  children,
  path,
  active,
}: {
  children: string;
  path: string;
  active: boolean;
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const setCurrentPageHandler = () => {
    if (path === "Home") {
      navigate("/");
    } else {
      navigate(path.toLowerCase());
    }
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
      onClick={setCurrentPageHandler}
      className={`relative flex justify-center items-center py-3 sm:py-5 text-lg md:text-xl cursor-pointer`}
    >
      {children}
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: isHovered || active ? "80px" : "0" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="absolute bottom-0 h-0.5 bg-accent-theme-2"
      />
    </motion.li>
  );
};
export default MenuItem;
