import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Opis",
    titleEn: "Description",
    text: [
      "Prosta i intuicyjna aplikacja pogodowa zbudowana w architekturze full-stack. Umożliwia sprawdzenie aktualnej pogody w dowolnej lokalizacji oraz prostą zmianę jednostek temperatury między Celsjuszem i Fahrenheitem.",
    ],
    textEn: [
      "A modern weather application built with a full-stack architecture. It allows users to check real-time weather conditions for any location and easily switch between Celsius and Fahrenheit.",
    ],
  },
  {
    id: 2,
    title: "Funkcjonalności",
    titleEn: "Key Features",
    text: [
      "Wyszukiwanie pogody w wybranym mieście",
      "Wyświetlanie temperatury oraz ikony",
      "Przełącznik temperatury °C ↔ °F",
      "Responsywny, przyjazny interfejs",
      "Płynne animacje z Framer Motion",
    ],
    textEn: [
      "Search for weather in a selected city",
      "Display of temperature and icon",
      "Temperature toggle °C ↔ °F",
      "Responsive, user-friendly interface",
      "Smooth animations with Framer Motion",
    ],
  },
  {
    id: 3,
    title: "Frontend",
    text: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Framer Motion",
      "Axios",
      "Vite",
      "TypeScript",
    ],
  },
  {
    id: 4,
    title: "Backend",
    text: [
      "Node.js",
      "Express.js",
      "Firebase Functions",
      "Firebase Admin",
      "Axios",
      "dotenv",
      "cors",
    ],
  },
];

const CardSlider = () => {
  const [card, setCard] = useState<number>(0);

  const nextCard = () => {
    setCard((prev) => (prev + 1) % cards.length);
  };

  const visibleCards = [
    cards[card % cards.length],
    cards[(card + 1) % cards.length],
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-10 pt-8">
      <div className="relative min-h-[375px] w-80">
        <AnimatePresence>
          {visibleCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: index * 175, scale: 1 - index * 0.1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`absolute top-0 left-0 flex flex-col gap-6 px-4 py-4 min-h-[375px] w-80 rounded-2xl border-1 shadow-2xl bg-bg-content`}
              style={{ zIndex: cards.length - index }}
            >
              <h3 className="pb-3 text-lg sm:text-1xl lg:text-2xl text-center font-semibold border-b-2 border-accent-theme-2">
                {card.title}
              </h3>
              {card.id === 1 ? (
                <p className="max-w-[500px]">{card.text[0]}</p>
              ) : (
                <ul className="flex flex-col gap-2">
                  {card.text.map((text) => (
                    <li>- {text}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <motion.button
        onClick={nextCard}
        whileHover={{ backgroundColor: "var(--accent-color-1)" }}
        className="px-8 py-2 bg-accent-theme-2 rounded-xl shadow text-white cursor-pointer"
      >
        Next
      </motion.button>
    </div>
  );
};

export default CardSlider;
