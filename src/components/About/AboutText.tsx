import { useState } from "react";
import { motion, type PanInfo } from "framer-motion";
import { useTranslation } from "react-i18next";

import useIsMobile from "../../hooks/useIsMobile";
import AboutButton from "./AboutButton";

const AboutText = () => {
  const isMobile = useIsMobile();
  const [currentText, setCurrentText] = useState<number>(0);
  const { t, i18n } = useTranslation();

  const aboutLength: number = i18n.getResource(
    "en",
    "ns1",
    "about.paragraphs.length",
  );
  const isNext = currentText >= 0 && currentText < aboutLength - 1;
  const isPrev = currentText > 0 && currentText <= aboutLength - 1;

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
    <div className="flex flex-col justify-between items-center max-w-[700px] text-center">
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
          className="flex items-center px-6 py-10 mx-10 sm:mx-0 h-[180px] md:h-[200px] w-full max-w-[350px] md:max-w-[400px] bg-bg-theme-2 rounded-2xl border-1"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:text-lg"
            key={currentText}
          >
            {t(`about.paragraphs.${currentText}`)}
          </motion.p>
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
        {t("about.mobileSwipeHint")}
      </motion.p>
    </div>
  );
};

export default AboutText;
