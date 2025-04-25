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
  title?: string;
  description?: string;
  link: string;
  buttonText: string;
}

const cards: CardData[] = [
  {
    imageSrc: "../src/assets/home/carousel/InspeccionVisual.webp",
    title: "Inspección Visual",
    description: "La inspección visual, directa y remota, se emplea para evaluar soldaduras, superficies y espacios de difícil acceso. Detecta problemas como soldaduras defectuosas, rayones, pitting, fisuras y corrosión. Se utilizan videoscopios digitales para áreas inaccesibles como tuberías, tanques y motores, garantizando una inspección completa y precisa de los componentes.",
    link: "/servicios/inspeccionVisual",
    buttonText: "Saber más",
  },
  {
    imageSrc: "../src/assets/home/carousel/Liquidos.webp",
    title: "Liquidos Penetrantes",
    description: "La inspección por líquidos penetrantes detecta discontinuidades en superficies, especialmente en aleaciones no ferrosas, y se usa en aleaciones ferrosas cuando las partículas magnéticas no son viables. Se aplica un líquido fluorescente o coloreado y, tras la penetración, se elimina el exceso. Finalmente, un revelador muestra indicaciones solo en superficies no porosas.",
    link: "/servicios/liquidosPenetrantes",
    buttonText: "Saber más",
  },
  {
    imageSrc: "../src/assets/home/carousel/Particulas.webp",
    title: "Partículas Magnéticas",
    description: "La inspección por partículas magnéticas localiza defectos superficiales y subsuperficiales mediante la magnetización de la pieza evaluada y la aplicación de partículas magnéticas. Se evalúa la agrupación de partículas causada por el flujo magnético sobre el elemento, ofreciendo una evaluación rápida comparada con otros métodos como las tintas penetrantes.",
    link: "/servicios/particulasMagneticas",
    buttonText: "Saber más",
  },
  {
    imageSrc: "../src/assets/home/carousel/Ultrasonido.webp",
    title: "Ultrasonido",
    description: "El ensayo por ultrasonido utiliza ondas de presión de alta frecuencia para detectar y caracterizar defectos en materiales. Estas vibraciones se propagan direccionalmente en el material, siguiendo un modelo elástico con una longitud de onda pequeña, lo que permite detectar con precisión pequeñas discontinuidades y determinar espesores en la pared del material inspeccionado.",
    link: "/servicios/ultrasonido",
    buttonText: "Saber más",
  },
  {
    imageSrc: "../src/assets/home/carousel/Torque.webp",
    title: "Inspeccion por Torque",
    description: "La inspección por torque verifica la aplicación de fuerza en uniones roscadas, asegurando que tornillos y pernos estén ajustados según especificaciones. Detecta sobreapriete, aflojamiento o torque insuficiente. Se usan llaves dinamométricas para medir el torque, garantizando el rendimiento óptimo en estructuras como tuberías, motores y equipos.",
    link: "/servicios/inspeccionPorTorque",
    buttonText: "Saber más",
  },
  {
    imageSrc: "../src/assets/home/carousel/Radiografia.webp",
    title: "Radiografia rayos X",
    description: "El ANSI establece estándares de apriete y torque para asegurar la adecuada sujeción de tornillos y abrochadores. La norma ANSI/SCTE 149 define las pruebas de torque. Las llaves dinamométricas se prueban según ANSI B18.6.4 de la ASME para soportar cargas. La prueba implica ajustar el torque según especificaciones y aplicarlo hasta el apriete óptimo del abrochador o tornillo.",
    link: "/servicios/rayosX",
    buttonText: "Saber más",
  },
  {
    imageSrc: "../src/assets/home/carousel/Termografia.webp",
    title: "Termografia",
    description: "El ANSI establece estándares de apriete y torque para asegurar la adecuada sujeción de tornillos y abrochadores. La norma ANSI/SCTE 149 define las pruebas de torque. Las llaves dinamométricas se prueban según ANSI B18.6.4 de la ASME para soportar cargas. La prueba implica ajustar el torque según especificaciones y aplicarlo hasta el apriete óptimo del abrochador o tornillo.",
    link: "/servicios/termografia",
    buttonText: "Saber más",
  },
];

// Define the slides data
const slides = [
  {
    imageSrc: "../src/assets/home/clients/Cliente1.png",
    altText: "Logo cliente 1",
  },
  {
    imageSrc: "../src/assets/home/clients/Cliente2.png",
    altText: "Logo cliente 1",
  },
  {
    imageSrc: "../src/assets/home/clients/Cliente3.png",
    altText: "Logo cliente 1",
  },
  {
    imageSrc: "../src/assets/home/clients/Cliente4.png",
    altText: "Logo cliente 1",
  },
  {
    imageSrc: "../src/assets/home/clients/Cliente5.png",
    altText: "Logo cliente 1",
  },
  {
    imageSrc: "../src/assets/home/clients/Cliente6.png",
    altText: "Logo cliente 1",
  },
];

const cardsOneCard: CardProps[] = [
  {
    imageSrc: "/src/assets/home/aliados/Aliado1.webp",
    link: "https://www1.abendi.org.br/",
    buttonText: "Saber más",
  },
  {
    imageSrc: "/src/assets/home/aliados/Aliado2.webp",
    link: "https://acosend.org/",
    buttonText: "Saber más",
  },
  {
    imageSrc: "/src/assets/home/aliados/Aliado3.webp",
    link: "https://aaende.org.ar/",
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

        {/* Sección de Información adicional (Layout) - Refactorizada para mejor responsive */}
        <section 
          aria-label="Información adicional"
          className="container mx-auto my-8 px-4 overflow-hidden"
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg">
            <Layout
              cards={cardsOneCard}
              description="Contamos con ingenieros capacitados y certificados END"
              descriptionSize="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white"
              mobileStackOrder="text-carousel"
              desktopStackOrder="text-carousel"
            />
          </div>
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
