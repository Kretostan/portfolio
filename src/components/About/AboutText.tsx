import { JSX, useState } from "react";
import { motion } from "framer-motion";

import { aboutTextsPolish } from "../../data/about";
import useIsMobile from "../../hooks/useIsMobile";
import AboutButton from "./AboutButton";

const AboutText = () => {
    const isMobile: boolean = useIsMobile();
    const [currentText, setCurrentText] = useState<number>(0);

    const changeTextHandler = (next: boolean): void => {
        setCurrentText((prevState): number => next ? prevState + 1 : prevState - 1);
    }

    const isNext: boolean = currentText >= 0 && currentText < aboutTextsPolish.length - 1;
    const isPrevious: boolean = currentText > 0 && currentText <= aboutTextsPolish.length - 1;

    return <div className="flex flex-col justify-between items-center mx-4 sm:mx-0 py-3 w-1/2 text-center">
        {/* TODO: Zrobić animacje pojawiania się kolejnych tekstów */}
        <div className="flex items-center">
            {isMobile ? null : <AboutButton previous onPress={() => changeTextHandler(false) } next={isPrevious} /> as JSX.Element}
            <motion.p
                className="flex items-center px-4 py-8 w-2/3 bg-bg-theme-2 rounded-[10px]"
                drag={isMobile ? 'x' : false}
                dragConstraints={isMobile ? { left: 0, right: 0 } : undefined}
                onDragEnd={(event, info): void => {
                    if (!isMobile) return;
                    if (info.offset.x < 0 && isNext) {
                      changeTextHandler(true)
                    }
                    if (info.offset.x > 0 && isPrevious) {
                      changeTextHandler(false)
                    }
                }}
            >
                {aboutTextsPolish[currentText]}
            </motion.p>
            {isMobile ? null : <AboutButton onPress={() => changeTextHandler(true)} next={isNext} /> as JSX.Element}
        </div>
        <motion.p
            className={`${!isMobile && "hidden"} text-xs text-accent-theme-1`}
            initial={{
                color: "var(--accent-color-1)",
                visibility: "visible",
            }}
            animate={{
                color: "var(--accent-color-2)",
                visibility: isNext ? "visible" : "hidden",
                transition: {
                    duration: isNext? 1 : 0.1,
                    type: "tween",
                    repeat: isNext ? Infinity : 0,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }
            }}
            key={currentText}
        >
            Przesuń w bok, aby zobaczyć więcej
        </motion.p>
    </div>
}

export default AboutText;