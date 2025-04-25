import { DarkThemeToggle } from "flowbite-react";
import CustomFooter from "../../components/Footer/Footer";
import Layout from "../../components/PartnersSection/Layout";
import { useState, useEffect } from "react";

export interface CardProps {
  imageSrc?: string;
  title?: string;
  description?: string;
  link?: string;
  buttonText?: string;
}

// Define the inspector data structure
interface Inspector {
  id: string;
  nombre: string;
  tecnica: string;
  nivel: string;
  fechaEmitido: string;
  metodo: string; // END or QUINTA RUEDA
}

const cardsOneCard: CardProps[] = [
  {
    imageSrc: "/src/assets/home/Home-Principal-1.png",
    description: "Calificación de soldadores según código ASME, API y AWS.",
  },
  {
    imageSrc: "/src/assets/home/Home-Principal-1.png",
    description: "Calificación de soldadores según código ASME, API y AWS.",
  },
];

const inspectoresData: Inspector[] = [
  { id: "CAP0092024DFN2", nombre: "Jose Luis Castañeda Barrero", tecnica: "DF", nivel: "", fechaEmitido: "20/02/24", metodo: "END" },
  { id: "CAP1012024DFN2", nombre: "Julian Roberto Cepeda Santana", tecnica: "DF", nivel: "", fechaEmitido: "20/02/24", metodo: "END" },
  { id: "CAP1112024DFN2", nombre: "William Hernan Vargas Santana", tecnica: "DF", nivel: "", fechaEmitido: "20/02/24", metodo: "END" },
  { id: "CAP1212024DFN2", nombre: "Juan Sebastian Quesada Tellez", tecnica: "DF", nivel: "", fechaEmitido: "20/02/24", metodo: "END" },
  { id: "CAP1312024DFN2", nombre: "Lady Natalie Fonseca Rodriguez", tecnica: "DF", nivel: "", fechaEmitido: "20/02/24", metodo: "END" },
  { id: "CAP0012024PMN2", nombre: "Sandra Milena Velasquez Ovalle", tecnica: "PM", nivel: "", fechaEmitido: "02/02/24", metodo: "QUINTA RUEDA" },
  { id: "CAP0022024PMN2", nombre: "Leider Fabian Chavarro Sanchez", tecnica: "PM", nivel: "", fechaEmitido: "02/02/24", metodo: "QUINTA RUEDA" },
  { id: "CAP0032024PMN2", nombre: "Natalia Hurtado Vertel", tecnica: "PM", nivel: "", fechaEmitido: "02/02/24", metodo: "QUINTA RUEDA" },
  { id: "CAP0042024PMN2", nombre: "Eudy Ferney Gonzales Martinez", tecnica: "PM", nivel: "", fechaEmitido: "02/02/24", metodo: "QUINTA RUEDA" },
  { id: "CAP0052024PMN2", nombre: "Nury Yuley Velasquez Ovalle", tecnica: "PM", nivel: "", fechaEmitido: "02/02/24", metodo: "QUINTA RUEDA" },
  { id: "CAP0062024PMN2", nombre: "Liseth Paola Vargas Maheche", tecnica: "PM", nivel: "", fechaEmitido: "02/02/24", metodo: "QUINTA RUEDA" },
  { id: "CAP0072024PMN2", nombre: "Jefferson Alcides Murillo Alba", tecnica: "PM", nivel: "", fechaEmitido: "02/02/24", metodo: "QUINTA RUEDA" },
  { id: "CAP0082024PMN2", nombre: "Juan Sebastian Gomez Chaparro", tecnica: "PM", nivel: "", fechaEmitido: "02/02/24", metodo: "QUINTA RUEDA" },
];

