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
        LíQUlDOS PENETRANTES
      </h2>
      <Layout
        cards={cardsOneCard}
        title="Líquidos fluorescentes"
        titleSize="text-4xl font-bold text-center"
        description="La inspección por líquidos penetrantes fluorescentes es utilizada para detectar discontinuidades hasta 10-^4 milímetros presentes en la superficie de los elementos examinados, es generalmente usado en aleaciones ferrosas y no ferrosas, en donde se realizar una previa limpieza con el fin de eliminar, grasas escoria y/o capas contaminantes en los componentes, luego se procede a realizar una Inspección visual detallada con el fin de evidenciar posibles discontinuidades según aplique la norma, después de esto se procede a aplicar una capa generosa de líquido Penetrantes Fluorescente y se deja allí por un tiempo no menor a 10 min. Una vez aplicada esta capa se procede a retirar los excesos del penetrante y se da un tiempo de penetración no menos de 10 minutos, posterior a esto se aplica una capa fina de revelador el cual su función será llevar a la superficie la tinta penetrada no removida en los espacios donde haya discontinuidades sobre la zona inspeccionada y se dejará revelar por mínimo 10 minutos desde el tiempo de aplicación; por último para evidenciar el resultado de la prueba en el equipo intervenido se irradia una luz ultravioleta sobre los puntos determinados a fin de detectan posibes discontinuidades."
        descriptionSize=" md:text-2xl text-1xl text-black whitespace-normal break-words text-left text-justify"
        mobileStackOrder="carousel-text"
        desktopStackOrder="carousel-text"
      />
      <Layout
        cards={cardsOneCard}
        title="Líquidos Visibles"
        titleSize="text-4xl font-bold text-center"
        description="La inspección por líquidos penetrantes es utilizada para detectar e identificar discontinuidades presentes en la superficie de los elementos examinados, es generalmente usado en aleaciones ferrosas y no ferrosas y de serlo también se podrá utilizar este método cuando no es de fácil la aplicación por Partículas Magnéticas. Consiste en la aplicación de un líquido que puede ser coloreado en la superficie que se va a evaluar, después de un tiempo de penetración es removido el exceso de este penetrante y es aplicado el revelador (si aplica según el método) el cual absorbe el resto de penetrante haciendo visible las indicaciones y/o discontinuidades que presenta el elemento o componente inspeccionado"
        descriptionSize=" md:text-2xl text-1xl text-black whitespace-normal break-words text-left text-justify"
        mobileStackOrder="carousel-text"
        desktopStackOrder="text-carousel"
      />
      <DarkThemeToggle className="fixed bottom-14 right-4" />
      <CustomFooter />
    </div>
  );
};

export default particulas;
