import React from 'react';
import Dropdown from './Dropdown';

const NavMenu = ({ items, isMenuOpen }) => {
  return (
    <div
      className={`${
        isMenuOpen ? 'block' : 'hidden'
      } absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg md:relative md:top-0 md:left-0 md:block md:w-auto md:bg-transparent md:border-0 md:shadow-none`}
    >
      <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
        {items.map((item, index) =>
          item.subItems ? (
            <li key={index} className="relative group">
              <Dropdown label={item.label} items={item.subItems} />
            </li>
          ) : (
            <li key={index}>
              <a
                href={item.href}
                className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
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
