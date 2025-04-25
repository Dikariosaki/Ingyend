import { DarkThemeToggle } from "flowbite-react";
import CustomFooter from "../../components/Footer/Footer";
import Layout from "../../components/PartnersSection/Layout";
import { useState } from "react";

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
    description: "Auditorías técnicas según normas ISO 17020, ISO 17024.",
  },
  {
    imageSrc: "/src/assets/home/Home-Principal-1.png",
    description: "Auditorías técnicas según normas ISO 17020, ISO 17024.",
  },
];

const AuditoriasTecnicas = () => {
  return (
    <div className="mt-28 flex min-h-screen flex-col content-start dark:bg-gray-900">
      <h2 className="mt-10 text-center text-4xl font-bold dark:text-white">
        AUDITORÍAS TÉCNICAS ISO 17020, ISO 17024
      </h2>
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-5xl mx-auto w-full border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                AUDITORÍAS TÉCNICAS ISO 17020, ISO 17024
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                INGYEND ofrece servicios de auditoría y certificación de acuerdo a las Normas ISO 17020:2012, ISO 17024:2012 y ISO 9001:2015
              </p>
            </div>
            <div className="flex-shrink-0">
              <img 
                src="/src/assets/otrosServicios/iso-17020Auditoria.webp" 
                alt="ISO Certification Logo" 
                className="h-16 w-auto object-contain bg-transparent filter contrast-125 brightness-105"
                style={{ WebkitFilter: 'drop-shadow(0 0 0 rgba(255,255,255,0))', filter: 'drop-shadow(0 0 0 rgba(255,255,255,0))' }}
              />
            </div>
          </div>
          
          <div className="prose max-w-none dark:prose-invert">
            <p className="text-gray-700 dark:text-gray-300 text-justify mb-4">
              El propósito central de Ingyend es la Evaluación del Código ISO 17020 en su aplicación de Inspección y Ensayo, además consideramos que la ISO 17024 permite reconocer de acreditación. INGYEND SAS brinda el servicio de auditoría técnica ISO 17020 basado en la descripción y del sistema de gestión según la NTC ISO 9001:2015 para organismos de Inspección (Organismo de INSPECCIÓN).
            </p>
            
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-blue-100 dark:bg-blue-900">
                    <th className="py-2 px-4 border-b border-gray-300 dark:border-gray-600 text-left text-sm font-medium text-gray-700 dark:text-gray-200">
                      Servicios de Auditoría
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="py-2 px-4 text-sm text-gray-700 dark:text-gray-300">Auditoría de diagnóstico ISO 17020</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                    <td className="py-2 px-4 text-sm text-gray-700 dark:text-gray-300">Auditoría de diagnóstico ISO 17024</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="py-2 px-4 text-sm text-gray-700 dark:text-gray-300">Auditoría interna ISO 17020</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                    <td className="py-2 px-4 text-sm text-gray-700 dark:text-gray-300">Auditoría interna ISO 17024</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="py-2 px-4 text-sm text-gray-700 dark:text-gray-300">Auditoría de seguimiento ISO 17020</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                    <td className="py-2 px-4 text-sm text-gray-700 dark:text-gray-300">Auditoría de seguimiento ISO 17024</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="py-2 px-4 text-sm text-gray-700 dark:text-gray-300">Implementación de sistemas de gestión ISO 17020</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                    <td className="py-2 px-4 text-sm text-gray-700 dark:text-gray-300">Implementación de sistemas de gestión ISO 17024</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="py-2 px-4 text-sm text-gray-700 dark:text-gray-300">Capacitación en requisitos de la norma ISO 17020</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                    <td className="py-2 px-4 text-sm text-gray-700 dark:text-gray-300">Capacitación en requisitos de la norma ISO 17024</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="py-2 px-4 text-sm text-gray-700 dark:text-gray-300">Asesoría para acreditación ante ONAC</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8">
              <p className="text-gray-700 dark:text-gray-300 text-justify mb-4">
                RECONOCIMIENTO: INGYEND SAS es reconocida ante ONAC bajo el lineamiento de que la norma de auditoría es la ISO 17020.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 text-justify mb-4">
                El principal objetivo de la Auditoría Técnica Interna ISO 17020 es verificar el cumplimiento del sistema ISO 17020 en lo que aplica relacionado a los aspectos particulares que se consideran aplicables y como oportunidades de mejora.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 text-justify mb-4">
                La auditoría técnica ISO 17020 es un proceso de evaluación que se implementa en los Organismos Nacionales de Acreditación (ONAC) según la ISO 17011 para la aplicación y la inspección de equipos, lo cual refleja a través resultados que INGYEND SAS puede certificar si la organización o la empresa productora cumpla o refleje a la eficacia de la certificación ONAC ISO 17020 o para realizar Ajustes internos.
              </p>
              
              <ul className="list-disc pl-5 mt-4 text-gray-700 dark:text-gray-300">
                <li>Acreditación en la NTC ISO 17020</li>
                <li>Acreditación en la NTC ISO 17024 (Certificación de competencias)</li>
                <li>Afiliado a la Asociación Colombiana de Soldadura</li>
              </ul>
            </div>
            
            <div className="mt-8 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <img 
                  src="/src/assets/otrosServicios/ISO2-17020Auditoria.webp" 
                  alt="ONAC Logo" 
                  className="h-20 w-auto object-contain bg-transparent filter contrast-125 brightness-105"
                  style={{ WebkitFilter: 'drop-shadow(0 0 0 rgba(255,255,255,0))', filter: 'drop-shadow(0 0 0 rgba(255,255,255,0))' }}
                />
              </div>
              <div>
                <img 
                  src="/src/assets/otrosServicios/AcosendAuditoria.webp" 
                  alt="Asociación Colombiana de Soldadura" 
                  className="h-24 w-auto object-contain bg-transparent filter contrast-125 brightness-105"
                  style={{ WebkitFilter: 'drop-shadow(0 0 0 rgba(255,255,255,0))', filter: 'drop-shadow(0 0 0 rgba(255,255,255,0))' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <DarkThemeToggle className="fixed bottom-14 right-4" />
      <CustomFooter />
    </div>
  );
};

export default AuditoriasTecnicas;