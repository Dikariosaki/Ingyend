import React, { useState, useEffect, useCallback } from "react";
import Card from "./CardComponent";

interface CardProps {
  imageSrc?: string;
  title: string;
  description: string;
  link: string;
  buttonText: string;
}

interface CarouselProps {
  cards: CardProps[];
}

const CardCarousel: React.FC<CarouselProps> = ({ cards }) => {
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(visibleCards); // Iniciamos en la primera carta real
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // Clonamos tarjetas para efecto infinito
  const clonedCards = React.useMemo(() => {
    if (cards.length <= visibleCards) return cards;
    return [
      ...cards.slice(-visibleCards), // Últimas tarjetas al inicio
      ...cards, // Tarjetas originales
      ...cards.slice(0, visibleCards), // Primeras tarjetas al final
    ];
  }, [cards, visibleCards]);

  // Configuración responsiva
  const updateVisibleCards = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) setVisibleCards(1);
    else if (width < 1024) setVisibleCards(2);
    else setVisibleCards(3);
  }, []);

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, [updateVisibleCards]);

  // Navegación sin límites
  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // Efecto para reinicio infinito suave
  useEffect(() => {
    if (currentIndex >= clonedCards.length - visibleCards) {
      setTransitionEnabled(false);
      setCurrentIndex(visibleCards);
    } else if (currentIndex < 0) {
      setTransitionEnabled(false);
      setCurrentIndex(clonedCards.length - visibleCards * 2);
    }
  }, [currentIndex, clonedCards.length, visibleCards]);

  // Reactivar transición después del ajuste
  useEffect(() => {
    if (!transitionEnabled) {
      const timer = setTimeout(() => setTransitionEnabled(true), 50);
      return () => clearTimeout(timer);
    }
  }, [transitionEnabled]);

  // Cálculo preciso de desplazamiento
  const getTransform = useCallback(() => {
    const slideWidth = 100 / visibleCards;
    return (currentIndex - visibleCards) * slideWidth;
  }, [currentIndex, visibleCards]);

  return (
    <div className="relative w-full overflow-hidden px-14 py-8">
      <div
        className={`flex transition-transform duration-500 ease-in-out ${
          !transitionEnabled && "transition-none"
        }`}
        style={{ transform: `translateX(-${getTransform()}%)` }}
      >
        {clonedCards.map((card, index) => (
          <div
            key={`${card.title}-${index - visibleCards}`} // Key único real
            className="flex-shrink-0 transition-all duration-300"
            style={{
              width: `${100 / visibleCards}%`,
              minWidth: `${100 / visibleCards}%`,
            }}
          >
            <div className="mx-2">
              <Card {...card} />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-4 text-2xl text-white shadow-lg transition-all hover:scale-110 hover:bg-black/50"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-4 text-2xl text-white shadow-lg transition-all hover:scale-110 hover:bg-black/50"
      >
        ›
      </button>
    </div>
  );
};

export default CardCarousel;
