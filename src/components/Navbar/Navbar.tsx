import React, { useState } from "react";
import Logo from "./Logo";
import NavToggle from "./NavToggle";
import NavMenu from "./NavMenu";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Empresa", href: "#" },
    {
      label: "Ensayos END",
      subItems: [
        { label: "Inspección Visual", href: "/servicios/inspeccionVisual" },
        { label: "Ultrasonido", href: "/servicios/ultrasonido" },
        {
          label: "Partículas Magnéticas",
          href: "/servicios/particulasMagneticas",
        },
        {
          label: "Líquidos Penetrantes",
          href: "/servicios/liquidosPenetrantes",
        },
        { label: "Termografía", href: "/servicios/termografia" },
        { label: "Radiografía Rayos X", href: "/servicios/rayosX" },
        {
          label: "Inspección por Torque",
          href: "/servicios/inspeccionPorTorque",
        },
      ],
    },
    {
      label: "Otros Servicios",
      subItems: [
        { label: "Próximos Cursos", href: "/Otros-servicios/Proximos-cursos" },
        {
          label: "Inspección de Componentes",
          subItems: [
            { label: "Quinta Rueda", href: "/Otros-servicios/Inspección-de-Componentes/quintaRueda" },
          ],
        },
        { label: "Calificacion de soldadores", href: "/Otros-servicios/Calificacion-Soldadores" },
        { label: "AUDITORIAS TÉCNICAS ISO 17020.", href: "/Otros-servicios/Auditorias-Tecnicas" },
        { label: "Charlas y cursos", href: "#" },
        { label: "Torque y verificacion de pernos", href: "#" },
        { label: "Diseño y elaboracion de procedimientos END", href: "#" },
        { label: "AUDITORIAS TÉCNICAS ISO 17020.", href: "#" },
        {
          label: "INSPECTORES CALIFICADOS Y CERTIFICADOS POR INGYEND SAS",
          href: "#",
        },
        {
          label: "INSPECTORES CAPACITADOS Y ENTRENADOS POR INGYEND SAS",
          href: "#",
        },
      ],
    },
    { label: "Contáctenos", href: "#" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        <Logo />
        <NavToggle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <NavMenu items={navItems} isMenuOpen={isMenuOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
