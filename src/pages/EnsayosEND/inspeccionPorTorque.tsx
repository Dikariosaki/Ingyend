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
        INSPECCIÓN POR TORQUE
      </h2>
      <Layout
        title="Prueba de llave de torque"
        titleSize="text-4xl font-bold text-center"
        cards={cardsOneCard}
        description="La norma ANSI/SCTE 149 define el método de prueba para la forma en que los sujetadores soportan el torque. La fuerza torsional de las llaves de torque está comprobada según la norma ANSI B18.6.4. Esta norma fue establecida por la Sociedad Americana de Ingenieros Mecánicos (ASME, por sus siglas en inglés) y luego adoptada directamente por ANSI.
        Básicamente, la prueba de torque consiste en el ajuste óptimo según las especificaciones técnicas y del abrochador o perno, donde se aplica como se evidencia a continuación un torqueo hasta lograr él apriete."
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
