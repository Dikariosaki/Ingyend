import React from "react";

export interface CardProps {
  imageSrc?: string;
  title?: string;
  description?: string;
  link?: string;
  buttonText?: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  link,
  buttonText,
}) => {
  // Determinamos si hay contenido adicional (título, descripción o botón)
  const hasContent = title || description || buttonText;

  return (
    <div className="max-w-sm h-full overflow-hidden rounded-lg bg-transparent flex flex-col justify-center">
      {imageSrc && (
        <div>
          {link ? (
            <a href={link}>
              <img
                className={`w-full object-cover ${
                  hasContent ? "rounded-t-lg" : "rounded-lg"
                } h-auto max-h-48`}
                src={imageSrc}
                alt={title || ""}
              />
            </a>
          ) : (
            <img
              className={`w-full object-cover ${
                hasContent ? "rounded-t-lg" : "rounded-lg"
              } h-auto max-h-48`}
              src={imageSrc}
              alt={title || ""}
            />
          )}
        </div>
      )}
      
      {hasContent && (
        <div className="rounded-b-lg p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow">
          {title && (
            <>
              {link ? (
                <a href={link}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                  </h5>
                </a>
              ) : (
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
              )}
            </>
          )}
          {description && (
            <p className="mb-3 whitespace-normal break-words font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
          )}
          {buttonText && link && (
            <a
              href={link}
              className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {buttonText}
              <svg
                className="ml-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
