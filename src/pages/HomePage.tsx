import { DarkThemeToggle } from "flowbite-react";
import CustomFooter from "../components/Footer/Footer";
import CarouselImagesHome from "../components/Carousel/Carousel";
import CarouselCards from "../components/CardCarousel/CarouselCards";
import Experience from "../components/Experience/experience";
import { AlliesCarousel } from "../components/ClienteCarrousel/ClientCarousel";
import Layout from "../components/PartnersSection/Layout";

// Definimos la interfaz para las tarjetas
interface CardData {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  buttonText: string;
}

interface CardProps {
  imageSrc?: string;
  title: string;
  description: string;
  link: string;
  buttonText: string;
}

const cards: CardData[] = [
  {
    imageSrc: "../src/assets/home/Home-Principal-1.png",
    title: "Project 1",
    description: "Description for project 1.",
    link: "/project-1",
    buttonText: "Learn More",
  },
  {
    imageSrc: "../src/assets/home/Home-Principal-1.png",
    title: "Project 2",
    description: "Description for project 2.",
    link: "/project-2",
    buttonText: "Learn More",
  },
  {
    imageSrc: "../src/assets/home/Home-Principal-1.png",
    title: "Project 3",
    description: "Description for project 3.",
    link: "/project-3",
    buttonText: "Learn More",
  },
  {
    imageSrc: "../src/assets/home/Home-Principal-1.png",
    title: "Project 4",
    description: "Description for project 1.",
    link: "/project-1",
    buttonText: "Learn More",
  },
  {
    imageSrc: "../src/assets/home/Home-Principal-1.png",
    title: "Project 5",
    description: "Description for project 2.",
    link: "/project-2",
    buttonText: "Learn More",
  },
  {
    imageSrc: "../src/assets/home/Home-Principal-1.png",
    title: "Project 6",
    description: "Description for project 3.",
    link: "/project-3",
    buttonText: "Learn More",
  },
];

// Define the slides data
const slides = [
  {
    imageSrc: "../src/assets/home/Home-Principal-1.png",
    altText: "Logo cliente 1",
  },
  {
    imageSrc: "../src/assets/home/Home-Principal-1.png",
    altText: "Logo cliente 1",
  },
  {
    imageSrc: "../src/assets/home/Home-Principal-1.png",
    altText: "Logo cliente 1",
  },
  {
    imageSrc: "../src/assets/home/Home-Principal-1.png",
    altText: "Logo cliente 1",
  },
  {
    imageSrc: "../src/assets/home/Home-Principal-1.png",
    altText: "Logo cliente 1",
  },
  {
    imageSrc: "../src/assets/home/Home-Principal-1.png",
    altText: "Logo cliente 1",
  },
];

const cardsOneCard: CardProps[] = [
  {
    imageSrc: "/src/assets/home/Home-Principal-1.png",
    title: "Tarjeta 1",
    description: "Descripción de la tarjeta 1.",
    link: "#",
    buttonText: "Saber más",
  },
  {
    imageSrc: "/src/assets/home/Home-Principal-1.png",
    title: "Tarjeta 2",
    description: "Descripción de la tarjeta 2.",
    link: "#",
    buttonText: "Saber más",
  },
  {
    imageSrc: "/src/assets/home/Home-Principal-1.png",
    title: "Tarjeta 3",
    description: "Descripción de la tarjeta 3.",
    link: "#",
    buttonText: "Saber más",
  },
];

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col dark:bg-gray-900">

      {/* Main: Contiene el contenido principal */}
      <main className="flex-grow">
        {/* Sección del Carousel de imágenes */}
        <section aria-label="Carousel de imágenes">
          <CarouselImagesHome />
        </section>

        {/* Sección del Carrusel de Tarjetas */}
        <section
          className="container mx-auto px-4 py-8"
          aria-labelledby="services-heading"
        >
          <h2
            id="services-heading"
            className="mb-8 text-center text-5xl font-bold dark:text-white"
          >
            Nuestros Servicios
          </h2>
          <CarouselCards cards={cards} />
        </section>

        {/* Sección de Experience */}
        <section aria-label="Experience">
          <Experience />
        </section>

        {/* Sección de Aliados */}
        <section aria-label="Nuestros Aliados">
          <AlliesCarousel allies={slides} autoPlay={true} />
        </section>

        {/* Sección de Información adicional (Layout) */}
        <section aria-label="Información adicional">
          <Layout
            cards={cardsOneCard}
            description="Contamos con ingenieros capacitados y certificados END"
            descriptionSize="md:text-7xl text-4xl font-bold text-black"
            mobileStackOrder="text-carousel"
            desktopStackOrder="text-carousel"
          />
        </section>
      </main>

      {/* Aside: Contenido complementario (por ejemplo, el toggle de tema) */}
      <aside>
        <DarkThemeToggle className="fixed bottom-14 right-4" />
      </aside>

      {/* Footer: Información del pie de página */}
      <footer>
        <CustomFooter />
      </footer>
    </div>
  );
};

export default HomePage;
