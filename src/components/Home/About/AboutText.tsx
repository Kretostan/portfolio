import { useState } from "react";
import { motion, type PanInfo } from "framer-motion";
import { useTranslation } from "react-i18next";

import {useIsMobile} from "../../hooks";
import AboutButton from "./AboutButton";

const AboutText = () => {
  const isMobile = useIsMobile();
  const [currentText, setCurrentText] = useState<number>(1);
  const { t, i18n } = useTranslation();

  const aboutLength: number = i18n.getResource(
    "en",
    "ns1",
    `about.text-${currentText}.length`,
  );
  const isNext = currentText >= 1 && currentText < aboutLength - 1;
  const isPrev = currentText > 1 && currentText <= aboutLength - 1;

  const textsEN = i18n.getResource("en", "ns1", `about.text-${currentText}`) as string[];
  const textsPL = i18n.getResource("pl", "ns1", `about.text-${currentText}`) as string[];
  const texts = i18n.language === "en" ? textsEN : textsPL;

  const changeTextHandler = (next: boolean) => {
    setCurrentText((prevState) => (next ? prevState + 1 : prevState - 1));
  };

  const changeTextMobileHandler = (info: PanInfo) => {
    if (!isMobile) return;
    if (info.offset.x < -75 && isNext) {
      changeTextHandler(true);
    }
    if (info.offset.x > 75 && isPrev) {
      changeTextHandler(false);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center">
      <div className="flex items-center justify-center gap-2">
        {!isMobile && (
          <AboutButton
            previous
            onPress={() => changeTextHandler(false)}
            next={isPrev}
          />
        )}
        <motion.div
          drag={isMobile ? "x" : false}
          dragConstraints={isMobile ? { left: 0, right: 0 } : undefined}
          onDragEnd={(_event, info) => changeTextMobileHandler(info)}
          className="flex flex-col items-center gap-6 px-8 sm:px-10 py-7 mx-6 sm:mx-0 min-h-[33em] md:min-h-[28em] w-full max-w-[350px] md:max-w-[400px] bg-bg-theme-2 rounded-2xl"
        >
          <h3 className="text-accent-theme-1 font-semibold text-2xl">{t(`about.subtitle-${currentText}`)}</h3>
          <div
            className="flex flex-col gap-6"
            key={currentText}
          >
            {texts.map((text, index) => <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className=""
              key={index + i18n.language}
            >{text}</motion.p>)}
          </div>
        </motion.div>
        {!isMobile && (
          <AboutButton onPress={() => changeTextHandler(true)} next={isNext} />
        )}
      </div>
      <motion.p
        className={`${!isMobile && "hidden"} py-3 text-xs text-accent-theme-1`}
        initial={{
          color: "var(--accent-color-1)",
          visibility: "visible",
        }}
        animate={{
          color: "var(--accent-color-2)",
          visibility: isNext ? "visible" : "hidden",
          transition: {
            duration: isNext ? 1 : 0.1,
            type: "tween",
            repeat: isNext ? Infinity : 0,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
        key={currentText}
      >
        {t("about.swipeHint")}
      </motion.p>
    </div>
  );
};

export default AboutText;
