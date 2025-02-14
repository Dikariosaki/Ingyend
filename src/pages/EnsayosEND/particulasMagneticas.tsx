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
        PARTÍCULAS MAGNÉTICAS
      </h2>
      <Layout
        cards={cardsOneCard}
        title="Partículas Fluorescentes"
        titleSize="text-4xl font-bold text-center"
        description="La inspección por partículas magnéticas húmedas fluorescentes es un método para la localización de defectos superficiales en materiales ferro-magnéticos. Su operación está basada en el hecho de que, cuando la pieza a examinar es magnetizada, las indicaciones y/o Indicaciones existentes causan un campo de fuga, en el flujo magnético. Este campo de fuga, generado por indicaciones y/o Indicaciones, será detectada a través del uso de partículas ferro-magnéticas finamente divididas, aplicadas uniformemente sobre la superficie, pues las mismas serán atraídas por el campo de fuga y se aglomerarán en el contorno del mismo, indicando su localización, forma y extensión.

Estas partículas son aplicadas en la superficie de forma húmeda en suspensión en líquidos como agua o aceite con luz ultravioleta."
        descriptionSize=" md:text-2xl text-1xl text-black whitespace-normal break-words text-left text-justify"
        mobileStackOrder="carousel-text"
        desktopStackOrder="carousel-text"
      />
      <Layout
        cards={cardsOneCard}
        title="Partículas Visibles"
        titleSize="text-4xl font-bold text-center"
        description="La inspección por partículas magnéticas es un método para la localización de defectos superficiales y subsuperficiales. Es usado cuando se quiere una evaluación mas rápida que otras usadas como Tintas Penetrantes; Consiste básicamente en magnetizar la pieza a evaluar al tiempo que se aplican las Partículas Magnéticas, evaluando la agrupación de partículas que se forman causados por un campo de fuga en el flujo magnético sobre el elemento"
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
