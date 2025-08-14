import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import axios from "axios";

import type { RootState, AppDispatch } from "../../store/store";
import { setShowMenu } from "../../store/menuSlice";

const Navigation = () => {
  const dispatch: AppDispatch = useDispatch();
  const { resolvedTheme } = useTheme();
  const showMenu = useSelector((state: RootState) => state.menu.showMenu);
  const auth = useSelector((state: RootState) => state.auth);

  const handleLogout = async () => {
    await axios.post(
      import.meta.env.VITE_API_URL + "/logout",
      {},
      { withCredentials: true },
    );
    window.location.reload();
  };

  return (
    <motion.nav className="flex gap-4">
      {auth.token && (
        <motion.button
          className="flex justify-center items-center px-3 py-2 text-lg md:text-xl rounded-lg cursor-pointer"
          onClick={handleLogout}
          whileHover={{
            color: "var(--opposite-foreground-1)",
            backgroundColor: "var(--opposite-background-2)",
          }}
          transition={{ type: "tween", duration: 0.4 }}
          key={resolvedTheme + "logout"}
        >
          Logout
        </motion.button>
      )}
      <motion.button
        className="flex justify-center items-center px-3 py-2 text-lg md:text-xl rounded-lg cursor-pointer"
        onClick={() => dispatch(setShowMenu(!showMenu))}
        whileHover={{
          color: "var(--opposite-foreground-1)",
          backgroundColor: "var(--opposite-background-2)",
        }}
        transition={{ type: "tween", duration: 0.4 }}
        key={resolvedTheme}
      >
        {!showMenu ? "Menu" : "Close"}
      </motion.button>
    </motion.nav>
  );
};

export default Navigation;
