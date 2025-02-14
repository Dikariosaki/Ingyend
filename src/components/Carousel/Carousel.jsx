import React, { useState, useEffect } from "react";
import classNames from "classnames";

const CarouselImagesHome = () => {
  const slides = [
    {
      img: "../src/assets/home/Home-Principal-1.png",
      title: "Ingeniería Avanzada",
      subtitle: "Nuestros Proyectos",
      description:
        "Innovamos en soluciones técnicas para garantizar resultados óptimos.",
      textPosition: "top-1/2 left-10 -translate-y-1/2", // Texto a la izquierda
    },
    {
      img: "../src/assets/home/Home-Principal-1.png",
      title: "Calidad Garantizada",
      subtitle: "Inspecciones Certificadas",
      description:
        "Cumplimos con estándares internacionales para asegurar excelencia.",
      textPosition: "top-1/2 right-10 -translate-y-1/2", // Texto a la derecha
    },
    {
      img: "../src/assets/home/Home-Principal-1.png",
      title: "Soluciones Técnicas",
      subtitle: "Diseño y Desarrollo",
      description:
        "Ofrecemos servicios personalizados adaptados a tus necesidades.",
      textPosition: "bottom-10 left-1/2 -translate-x-1/2", // Texto centrado abajo
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(-1);
  const [sliderReady, setSliderReady] = useState(false);
  const AUTOCHANGE_TIME = 4000;

  useEffect(() => {
    const changeTO = setTimeout(() => {
      changeSlides(1);
    }, AUTOCHANGE_TIME);

    return () => clearTimeout(changeTO);
  }, [activeSlide]);

  useEffect(() => {
    setSliderReady(true);
  }, []);

  const changeSlides = (change) => {
    const prev = activeSlide;
    let next = activeSlide + change;

    if (next < 0) next = slides.length - 1;
    if (next >= slides.length) next = 0;

    setPrevSlide(prev);
    setActiveSlide(next);
  };

  return (
    <div
      className={classNames(
        "relative h-[100px] w-full overflow-hidden md:h-[700px]",
        {
          "slider s--ready": sliderReady,
        },
      )}
    >
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={classNames(
              "absolute h-full w-full transition-transform duration-700 ease-in-out",
              {
                "s--active": activeSlide === index,
                "s--prev": prevSlide === index,
              },
            )}
            style={{
              transform: `translateX(${(index - activeSlide) * 100}%)`,
            }}
          >
            {/* Slide Image */}
            <img
              src={slide.img}
              alt={slide.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Degradado Oscuro */}
            <div className="absolute inset-0 z-10 bg-black/40"></div>

            {/* Slide Text */}
            <div
              className={classNames(
                "absolute z-20 flex flex-col items-center justify-center text-center text-white",
                slide.textPosition ||
                  "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
              )}
            >
              <h3 className="mb-2 text-xl uppercase tracking-wide md:text-2xl">
                {slide.subtitle || ""}
              </h3>
              <h2 className="text-4xl font-bold uppercase md:text-6xl">
                {slide.title}
              </h2>
              <p className="mt-4 text-lg md:text-xl">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-black/30 p-2 text-2xl text-white hover:bg-black/50"
        onClick={() => changeSlides(-1)}
      >
        ‹
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-black/30 p-2 text-2xl text-white hover:bg-black/50"
        onClick={() => changeSlides(1)}
      >
        ›
      </button>
    </div>
  );
};

export default CarouselImagesHome;
