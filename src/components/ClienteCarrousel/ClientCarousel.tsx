import { useState, useEffect } from "react";

interface Ally {
  imageSrc: string;
  altText: string;
}

interface AlliesCarouselProps {
  allies: Ally[];
  autoPlay?: boolean;
}

export const AlliesCarousel: React.FC<AlliesCarouselProps> = ({
  allies,
  autoPlay = true,
}) => {
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

  // Actualiza la cantidad de slides a mostrar según el ancho de la ventana
  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 640) setSlidesToShow(1);
    else if (width < 1024) setSlidesToShow(2);
    else setSlidesToShow(4);
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  // Cuando cambia slidesToShow, reiniciamos el carrusel a la copia central
  useEffect(() => {
    setTransitionEnabled(false);
    setCurrentSlide(totalAllies);
    const timer = setTimeout(() => setTransitionEnabled(true), 50);
    return () => clearTimeout(timer);
  }, [slidesToShow, totalAllies]);

  // Función para avanzar un slide
  const handleNext = () => {
    setCurrentSlide((prev) => prev + 1);
    setTransitionEnabled(true);
  };

  // Función para retroceder un slide
  const handlePrev = () => {
    setCurrentSlide((prev) => prev - 1);
    setTransitionEnabled(true);
  };

  // Al terminar la transición, se comprueba si se salió de la copia central y se reajusta sin animación
  const handleTransitionEnd = () => {
    if (currentSlide >= totalAllies * 2) {
      setTransitionEnabled(false);
      setCurrentSlide(totalAllies);
    } else if (currentSlide < totalAllies) {
      setTransitionEnabled(false);
      setCurrentSlide(totalAllies * 2 - 1);
    }
  };

  // AutoPlay: avanza automáticamente cada 5 segundos (si está activado)
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, autoPlay]);

  return (
    <div className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 py-12">
      <div
        className={`flex ${
          transitionEnabled
            ? "transition-transform duration-500 ease-in-out"
            : "transition-none"
        }`}
        style={{
          /**
           * La fórmula utiliza (currentSlide - totalAllies) para que,
           * al iniciar en la copia central, el desplazamiento sea 0.
           * Cada imagen ocupa (100 / slidesToShow)% del ancho, por lo que se mueve ese porcentaje.
           */
          transform: `translateX(-${(currentSlide - totalAllies) * (100 / slidesToShow)}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedAllies.map((ally, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-2"
            style={{ flex: `0 0 ${100 / slidesToShow}%` }}
          >
            <img
              src={ally.imageSrc}
              alt={ally.altText}
              className="max-h-16 object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              style={{
                width: "auto",
                maxWidth: "140px",
                filter: "contrast(0.8)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Botón para retroceder (con ajustes responsive para móviles) */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-transparent p-2 transition-colors hover:bg-gray-100 sm:left-4"
      >
        <svg
          className="h-4 w-4 text-gray-600 sm:h-6 sm:w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Botón para avanzar */}
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-transparent p-2 transition-colors hover:bg-gray-100 sm:right-4"
      >
        <svg
          className="h-4 w-4 text-gray-600 sm:h-6 sm:w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};
