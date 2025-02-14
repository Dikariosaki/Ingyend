import React from "react";
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
}

const Layout: React.FC<LayoutProps> = ({
  cards,
  description,
  title,
  titleSize = "text-3xl font-bold", // Valor por defecto para el título
  descriptionSize = "text-xl font-bold text-black sm:text-7xl",
  mobileStackOrder = "text-carousel",
  desktopStackOrder = "carousel-text",
}) => {
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

  return (
    <div className="flex flex-col items-center gap-4 p-4 md:flex-row">
      {/* Contenedor del carrusel */}
      <div
        className={`w-full md:w-1/2 ${carouselOrderMobile} ${carouselOrderDesktop}`}
      >
        <Carousel cards={cards} />
      </div>
      {/* Contenedor del texto */}
      <div
        className={`w-full md:w-1/2 ${textOrderMobile} ${textOrderDesktop} max-w-full`}
      >
        {title && (
          <h1 className={`${titleSize} mb-4 text-center dark:text-white`}>
            {title}
          </h1>
        )}
        <p
          className={`${descriptionSize} whitespace-normal text-center dark:text-white`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Layout;
