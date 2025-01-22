const CarouselSlide = ({ imageSrc, title, description, textPosition, isActive }) => {
    const positionClasses = {
      left: "text-left left-8",
      center: "text-center left-1/2 transform -translate-x-1/2",
      right: "text-right right-8",
    };
  
    return (
      <div
        className={`${
          isActive ? "block" : "hidden"
        } duration-700 ease-in-out relative h-full`}
      >
        {/* Imagen */}
        <img
          src={imageSrc}
          alt={title || "Carousel slide"}
          className="absolute block w-full h-full object-cover"
        />
        
        {/* Texto opcional */}
        {(title || description) && (
          <div
            className={`absolute bottom-8 ${positionClasses[textPosition]} bg-black/50 text-white p-4 rounded-md max-w-md`}
          >
            {title && <h2 className="text-lg font-bold">{title}</h2>}
            {description && <p className="text-sm">{description}</p>}
          </div>
        )}
      </div>
    );
  };
  
  export default CarouselSlide;
  