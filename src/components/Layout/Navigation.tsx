import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import axios from "axios";
import { useTranslation } from "react-i18next";

import type { RootState, AppDispatch } from "../../store/store";
import { setShowMenu } from "../../store/menuSlice";

const Navigation = () => {
  const dispatch: AppDispatch = useDispatch();
  const { resolvedTheme } = useTheme();
  const showMenu = useSelector((state: RootState) => state.menu.showMenu);
  const auth = useSelector((state: RootState) => state.auth);
  const { t, i18n } = useTranslation();

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
      {i18n.languages.map((lng) => {
        const shortLng = lng.split("-")[0];
        if (shortLng !== i18n.resolvedLanguage) {
          return (
            <button onClick={() => i18n.changeLanguage(lng)} key={lng}>
              {lng.toUpperCase()}
            </button>
          );
        }
      })}
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
        className="flex justify-center items-center py-2 sm:text-lg rounded-lg cursor-pointer w-[70px] sm:w-[80px]"
        onClick={() => dispatch(setShowMenu(!showMenu))}
        whileHover={{
          color: "var(--opposite-foreground-1)",
          backgroundColor: "var(--opposite-background-2)",
        }}
        transition={{ type: "tween", duration: 0.4 }}
        key={resolvedTheme}
      >
        {!showMenu ? "Menu" : t("menu.button")}
      </motion.button>
    </motion.nav>
  );
};

export default Navigation;
