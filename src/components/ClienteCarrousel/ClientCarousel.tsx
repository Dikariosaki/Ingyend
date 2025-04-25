import { useState, useEffect, useCallback } from "react";

interface Ally {
  imageSrc: string;
  altText: string;
  url?: string;
}

interface AlliesCarouselProps {
  allies: Ally[];
  autoPlay?: boolean;
  interval?: number;
  title?: string;
  subtitle?: string;
  showDots?: boolean;
}

export const AlliesCarousel: React.FC<AlliesCarouselProps> = ({
  allies,
  autoPlay = true,
  interval = 5000,
  title = "Nuestros Clientes",
  subtitle = "Empresas que confían en nosotros",
  showDots = true,
}) => {
  // Verificar que hay suficientes elementos
  if (allies.length === 0) {
    return null;
  }

  // Número total de elementos originales
  const totalAllies = allies.length;
  // Arreglo extendido (triplicado) para lograr efecto infinito
  const extendedAllies = [...allies, ...allies, ...allies];

  // Estado para la cantidad de imágenes visibles (responsive)
  const [slidesToShow, setSlidesToShow] = useState(4);
  // Estado para el slide actual; se inicia en la copia central (índice = totalAllies)
  const [currentSlide, setCurrentSlide] = useState(totalAllies);
  // Control de transición (para "reseteos" sin animación)
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  // Estado para pausar el autoplay al hacer hover
  const [isPaused, setIsPaused] = useState(false);

  // Actualiza la cantidad de slides a mostrar según el ancho de la ventana
  const updateSlidesToShow = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) setSlidesToShow(1);
    else if (width < 768) setSlidesToShow(2);
    else if (width < 1024) setSlidesToShow(3);
    else setSlidesToShow(4);
  }, []);

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, [updateSlidesToShow]);

  // Cuando cambia slidesToShow, reiniciamos el carrusel a la copia central
  useEffect(() => {
    setTransitionEnabled(false);
    setCurrentSlide(totalAllies);
    const timer = setTimeout(() => setTransitionEnabled(true), 50);
    return () => clearTimeout(timer);
  }, [slidesToShow, totalAllies]);

  // Funciones para navegar el carrusel
  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => prev + 1);
    setTransitionEnabled(true);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => prev - 1);
    setTransitionEnabled(true);
  }, []);

  const goToSlide = useCallback((slideIndex: number) => {
    setCurrentSlide(totalAllies + slideIndex);
    setTransitionEnabled(true);
  }, [totalAllies]);

  // Al terminar la transición, se comprueba si se salió de la copia central y se reajusta sin animación
  const handleTransitionEnd = useCallback(() => {
    if (currentSlide >= totalAllies * 2) {
      setTransitionEnabled(false);
      setCurrentSlide(totalAllies);
    } else if (currentSlide < totalAllies) {
      setTransitionEnabled(false);
      setCurrentSlide(totalAllies * 2 - 1);
    }
  }, [currentSlide, totalAllies]);

  // AutoPlay: avanza automáticamente cada X segundos (si está activado)
  useEffect(() => {
    if (!autoPlay || isPaused) return;
    
    const autoPlayInterval = setInterval(() => {
      handleNext();
    }, interval);
    
    return () => clearInterval(autoPlayInterval);
  }, [autoPlay, currentSlide, handleNext, interval, isPaused]);

  // Calcular el índice real para los indicadores
  const getRealIndex = () => {
    let realIndex = (currentSlide - totalAllies) % totalAllies;
    if (realIndex < 0) realIndex += totalAllies;
    return realIndex;
  };

  return (
    <div className="py-16">
      {/* Título y subtítulo */}
      {(title || subtitle) && (
        <div className="mb-10 text-center">
          {title && <h2 className="mb-2 text-3xl font-bold text-black dark:text-white">{title}</h2>}
          {subtitle && <p className="text-lg text-black dark:text-gray-50">{subtitle}</p>}
        </div>
      )}

      {/* Contenedor principal del carrusel */}
      <div 
        className="relative mx-auto w-full max-w-7xl overflow-hidden px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex ${
            transitionEnabled
              ? "transition-transform duration-500 ease-in-out"
              : "transition-none"
          }`}
          style={{
            transform: `translateX(-${(currentSlide - totalAllies) * (100 / slidesToShow)}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedAllies.map((ally, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4"
              style={{ flex: `0 0 ${100 / slidesToShow}%` }}
            >
              {ally.url ? (
                <a 
                  href={ally.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block transform transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={ally.imageSrc}
                    alt={ally.altText}
                    className="mx-auto max-h-20 w-auto max-w-[160px] object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                    loading="lazy"
                  />
                </a>
              ) : (
                <img
                  src={ally.imageSrc}
                  alt={ally.altText}
                  className="mx-auto max-h-20 w-auto max-w-[160px] object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>

        {/* Botones de navegación */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-all duration-300 hover:bg-gray-100 hover:shadow-lg focus:outline-none sm:left-4"
          aria-label="Anterior"
        >
          <svg
            className="h-5 w-5 text-gray-700 sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-all duration-300 hover:bg-gray-100 hover:shadow-lg focus:outline-none sm:right-4"
          aria-label="Siguiente"
        >
          <svg
            className="h-5 w-5 text-gray-700 sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Indicadores de posición (dots) */}
        {showDots && totalAllies > 1 && (
          <div className="mt-6 flex justify-center space-x-2">
            {allies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  getRealIndex() === index
                    ? "bg-blue-600 w-5"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AlliesCarousel;
