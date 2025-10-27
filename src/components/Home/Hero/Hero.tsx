import {useTranslation} from "react-i18next";
import {useScroll, useTransform, motion} from "framer-motion";
import Button from "./Button.tsx";

const Hero = () => {
  const { t } = useTranslation();
  const { scrollY }= useScroll();

  const opacity = useTransform(scrollY, [600, 0], [0, 1]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return <section id="hero" className="relative flex flex-col justify-center px-4 h-screen max-w-[900px] w-full text-center z-1500" key="content">
    <motion.div style={{
      opacity,
      y,
      position: "sticky"
    }}>
      <h1 className="flex flex-col justify-center items-center gap-1 md:gap-4 text-transparent text-4xl sm:text-6xl font-black font-header bg-clip-text bg-linear-to-r from-accent-theme-1 to-accent-theme-2">
        {t("home.title-1")}
        <span>{t("home.title-2")}</span>
      </h1>
      <div className="flex flex-col justify-center items-center pt-8 gap-10">
        <p className="px-5 text-base sm:text-xl">{t("home.subtitle")}</p>
        <Button />
      </div>
    </motion.div>
  </section>;
};

export default Hero;
