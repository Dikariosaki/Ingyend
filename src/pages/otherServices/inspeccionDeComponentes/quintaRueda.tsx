import { DarkThemeToggle } from "flowbite-react";
import CustomFooter from "../../../components/Footer/Footer";
import Layout from "../../../components/PartnersSection/Layout";

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
        Quinta Rueda
      </h2>
      <Layout
        cards={cardsOneCard}
        description="Una inspección de quinta rueda es un proceso de revisión y evaluación del dispositivo de acoplamiento que conecta el tractocamión al remolque, garantizando un punto pivotante que facilita el giro y el manejo del vehículo. El objetivo principal de esta inspección es asegurar la seguridad del acoplamiento, verificar el correcto funcionamiento de todos los componentes y llevar a cabo un mantenimiento preventivo para identificar posibles desgastes o daños antes de que se conviertan en problemas graves.


El procedimiento de inspección de la quinta rueda comienza con una inspección visual detallada. Esto incluye la revisión de las superficies de contacto de la quinta rueda y la kingpin del remolque, buscando señales de desgaste excesivo, grietas, deformaciones o corrosión. También se inspeccionan todas las fijaciones y anclajes que sujetan la quinta rueda al chasis del camión, asegurándose de que estén apretados y en buen estado. Además, se comprueba que la quinta rueda esté adecuadamente lubricada para asegurar un funcionamiento suave y reducir el desgaste.


Se realizan pruebas de funcionamiento para asegurar que la quinta rueda pueda moverse libremente sin obstrucciones, permitiendo un giro adecuado del remolque. También se prueba el mecanismo de acoplamiento para asegurarse de que el enganche y desenganche del remolque se realicen sin problemas y que el cierre de seguridad funcione correctamente. Finalmente, se verifica la presencia de cualquier daño en los componentes internos y externos de la quinta rueda que pueda comprometer su integridad estructural y su capacidad de carga."
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
