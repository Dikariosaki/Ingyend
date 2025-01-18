import React, { useState } from 'react';
import Logo from './Logo';
import NavToggle from './NavToggle';
import NavMenu from './NavMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#' },
    { label: 'Empresa', href: '#' },
    {
      label: 'Ensayos END',
      subItems: [
        { label: 'Inspeccion visual', href: '#' },
        { label: 'UltraSonido', href: '#' },
        { label: 'Particula Magneticas', href: '#' },
        { label: 'Liquidos Penetrantes', href: '#' },
        { label: 'Termografia', href: '#' },
        { label: 'Radiografia Rayos X', href: '#' },
        { label: 'Inspeccion Por torque', href: '#' },
      ],
    },
    {
        label: 'Otros Servicios',
        subItems: [
          { label: 'Proximos Cursos', href: '#' },
          { label: 'Inspeccion de componentes', href: '#',
            subItems: [
                { label: 'Quinta rueda', href: '#' },
              ],
           },
          { label: 'Calificacion de soldadores', href: '#' },
          { label: 'AUDITORIAS TÉCNICAS ISO 17020.', href: '#' },
          { label: 'Charlas y cursos', href: '#' },
          { label: 'Torque y verificacion de pernos', href: '#' },
          { label: 'Diseño y elaboracion de procedimientos END', href: '#' },
          { label: 'AUDITORIAS TÉCNICAS ISO 17020.', href: '#' },
          { label: 'INSPECTORES CALIFICADOS Y CERTIFICADOS POR INGYEND SAS', href: '#' },
          { label: 'INSPECTORES CAPACITADOS Y ENTRENADOS POR INGYEND SAS', href: '#' },

        ],
      },
    { label: 'Contactenos', href: '#' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 relative">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <Logo />
        <NavToggle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <NavMenu items={navItems} isMenuOpen={isMenuOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
