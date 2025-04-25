import React, { useState } from "react";
import Carousel from "./CarouselOneCard";
import { CardProps } from "../CardCarousel/CardComponent";

interface LayoutProps {
  cards: CardProps[];
  description: string;
  title?: string; // Prop opcional para el título
  /**
   * Clases de Tailwind para definir el tamaño y estilo del título.
   * Por defecto se usará "text-3xl font-bold".
   */
  titleSize?: string;
  /**
   * Clases de Tailwind para definir el tamaño del texto de la descripción de forma responsiva.
   * Ejemplo: "text-xl font-bold text-black sm:text-7xl".
   */
  descriptionSize?: string;
  /**
   * Orden en pantallas pequeñas (móvil/tablet) cuando se apilan los elementos.
   * "text-carousel": El texto se muestra primero (arriba) y el carrusel debajo.
   * "carousel-text": El carrusel se muestra primero (arriba) y el texto debajo.
   * Por defecto es "text-carousel".
   */
  mobileStackOrder?: "text-carousel" | "carousel-text";
  /**
   * Orden en pantallas grandes (escritorio) cuando se muestran en fila.
   * "text-carousel": El texto se muestra primero (a la izquierda) y el carrusel a la derecha.
   * "carousel-text": El carrusel se muestra primero (a la izquierda) y el texto a la derecha.
   * Por defecto es "carousel-text".
   */
  desktopStackOrder?: "text-carousel" | "carousel-text";
  containerClassName?: string;
  textContainerClassName?: string;
  carouselContainerClassName?: string;
}

const Layout: React.FC<LayoutProps> = ({
  cards,
  description,
  title,
  titleSize = "text-3xl font-bold", // Valor por defecto para el título
  descriptionSize = "text-xl font-bold text-black sm:text-7xl",
  mobileStackOrder = "text-carousel",
  desktopStackOrder = "carousel-text",
  containerClassName = "",
  textContainerClassName = "",
  carouselContainerClassName = "",
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Clases para el orden en dispositivos móviles
  const textOrderMobile =
    mobileStackOrder === "text-carousel" ? "order-1" : "order-2";
  const carouselOrderMobile =
    mobileStackOrder === "carousel-text" ? "order-1" : "order-2";

  // Clases para el orden en dispositivos de escritorio (md: breakpoint)
  const textOrderDesktop =
    desktopStackOrder === "text-carousel" ? "md:order-1" : "md:order-2";
  const carouselOrderDesktop =
    desktopStackOrder === "carousel-text" ? "md:order-1" : "md:order-2";

  // Función para abrir el modal con la imagen seleccionada
  const openImageModal = (imageSrc: string) => {
    if (imageSrc) {
      setSelectedImage(imageSrc);
      setModalOpen(true);
    }
  };

  // Modificamos el componente Carousel para que pueda abrir el modal
  const EnhancedCarousel = () => (
    <div className="carousel-container">
      <Carousel 
        cards={cards.map(card => ({
          ...card,
          onClick: card.imageSrc ? () => openImageModal(card.imageSrc!) : undefined
        }))} 
      />
    </div>
  );

  return (
    <div className={`flex flex-col items-center gap-4 p-4 md:flex-row md:items-stretch ${containerClassName}`}>
      {/* Contenedor del carrusel */}
      <div
        className={`w-full md:w-1/2 ${carouselOrderMobile} ${carouselOrderDesktop} ${carouselContainerClassName}`}
      >
        <EnhancedCarousel />
      </div>
      
      {/* Contenedor del texto */}
      <div
        className={`w-full md:w-1/2 ${textOrderMobile} ${textOrderDesktop} flex flex-col justify-center ${textContainerClassName}`}
      >
        {title && (
          <h1 className={`${titleSize} mb-4 text-center md:text-left dark:text-white`}>
            {title}
          </h1>
        )}
        <p
          className={`${descriptionSize} whitespace-normal text-center md:text-left dark:text-white`}
        >
          {description}
        </p>
      </div>

      {/* Modal para ver la imagen ampliada */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg bg-white p-1"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-2 top-2 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-70"
              onClick={() => setModalOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Imagen ampliada" 
              className="max-h-[85vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
