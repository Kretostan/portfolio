import {useTranslation} from "react-i18next";
import Button from "./Button.tsx";

const Hero = () => {
  const { t } = useTranslation();

  return <section id="hero" className="relative flex flex-col justify-center gap-8 px-4 h-screen max-w-[900px] w-full text-center z-1500" key="content">
    <h1 className="flex flex-col justify-center items-center gap-1 md:gap-4 text-transparent text-4xl sm:text-6xl font-black font-header bg-clip-text bg-linear-to-r from-accent-theme-1 to-accent-theme-2">
      {t("home.title-1")}
      <span>{t("home.title-2")}</span>
    </h1>
    <div className="flex flex-col justify-center items-center gap-10">
      <p className="px-5 text-base sm:text-xl">{t("home.subtitle")}</p>
      <Button />
    </div>
  </section>;
};

export default Hero;
