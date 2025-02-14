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

const visual = () => {
  return (
    <div className="mt-28 flex min-h-screen flex-col dark:bg-gray-900">
      <h2 className="mt-10 text-center text-4xl font-bold dark:text-white">
        INSPECCIÓN VISUAL
      </h2>
      <Layout
        cards={cardsOneCard}
        title="DIRECTA"
        titleSize="text-4xl font-bold text-center"
        description="Es una técnica ideal para la inspección de soldaduras, láminas, soportes, superficies socavados, entre otros, para determinar problemas de soldadura, rayones en superficies, pitting, corrosión, etc…"
        descriptionSize=" md:text-2xl text-1xl text-black whitespace-normal break-words text-left text-justify"
        mobileStackOrder="carousel-text"
        desktopStackOrder="carousel-text"
      />
      <Layout
        cards={cardsOneCard}
        title="REMOTA"
        titleSize="text-4xl font-bold text-center"
        description="Nuestro vídeos-copio digital es ideal para Inspección de tuberías, tanques, vasijas, motores reciprocan-tes o cualquier espacio de difícil acceso"
        descriptionSize=" md:text-2xl text-1xl text-black whitespace-normal break-words text-left text-justify"
        mobileStackOrder="carousel-text"
        desktopStackOrder="carousel-text"
      />
      <DarkThemeToggle className="fixed bottom-14 right-4" />
      <CustomFooter />
    </div>
  );
};

export default visual;
