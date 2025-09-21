import { useTranslation } from "react-i18next";

import Title from "../components/UI/Title";
import AboutText from "../components/About/AboutText";
import AboutImage from "../components/About/AboutImage.tsx";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Title>{t("about.title")}</Title>
      <div className="flex flex-col justify-center items-center gap-6 sm:gap-4 py-8 sm:py-16">
        <p className="max-w-[400px] sm:max-w-full text-center md:text-lg">{t("about.subtitle")}</p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-14 sm:gap-20 py-10 w-full rounded-xl">
          <AboutText />

          <div className="w-1/2 sm:w-1/3 lg:w-1/4"><AboutImage /></div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
