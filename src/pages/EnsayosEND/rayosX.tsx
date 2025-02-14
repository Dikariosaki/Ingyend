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

const particulas = () => {
  return (
    <div className="mt-28 flex min-h-screen flex-col content-start dark:bg-gray-900">
      <h2 className="mt-10 text-center text-4xl font-bold dark:text-white">
        RADIOGRAFíA RAYOS X
      </h2>
      <Layout
        cards={cardsOneCard}
        description="Una radiografía es una técnica diagnóstica radiológica de forma digital (Radiología digital directa o indirecta) en una base de datos. La imagen se obtiene al exponer al receptor de imagen radiográfica a una fuente de radiación de alta energía, comúnmente rayos X o radiación gamma procedente de isótopos radiactivos (Iridio 192, Cobalto 60, Cesio 137, etc.). Al interponer un objeto entre la fuente de radiación y el receptor, las partes más densas aparecen con diferentes tonos dentro de una escala de grises.

Sus usos pueden ser tanto médicos, para detectar fisuras en huesos, como industriales en la detección de defectos en materiales y soldaduras, tales como grietas y poros.

Las ventajas del ensayo radiográfico incluyen lo siguiente:

Puede usarse con la mayoría de los materiales.
Puede usarse para proporcionar un registro visual permanente del objeto ensayado o un registro digital con la subsiguiente visualización en un monitor de computadora.
Puede revelar algunas discontinuidades dentro del material.
Revela errores de fabricación y a menudo indica la necesidad de acciones correctivas.

 

El objetivo del ensayo radiográfico es asegurar la confiabilidad del producto. Esto puede lograrse sobre la base de los siguientes factores

1. La radiografía permite al técnico ver la calidad interna del objeto ensayado o evidencia la configuración interna de los componentes.

2. Revela la naturaleza del objeto ensayado sin perjudicar la utilidad del material. Revela discontinuidades estructurales, fallas mecánicas y errores de montaje."
        descriptionSize=" md:text-2xl text-1xl text-black whitespace-normal break-words text-left text-justify"
        mobileStackOrder="carousel-text"
        desktopStackOrder="carousel-text"
      />
      <DarkThemeToggle className="fixed bottom-14 right-4" />
      <CustomFooter />
    </div>
  );
};

export default particulas;
