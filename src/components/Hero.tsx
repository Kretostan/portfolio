import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return <motion.section
    id="hero"
    className="flex flex-col justify-center items-center gap-8 px-4 h-screen max-w-[1200px] text-center"
    key="content"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { type: "tween" } }}
    exit={{ opacity: 0, transition: { type: "tween" } }}
  >
    {/* TODO: Zrobić text gradient na tytule */}
    <h1 className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 lg:gap-6 text-6xl font-black font-header">
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
      <span>{t("home.title-2")}</span>
    </h1>
    <div className="flex flex-col justify-center items-center gap-10">
      <p className="px-4 text-xl">{t("home.subtitle")}</p>
      <motion.button
        initial={{ boxShadow: "none" }}
        animate={{ boxShadow: "0 5px 15px 0px var(--accent-color-1)" }}
        aria-label="Go to About page"
        className="px-10 py-4 lg:text-lg bg-gradient-button text-[var(--opposite-foreground-1)] font-semibold rounded-4xl cursor-pointer"
        onClick={() => {
          const element = document.getElementById("projects");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
        whileHover={{ y: -3, boxShadow: "0px 8px 20px 5px var(--accent-color-1)" , transition: { type: "tween" } }}
      >
        {t("home.button")}
      </motion.button>
    </div>
  </motion.section>;
};

export default Hero;
