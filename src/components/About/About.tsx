import { useTranslation } from "react-i18next";

import AboutText from "../About/AboutText";
import AboutImage from "../About/AboutImage.tsx";

const About = () => {
  const { t } = useTranslation();

  return <section id="about" className="relative flex items-center justify-center w-screen bg-bg-theme-1">
    <div className="flex flex-col gap-10 py-16 max-w-[1200px]">
      <h2 className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 lg:gap-6 text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-accent-theme-1 to-accent-theme-2 font-header z-1500">
        {t("about.title")}
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-14 sm:gap-20 py-10 w-full rounded-xl">
        <AboutText />
        <AboutImage />
      </div>
    </div>
  </section>;
};

export default About;
