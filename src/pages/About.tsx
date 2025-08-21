import { useTranslation } from "react-i18next";

import Title from "../components/UI/Title";
import AboutText from "../components/About/AboutText";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Title>{t("about.title")}</Title>
      <div className="flex flex-col justify-center items-center">
        <p>{t("about.subtitle")}</p>
        <div className="flex flex-col lg:flex-row justify-center items-center h-full rounded-xl">
          <AboutText />
          <div className="relative h-full w-1/4">
            <img
              src="https://kretostan-portfolio.s3.eu-north-1.amazonaws.com/about.png"
              alt="Kretostan's photo"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
