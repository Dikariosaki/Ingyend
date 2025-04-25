import { DarkThemeToggle } from "flowbite-react";
import CustomFooter from "../../components/Footer/Footer";

const ProximosCursos = () => {
  return (
    <div className="mt-28 flex min-h-screen flex-col content-start dark:bg-gray-900">
      <h2 className="mt-10 text-center text-4xl font-bold dark:text-white">
        PRÓXIMOS CURSOS
      </h2>
      <h3 className="mt-5 mb-8 text-center text-2xl font-semibold dark:text-white">
        CURSO VIRTUAL INGYEND SAS BOGOTA
      </h3>
      
      <div className="container mx-auto px-4 flex justify-center">
        <div className="max-w-4xl w-full">
          <a href="https://wa.me/573138214103?text=Hola,%20estoy%20interesado%20en%20el%20curso%20de%20Líquidos%20Penetrantes.%20¿Me%20pueden%20dar%20más%20información?" target="_blank" rel="noopener noreferrer">
            <img 
              src="/src/assets/home/Home-Principal-1.png" 
              alt="Curso de Líquidos Penetrantes 20 y 21 de Noviembre" 
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </a>
          <p className="text-center mt-4 text-lg dark:text-white">
            Curso de Líquidos Penetrantes 20 y 21 de Noviembre de 2020. <br />
            Inscríbete y recibe un 5% de descuento hasta el 06 de Noviembre.
          </p>
          <div className="flex justify-center mt-6">
            <a 
              href="https://wa.me/573138214103?text=Hola,%20estoy%20interesado%20en%20el%20curso%20de%20Líquidos%20Penetrantes.%20¿Me%20pueden%20dar%20más%20información?" 
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Inscríbete ahora
            </a>
          </div>
        </div>
      </div>
      
      <DarkThemeToggle className="fixed bottom-14 right-4" />
      <CustomFooter />
    </div>
  );
};

export default ProximosCursos;