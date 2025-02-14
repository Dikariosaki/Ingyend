import { DarkThemeToggle } from "flowbite-react";
import CustomFooter from "../../components/Footer/Footer";
import Layout from "../../components/PartnersSection/Layout";

export interface CardProps {
  imageSrc?: string;
  title?: string;
  description?: string;
  link?: string;
  buttonText?: string;
}

const cardsOneCard: CardProps[] = [
  {
    imageSrc: "/src/assets/home/Home-Principal-1.png",
    description: "Descripción de la tarjeta 1.",
  },
  {
    imageSrc: "/src/assets/home/Home-Principal-1.png",
    description: "Descripción de la tarjeta 2.",
  },
  {
    imageSrc: "/src/assets/home/Home-Principal-1.png",
    description: "Descripción de la tarjeta 3.",
  },
];

const ultrasonido = () => {
  return (
    <div className="mt-28 flex min-h-screen flex-col content-start dark:bg-gray-900">
      <h2 className="mt-10 text-center text-4xl font-bold dark:text-white">
        ULTRASONIDO
      </h2>
      <Layout
        cards={cardsOneCard}
        title="SCAN A"
        titleSize="text-4xl font-bold text-center"
        description="El método de Ensayo No Destructivo con Ultrasonido, es una prueba para detectar discontinuidades internas en todo tipo de materiales y realizar medición de Indicaciones.

El ensayo está basado en la generación y propagación de una serie de ondas de presión de alta frecuencia por encima de la zona audible en un material.  Estas vibraciones se propagan por las mismas moléculas en el material siguiendo el modelo elástico en una forma direccional y se caracterizan por su pequeña longitud de onda, por lo que es posible detectar claramente pequeñas discontinuidades."
        descriptionSize=" md:text-2xl text-1xl text-black whitespace-normal break-words text-left text-justify"
        mobileStackOrder="carousel-text"
        desktopStackOrder="carousel-text"
      />
      <Layout
        cards={cardsOneCard}
        title="SCAN B"
        titleSize="text-4xl font-bold text-center"
        description="El método de Ensayo No Destructivo con Ultrasonido, es una prueba para detectar y determinar espesores de un material inspeccionado.
        
        El ensayo está basado en la generación y propagación de una serie de ondas de presión de alta frecuencia por encima de la zona audible en un material. Estas vibraciones se propagan en el material por las mismas moléculas siguiendo el modelo elástico en una forma direccional y se caracterizan por su pequeña longitud de onda, por lo que es posible detectar claramente espesores determinados de pared."
        descriptionSize=" md:text-2xl text-1xl text-black whitespace-normal break-words text-left text-justify"
        mobileStackOrder="carousel-text"
        desktopStackOrder="carousel-text"
      />
      <DarkThemeToggle className="fixed bottom-14 right-4" />
      <CustomFooter />
    </div>
  );
};

export default ultrasonido;
