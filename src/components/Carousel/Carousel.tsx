import React, { useState, useEffect, useRef, TouchEvent } from "react";
import classNames from "classnames";

// Definición de tipos
interface SlideProps {
  img: string;
  title: string;
  subtitle?: string;
  description: string;
  textPosition: string;
  ctaText?: string;
  ctaLink?: string;
}

interface CarouselProps {
  slides?: SlideProps[];
  autoChangeTime?: number;
  showDots?: boolean;
  showControls?: boolean;
  height?: string;
  navbarHeight?: string; // New prop for navbar height
}

const CarouselImagesHome: React.FC<CarouselProps> = ({
  slides = [
    {
      img: "/img/home/Home-Principal-1.png",
      title: "INGYEND SAS",
      subtitle: "",
      description:
        "Somos una empresa de ingeniería colombiana que nació en el año 2008 con una misión clara: realizar inspecciones de componentes estructurales utilizando métodos no destructivos en una variedad de sectores.",
      textPosition: "top-1/2",
    },
    {
      img: "/img/home/Home-Principal-1.png",
      title: "",
      subtitle: "Ofrecemos cursos",
      description:
        "¡Cursos de Pruebas de Materiales No Destructivos! Aprende ultrasonido, radiografía y más técnicas para evaluar materiales sin dañarlos. Clases teórico-prácticas con expertos, disponibles presencial y online. Mejora tu perfil profesional. ¡Contáctanos para inscribirte!",
      textPosition: "top-1/2 right-10",
    },
    {
      img: "/img/home/Home-Principal-1.png",
      title: "Ingenieria y ensayos no destructivos",
      subtitle: "",
      description:
        "Garantizamos un trabajo seguro y responsable sobre nuestras revisiones",
      textPosition: "bottom-10 left-1/2 -translate-x-1/2",
    },
  ],
  autoChangeTime = 5000,
  showDots = true,
  showControls = true,
  height = "h-[300px] sm:h-[400px] md:h-[600px] lg:h-[700px]", // Responsive height
  navbarHeight = "mt-16", // Default navbar height (64px)
}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [prevSlide, setPrevSlide] = useState<number>(-1);
  const [sliderReady, setSliderReady] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Iniciar el carrusel
  useEffect(() => {
    const timer = setTimeout(() => {
      setSliderReady(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Manejar el autoplay con mejor transición al reiniciar
  useEffect(() => {
    if (isPaused || isTransitioning) return;
    
    timerRef.current = setTimeout(() => {
      // Si es el último slide, preparar una transición suave al primero
      if (activeSlide === slides.length - 1) {
        setIsTransitioning(true);
        setPrevSlide(activeSlide);
        setActiveSlide(0);
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 700);
      } else {
        changeSlides(1);
      }
    }, autoChangeTime);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [activeSlide, isPaused, isTransitioning, slides.length, autoChangeTime]);

  const changeSlides = (change: number): void => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const prev = activeSlide;
    let next = activeSlide + change;

    if (next < 0) next = slides.length - 1;
    if (next >= slides.length) next = 0;

    setPrevSlide(prev);
    setActiveSlide(next);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  const goToSlide = (index: number): void => {
    if (index === activeSlide || isTransitioning) return;
    
    setIsTransitioning(true);
    setPrevSlide(activeSlide);
    setActiveSlide(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>): void => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>): void => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (): void => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        changeSlides(1);
      } else {
        changeSlides(-1);
      }
    }
    
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    // Added navbarHeight class to create space for navbar
    <div className={`${navbarHeight} w-full`}>
      <div
        ref={sliderRef}
        className={classNames(
          `relative w-full overflow-hidden ${height}`, // Using responsive height
          {
            "slider-ready": sliderReady,
          },
        )}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ 
          zIndex: 0,
          position: 'relative' 
        }}
      >
        {/* Progress Bar */}
        <div className="absolute top-0 z-20 h-1 w-full bg-gray-200/30">
          <div 
            className="h-full bg-white transition-all ease-linear"
            style={{ 
              width: `${(activeSlide / (slides.length - 1)) * 100}%`,
              transition: isPaused ? 'none' : `width ${autoChangeTime}ms linear`
            }}
          />
        </div>

        {/* Slides */}
        <div className="relative h-full w-full">
          {slides.map((slide, index) => {
            const isActive = activeSlide === index;
            const isPrev = prevSlide === index;
            
            return (
              <div
                key={index}
                className={classNames(
                  "absolute inset-0 h-full w-full",
                  {
                    "z-10": isActive,
                    "z-0": !isActive,
                  }
                )}
                style={{
                  opacity: isActive ? 1 : 0,
                  transition: "opacity 700ms ease-in-out, transform 700ms ease-in-out",
                  transform: isActive 
                    ? "translateX(0)" 
                    : isPrev 
                      ? `translateX(${index < activeSlide ? "-" : ""}100%)` 
                      : `translateX(${index > activeSlide ? "" : "-"}100%)`,
                  visibility: isActive || isPrev ? "visible" : "hidden"
                }}
              >
                {/* Slide Image */}
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  style={{
                    transform: isActive ? "scale(1)" : isPrev ? "scale(1.05)" : "scale(1)",
                    transition: "transform 700ms ease-in-out"
                  }}
                />

                {/* Solid background overlay instead of gradient */}
                <div className="absolute inset-0 z-10 bg-black opacity-40"></div>

                {/* Improved Slide Text Container with better responsive positioning */}
                <div
                  className={classNames(
                    "absolute z-20 flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 text-white",
                    // Better responsive width control
                    "w-[85%] sm:w-3/4 md:w-2/3 lg:w-1/2",
                    // Improved text alignment
                    slide.textPosition.includes("left") ? "text-left items-start" : 
                    slide.textPosition.includes("right") ? "text-right items-end" : 
                    "text-center items-center",
                    // Fixed positioning for all screen sizes
                    "top-[30%] sm:top-[35%] md:top-[40%]",
                    slide.textPosition.includes("left") ? "left-4 sm:left-8 md:left-12 lg:left-16" : "",
                    slide.textPosition.includes("right") ? "right-4 sm:right-8 md:right-12 lg:right-16" : "",
                    slide.textPosition.includes("left") || slide.textPosition.includes("right") ? "" : "left-1/2 -translate-x-1/2",
                    // Lighter backdrop for better visibility
                    "backdrop-blur-sm bg-black/40 rounded-lg shadow-lg"
                  )}
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 700ms ease-out 300ms, transform 700ms ease-out 300ms",
                    maxWidth: "90%"  // Prevent text from extending too far
                  }}
                >
                  {slide.subtitle && (
                    <h3 className="mb-1 sm:mb-2 text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wide font-medium text-blue-200">
                      {slide.subtitle}
                    </h3>
                  )}
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase leading-tight tracking-wide">
                    {slide.title}
                  </h2>
                  <div className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base lg:text-lg max-w-md">
                    <p className="leading-relaxed">{slide.description}</p>
                  </div>
                  
                  {/* Improved CTA Button */}
                  <button 
                    className="mt-3 sm:mt-4 md:mt-6 rounded-md bg-blue-600 px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 text-xs sm:text-sm md:text-base font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black/50"
                    onClick={() => {
                      if (slide.ctaLink) {
                        window.location.href = slide.ctaLink;
                      }
                    }}
                  >
                    {slide.ctaText || "Conocer más"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls - Solid buttons without transparency */}
        {showControls && (
          <>
            <button
              className="absolute left-2 sm:left-4 md:left-6 top-1/2 z-20 -translate-y-1/2 transform rounded-full bg-blue-600 p-1.5 sm:p-2 md:p-2.5 lg:p-3 text-white shadow-md transition-all hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => changeSlides(-1)}
              aria-label="Anterior"
              disabled={isTransitioning}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
            </button>
            <button
              className="absolute right-2 sm:right-4 md:right-6 top-1/2 z-20 -translate-y-1/2 transform rounded-full bg-blue-600 p-1.5 sm:p-2 md:p-2.5 lg:p-3 text-white shadow-md transition-all hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => changeSlides(1)}
              aria-label="Siguiente"
              disabled={isTransitioning}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          </>
        )}

        {/* Improved Dots Indicators */}
        {showDots && (
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-2 sm:space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={classNames(
                  "rounded-full transition-all duration-300 border",
                  {
                    "bg-blue-600 border-blue-600 w-8 h-2 sm:w-10 sm:h-3": activeSlide === index,
                    "bg-gray-300 border-gray-300 w-2 h-2 sm:w-3 sm:h-3 hover:bg-blue-400 hover:border-blue-400": activeSlide !== index,
                  }
                )}
                aria-label={`Ir a slide ${index + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarouselImagesHome;
