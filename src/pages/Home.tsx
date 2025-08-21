import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Title from "../components/UI/Title";
import { setCurrentPage, setShowMenu } from "../store/menuSlice.ts";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-around items-center gap-28 my-auto py-6 sm:py-16 h-full text-center">
      <Title>
        <div className="flex gap-1">
          {t("home.title-1")}
          <span className="flex gap-2">
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -12, 12, 0] }}
              style={{ transformOrigin: "bottom" }}
            >
              👋
            </motion.span>
          </span>
        </div>
        {t("home.title-2")}
      </Title>
      <p>{t("home.subtitle")}</p>
      <div className="flex flex-col justify-center items-center gap-6">
        <p className="flex flex-col md:flex-row gap-2 px-2 md:text-lg text-center">
          {t("home.buttonDesc")}
        </p>
        <motion.button
          aria-label="Go to About page"
          className="px-5 md:px-6 py-2 lg:text-lg bg-gradient-button text-white rounded-lg cursor-pointer"
          onClick={() => {
            navigate("/about");
            dispatch(setCurrentPage("About"));
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
