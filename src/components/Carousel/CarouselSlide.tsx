import React from "react";
import classNames from "classnames";

interface CarouselSlideProps {
  imageSrc: string;
  title?: string;
  description?: string;
  textPosition?: "left" | "center" | "right";
  isActive: boolean;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ 
  imageSrc, 
  title, 
  description, 
  textPosition = "center", 
  isActive,
  subtitle,
  buttonText,
  buttonLink
}) => {
  const positionClasses = {
    left: "text-left left-8",
    center: "text-center left-1/2 transform -translate-x-1/2",
    right: "text-right right-8",
  };
  
  return (
    <div
      className={classNames(
        "absolute inset-0 h-full w-full transition-opacity duration-700 ease-in-out",
        {
          "opacity-100 z-10": isActive,
          "opacity-0 z-0": !isActive
        }
      )}
      aria-hidden={!isActive}
    >
      {/* Imagen */}
      <img
        src={imageSrc}
        alt={title || "Carousel slide"}
        className="absolute block h-full w-full object-cover transition-transform duration-700"
        style={{
          transform: isActive ? "scale(1)" : "scale(1.05)"
        }}
        loading={isActive ? "eager" : "lazy"}
      />
      
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      
      {/* Texto opcional */}
      {(title || description) && (
        <div
          className={classNames(
            "absolute z-10 max-w-md rounded-lg p-6 backdrop-blur-sm transition-all duration-500",
            positionClasses[textPosition],
            {
              "bottom-8": !positionClasses[textPosition].includes("transform")
            }
          )}
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? "translateY(0)" : "translateY(20px)"
          }}
        >
          {subtitle && (
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-white/90">
              {subtitle}
            </span>
          )}
          
          {title && (
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              {title}
            </h2>
          )}
          
          {description && (
            <p className="mb-4 text-sm text-white/90 md:text-base">
              {description}
            </p>
          )}
          
          {/* Botón CTA opcional */}
          {buttonText && (
            <a
              href={buttonLink || "#"}
              className="inline-block rounded bg-white px-5 py-2 font-medium text-gray-900 transition-all hover:bg-gray-100"
            >
              {buttonText}
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default CarouselSlide;
  