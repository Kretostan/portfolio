import { useTranslation } from "react-i18next";

import AboutText from "../About/AboutText";
import AboutImage from "../About/AboutImage.tsx";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-bg-theme-1">
      <h3 className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 lg:gap-6 text-4xl font-black text-accent-theme-2 font-header">{t("about.title")}</h3>
      <div className="flex flex-col justify-center items-center gap-6 sm:gap-4 py-8 sm:py-16">
        <p className="max-w-[400px] sm:max-w-full text-center md:text-lg">{t("about.subtitle")}</p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-14 sm:gap-20 py-10 w-full rounded-xl">
          <AboutText />
          <div className="w-1/2 sm:w-1/3 lg:w-1/4">
            <AboutImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
