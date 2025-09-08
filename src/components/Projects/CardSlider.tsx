import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { Description } from "../../@types";

import Button from "../UI/Button.tsx";

type CardSliderType = {
  description: [Description, Description, Description, Description];
};

type Lang = "pl" | "en";

const CardSlider = ({ description }: CardSliderType) => {
  const [card, setCard] = useState<number>(0);
  const { i18n } = useTranslation();

  const lang: "pl" | "en" = i18n.language as Lang;

  const nextCard = () => {
    setCard((prev) => (prev + 1) % description.length);
  };

  const visibleCards = [
    description[card % description.length],
    description[(card + 1) % description.length],
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-6 pt-8">
      <div className="relative min-h-[375px] w-80">
        <AnimatePresence>
          {visibleCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, x: index * 150 }}
              animate={{
                opacity: index === 0 ? 1 : 0.65,
                x: index * 150,
                scale: 1 - index * 0.1,
              }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 flex flex-col gap-6 px-6 py-4 min-h-[375px] w-80 rounded-2xl border-2 border-accent-theme-2 shadow-2xl bg-bg-content"
              style={{ zIndex: description.length - index }}
            >
              <h3 className="pb-3 text-lg sm:text-1xl lg:text-2xl text-center font-semibold border-b-2 border-accent-theme-2">
                {card.title[lang]}
              </h3>
              {card.id === 1 ? (
                <p className="max-w-[500px]">{card.text[lang][0]}</p>
              ) : (
                <ul
                  className={`flex flex-col gap-2 ${(card.id === 3 || card.id === 4) && "px-4"}`}
                >
                  {card.text[lang].map((text, index) => (
                    <li key={index}>- {text}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <Button className="text-lg" onClick={nextCard}>
        Next
      </Button>
    </div>
  );
};

export default CardSlider;
