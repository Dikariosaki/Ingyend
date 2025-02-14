// CarouselOneCard.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Card, { CardProps } from "../CardCarousel/CardComponent";

interface CarouselProps {
  cards: CardProps[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [[currentIndex, direction], setIndex] = useState<[number, number]>([
    0, 0,
  ]);

  const nextCard = () =>
    setIndex(([prevIndex]) => [(prevIndex + 1) % cards.length, 1]);

  const prevCard = () =>
    setIndex(([prevIndex]) => [
      (prevIndex - 1 + cards.length) % cards.length,
      -1,
    ]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  // Auto cambio de tarjeta cada 4 segundos
  useEffect(() => {
    const AUTOCHANGE_TIME = 4000;
    const timer = setTimeout(() => {
      nextCard();
    }, AUTOCHANGE_TIME);
    return () => clearTimeout(timer);
  }, [currentIndex, cards]);

  return (
    <div className="relative mx-auto w-full max-w-sm overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          <Card {...cards[currentIndex]} />
        </motion.div>
      </AnimatePresence>

      {/* Botón para ir a la tarjeta anterior */}
      <button
        onClick={prevCard}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-gray-700 bg-transparent p-2 text-white opacity-90 hover:bg-gray-800 hover:opacity-80 dark:bg-gray-800 dark:hover:bg-gray-900 sm:left-0"
      >
        <MdKeyboardArrowLeft size={24} />
      </button>

      {/* Botón para ir a la siguiente tarjeta */}
      <button
        onClick={nextCard}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-gray-700 bg-transparent p-2 text-white hover:bg-gray-800 hover:opacity-80 dark:bg-gray-800 dark:hover:bg-gray-900 sm:right-0"
      >
        <MdKeyboardArrowRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;
