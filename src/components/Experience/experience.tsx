import React from "react";

const Experience: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-blue-500 p-8 dark:bg-blue-900">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* 10 AÑOS DE EXPERIENCIA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white dark:text-gray-200 sm:text-3xl lg:text-4xl">
            10 AÑOS
          </h2>
          <h3 className="text-xl text-white dark:text-gray-200 sm:text-2xl lg:text-3xl">
            DE EXPERIENCIA
          </h3>
        </div>

        {/* CUBRIMIENTO NACIONAL E INTERNACIONAL */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white dark:text-gray-200 sm:text-3xl lg:text-4xl">
            CUBRIMIENTO
          </h2>
          <h3 className="text-xl text-white dark:text-gray-200 sm:text-2xl lg:text-3xl">
            NACIONAL E INTERNACIONAL
          </h3>
        </div>

        {/* INSPECTORES CERTIFICADOS NIVELES 2 Y 3 */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white dark:text-gray-200 sm:text-3xl lg:text-4xl">
            INSPECTORES
          </h2>
          <h3 className="text-xl text-white dark:text-gray-200 sm:text-2xl lg:text-3xl">
            CERTIFICADOS
          </h3>
          <h3 className="text-xl text-white dark:text-gray-200 sm:text-2xl lg:text-3xl">
            NIVELES 2 Y 3
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Experience;
