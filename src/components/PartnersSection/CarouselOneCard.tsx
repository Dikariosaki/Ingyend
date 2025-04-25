// CarouselOneCard.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Card, { CardProps } from "../CardCarousel/CardComponent";

interface CarouselProps {
  cards: CardProps[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  if (!cards || cards.length === 0) {
    return <div className="p-4 text-center">No cards available</div>;
  }

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
      x: direction > 0 ? '100%' : '-100%',
      opacity: 1,
      position: 'absolute',
      width: '100%'
    }),
    center: { 
      x: 0, 
      opacity: 1,
      position: 'absolute',
      width: '100%',
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 1,
      position: 'absolute',
      width: '100%',
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
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
    <div className="relative mx-auto h-[400px] w-full max-w-sm overflow-hidden rounded-lg">
      <div className="relative h-full w-full rounded-lg overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants as any}
            initial="enter"
            animate="center"
            exit="exit"
            className="h-full w-full rounded-lg overflow-hidden"
          >
            <Card {...cards[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Botón para ir a la tarjeta anterior - Transparente con sombra */}
      <button
        onClick={prevCard}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-transparent p-2 text-white shadow-lg backdrop-blur-sm focus:outline-none"
        aria-label="Anterior"
        style={{ 
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          backgroundColor: 'rgba(255, 255, 255, 0.2)'
        }}
      >
        <MdKeyboardArrowLeft size={24} />
      </button>

      {/* Botón para ir a la siguiente tarjeta - Transparente con sombra */}
      <button
        onClick={nextCard}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-transparent p-2 text-white shadow-lg backdrop-blur-sm focus:outline-none"
        aria-label="Siguiente"
        style={{ 
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          backgroundColor: 'rgba(255, 255, 255, 0.2)'
        }}
      >
        <MdKeyboardArrowRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;
