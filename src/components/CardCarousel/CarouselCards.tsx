import React, { useState, useEffect, useCallback, useRef } from "react";
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
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showControls?: boolean;
  cardGap?: number;
}

const CardCarousel: React.FC<CarouselProps> = ({ 
  cards,
  autoPlay = false,
  autoPlayInterval = 5000,
  showControls = true,
  cardGap = 16 // 16px gap between cards
}) => {
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Prepare cards for infinite loop effect
  const preparedCards = useCallback(() => {
    if (!cards.length) return [];
    if (cards.length <= visibleCards) return [...cards];
    
    return [
      ...cards.slice(-visibleCards), // Last cards at the beginning
      ...cards,                      // Original cards
      ...cards.slice(0, visibleCards) // First cards at the end
    ];
  }, [cards, visibleCards]);

  const clonedCards = React.useMemo(() => preparedCards(), [preparedCards]);
  
  // Adjust visible cards based on screen size
  const updateVisibleCards = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) {
      setVisibleCards(1);
    } else if (width < 1024) {
      setVisibleCards(2);
    } else {
      setVisibleCards(3);
    }
  }, []);

  // Initialize responsive behavior
  useEffect(() => {
    updateVisibleCards();
    
    // Set initial index to show first set of actual cards
    setCurrentIndex(visibleCards);
    
    const handleResize = () => {
      updateVisibleCards();
      // Reset position when screen size changes
      setTransitionEnabled(false);
      setCurrentIndex(visibleCards);
      setTimeout(() => setTransitionEnabled(true), 50);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateVisibleCards, visibleCards]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (currentIndex >= clonedCards.length - visibleCards) {
      // If at the end, quickly jump to the beginning without animation
      setTransitionEnabled(false);
      setCurrentIndex(visibleCards);
      // Re-enable transition after a short delay
      setTimeout(() => {
        setTransitionEnabled(true);
        setCurrentIndex(visibleCards + 1);
      }, 50);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, clonedCards.length, visibleCards]);

  const handlePrev = useCallback(() => {
    if (currentIndex <= 0) {
      // If at the beginning, quickly jump to the end without animation
      setTransitionEnabled(false);
      setCurrentIndex(clonedCards.length - visibleCards * 2);
      // Re-enable transition after a short delay
      setTimeout(() => {
        setTransitionEnabled(true);
        setCurrentIndex(clonedCards.length - visibleCards * 2 - 1);
      }, 50);
    } else {
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex, clonedCards.length, visibleCards]);

  // Handle autoplay
  useEffect(() => {
    if (autoPlay && !isPaused) {
      autoPlayTimerRef.current = setTimeout(() => {
        handleNext();
      }, autoPlayInterval);
    }
    
    return () => {
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current);
      }
    };
  }, [autoPlay, isPaused, handleNext, autoPlayInterval, currentIndex]);

  // Calculate transform position
  const getTransform = useCallback(() => {
    const slideWidth = 100 / visibleCards;
    return currentIndex * slideWidth;
  }, [currentIndex, visibleCards]);

  // Touch/swipe support
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // Minimum swipe distance
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe left -> next
        handleNext();
      } else {
        // Swipe right -> prev
        handlePrev();
      }
    }
    
    // Reset values
    touchStartX.current = null;
    touchEndX.current = null;
    setIsPaused(false);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <div 
      className="relative w-full overflow-hidden px-4 sm:px-8 md:px-14 py-4 sm:py-6 md:py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={carouselRef}
    >
      <div
        className={`flex ${transitionEnabled ? 'transition-transform duration-500 ease-in-out' : 'transition-none'}`}
        style={{ transform: `translateX(-${getTransform()}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {clonedCards.map((card, index) => (
          <div
            key={`card-${index}-${card.title}`}
            className="flex-shrink-0 transition-all duration-300"
            style={{
              width: `${100 / visibleCards}%`,
              minWidth: `${100 / visibleCards}%`,
              padding: `0 ${cardGap / 2}px`,
            }}
          >
            <Card {...card} />
          </div>
        ))}
      </div>

      {/* Controls - Solid buttons without transparency */}
      {showControls && clonedCards.length > visibleCards && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 p-2 sm:p-2.5 md:p-3 text-white shadow-md transition-all hover:bg-blue-700 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Ver tarjeta anterior"
            disabled={!transitionEnabled}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 p-2 sm:p-2.5 md:p-3 text-white shadow-md transition-all hover:bg-blue-700 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Ver siguiente tarjeta"
            disabled={!transitionEnabled}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Improved indicator dots with solid colors */}
      {clonedCards.length > visibleCards && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {cards.map((_, idx) => (
            <button
              key={`dot-${idx}`}
              className={`rounded-full transition-all duration-300 border ${
                idx === (currentIndex - visibleCards + cards.length) % cards.length 
                  ? "bg-blue-600 border-blue-600 w-8 h-2 sm:w-10 sm:h-3" 
                  : "bg-gray-300 border-gray-300 w-2 h-2 sm:w-3 sm:h-3 hover:bg-blue-400 hover:border-blue-400"
              }`}
              onClick={() => {
                setCurrentIndex(idx + visibleCards);
              }}
              aria-label={`Ir al grupo de tarjetas ${idx + 1}`}
              disabled={!transitionEnabled}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardCarousel;
