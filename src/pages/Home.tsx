import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Title from "../components/UI/Title";
import { setShowMenu } from "../store/menuSlice.ts";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-around items-center gap-28 my-auto px-4 py-6 sm:py-16 h-full text-center">
      <Title>
        <div className="flex gap-1">
          {t("home.title-1")}
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, -12, 12, 0] }}
            style={{ transformOrigin: "bottom" }}
          >
            👋
          </motion.span>
        </div>
        <span className="leading-12">{t("home.title-2")}</span>
      </Title>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center gap-8 text-sm sm:text-base lg:text-lg">
          <p className="px-4">{t("home.subtitle")}</p>
          <p className="flex flex-col md:flex-row px-2">
            {t("home.buttonDesc")}
          </p>
        </div>
        <motion.button
          aria-label="Go to About page"
          className="px-5 md:px-6 py-2 lg:text-lg bg-gradient-button text-white rounded-lg cursor-pointer"
          onClick={() => {
            navigate("/about");
            dispatch(setShowMenu(false));
          }}
          whileHover={{ opacity: 0.75 }}
        >
          {t("home.homeButton")}
        </motion.button>
      </div>
    </div>
  );
};

export default App;
