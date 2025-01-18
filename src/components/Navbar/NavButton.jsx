import React from 'react';
import Dropdown from './Dropdown';

const NavMenu = ({ items, isMenuOpen }) => {
  return (
    <div
      className={`${
        isMenuOpen ? 'block' : 'hidden'
      } md:block md:w-auto`}
      id="navbar-multi-level"
    >
      <ul className="flex flex-col md:flex-row font-medium p-4 mt-4 bg-gray-50 border border-gray-100 rounded-lg md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
        {items.map((item, index) =>
          item.subItems ? (
            <li key={index} className="relative group">
              <Dropdown label={item.label} items={item.subItems} />
            </li>
          ) : (
            <li key={index}>
              <a
                href={item.href}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {item.label}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default NavMenu;