const CalificacionSoldadores = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredInspectores, setFilteredInspectores] = useState<Inspector[]>(inspectoresData);
  const [selectedTecnica, setSelectedTecnica] = useState<string>("");
  const [selectedNivel, setSelectedNivel] = useState<string>("");
  const [selectedMetodo, setSelectedMetodo] = useState<string>("");

  // Filter inspectors based on search term and filters
  useEffect(() => {
    const results = inspectoresData.filter(inspector => {
      const matchesSearch = inspector.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           inspector.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTecnica = selectedTecnica === "" || inspector.tecnica === selectedTecnica;
      // Modified to handle empty nivel values properly
      const matchesNivel = selectedNivel === "" || (inspector.nivel && inspector.nivel === selectedNivel);
      const matchesMetodo = selectedMetodo === "" || inspector.metodo === selectedMetodo;
      
      return matchesSearch && matchesTecnica && matchesNivel && matchesMetodo;
    });
    
    setFilteredInspectores(results);
  }, [searchTerm, selectedTecnica, selectedNivel, selectedMetodo]);

  // Get unique values for filter dropdowns
  const tecnicas = Array.from(new Set(inspectoresData.map(inspector => inspector.tecnica)));
  // Filter out empty nivel values from the dropdown
  const niveles = Array.from(new Set(inspectoresData.map(inspector => inspector.nivel))).filter(nivel => nivel);
  const metodos = Array.from(new Set(inspectoresData.map(inspector => inspector.metodo)));

  return (
    <div className="mt-28 flex min-h-screen flex-col content-start dark:bg-gray-900">
      <h2 className="mt-10 text-center text-4xl font-bold dark:text-white">
        CALIFICACIÓN DE SOLDADORES
      </h2>
      
      <Layout
        titleSize="text-4xl font-bold text-center"
        cards={cardsOneCard}
        description="La calificación de soldadores es aquel documento que tiene la persona o empresa para demostrar que el procedimiento de aplicación ha sido aprobado bajo un estándar en aplicación de soldadura, en toda calificación se realizará la inspección resultando el estándar de soldadura aplicable y evaluándose bajo este mismo. INGYEND realiza la Calificación de Soldadores bajo código ASME, API y AWS."
        descriptionSize="md:text-2xl text-1xl text-black whitespace-normal break-words text-left text-justify dark:text-white"
        mobileStackOrder="carousel-text"
        desktopStackOrder="carousel-text"
      />
      
      <div className="container mx-auto px-4 py-8">
        <p className="text-lg md:text-xl text-black dark:text-white text-justify mb-6">
          Para la verificación de nuestros inspectores certificados, puede consultar la siguiente tabla (no consultarnos o acercarse a nuestras instalaciones o dirigirse a <a href="/contacto" className="text-blue-600 hover:underline">contáctenos</a> y dejenos sus comentarios).
        </p>
        <p className="text-lg md:text-xl text-black dark:text-white text-justify mb-8">
          INGYEND realiza la Calificación de Soldadores bajo código ASME, API y AWS.
        </p>
        
        {/* Inspector Search and Table */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-5xl mx-auto w-full border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <svg className="w-8 h-8 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
              </svg>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Verificación de Inspectores</h3>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Última Actualización: 20-02-24
            </div>
          </div>
          
          {/* Search and Filters */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-4">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Buscar por nombre o ID:</label>
              <input
                type="text"
                id="search"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                placeholder="Ingrese nombre o número de aprobación..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="metodo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Método:</label>
              <select
                id="metodo"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                value={selectedMetodo}
                onChange={(e) => setSelectedMetodo(e.target.value)}
              >
                <option value="">Todos</option>
                {metodos.map((metodo, index) => (
                  <option key={index} value={metodo}>{metodo}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="tecnica" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Técnica:</label>
              <select
                id="tecnica"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                value={selectedTecnica}
                onChange={(e) => setSelectedTecnica(e.target.value)}
              >
                <option value="">Todas</option>
                {tecnicas.map((tecnica, index) => (
                  <option key={index} value={tecnica}>{tecnica}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="nivel" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nivel:</label>
              <select
                id="nivel"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                value={selectedNivel}
                onChange={(e) => setSelectedNivel(e.target.value)}
              >
                <option value="">Todos</option>
                {niveles.map((nivel, index) => (
                  <option key={index} value={nivel}>{nivel}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Limpiar filtros:</label>
              <button
                className="w-full p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-md dark:text-white transition-colors"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTecnica("");
                  setSelectedNivel("");
                  setSelectedMetodo("");
                }}
              >
                Restablecer
              </button>
            </div>
          </div>
          
          {/* Results Table */}
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600 table-auto">
                  <thead className="bg-blue-100 dark:bg-blue-900">
                    <tr>
                      <th scope="col" className="py-3 px-2 md:px-4 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase tracking-wider">Método</th>
                      <th scope="col" className="py-3 px-2 md:px-4 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase tracking-wider">N° Aprob.</th>
                      <th scope="col" className="py-3 px-2 md:px-4 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase tracking-wider">Nombres</th>
                      <th scope="col" className="py-3 px-2 md:px-4 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase tracking-wider">Técnica</th>
                      <th scope="col" className="py-3 px-2 md:px-4 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase tracking-wider">Nivel</th>
                      <th scope="col" className="py-3 px-2 md:px-4 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase tracking-wider">Fecha</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
                    {filteredInspectores.length > 0 ? (
                      filteredInspectores.map((inspector, index) => (
                        <tr 
                          key={inspector.id} 
                          className={`${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-700'} hover:bg-gray-100 dark:hover:bg-gray-600`}
                        >
                          <td className="py-2 px-2 md:px-4 whitespace-nowrap text-xs md:text-sm text-gray-700 dark:text-gray-200">{inspector.metodo}</td>
                          <td className="py-2 px-2 md:px-4 whitespace-nowrap text-xs md:text-sm text-gray-700 dark:text-gray-200">{inspector.id}</td>
                          <td className="py-2 px-2 md:px-4 text-xs md:text-sm text-gray-700 dark:text-gray-200 break-words">{inspector.nombre}</td>
                          <td className="py-2 px-2 md:px-4 whitespace-nowrap text-xs md:text-sm text-gray-700 dark:text-gray-200">{inspector.tecnica}</td>
                          <td className="py-2 px-2 md:px-4 whitespace-nowrap text-xs md:text-sm text-gray-700 dark:text-gray-200">
                            {inspector.nivel ? inspector.nivel : "N/A"}
                          </td>
                          <td className="py-2 px-2 md:px-4 whitespace-nowrap text-xs md:text-sm text-gray-700 dark:text-gray-200">{inspector.fechaEmitido}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="py-4 px-4 text-center text-gray-500 dark:text-gray-400">
                          No se encontraron resultados para los criterios de búsqueda.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
            LA INFORMACIÓN ANTERIOR PUEDE SER VERIFICADA DIRECTAMENTE EN EL TELÉFONO: 3138214103 O EN LAS INSTALACIONES DE INGYEND SAS CALLE 127 No. 7Dp-58 BARRIO NIZA - BOGOTÁ
          </div>
        </div>
      </div>
      
      <DarkThemeToggle className="fixed bottom-14 right-4" />
      <CustomFooter />
    </div>
  );
};

export default CalificacionSoldadores;