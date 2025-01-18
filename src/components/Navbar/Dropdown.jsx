import React, { useState } from 'react';

const Dropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  return (
    <div className="relative">
      {/* Botón principal del dropdown */}
      <button
        className="flex items-center justify-between w-full py-2 px-4 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-blue-500"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <span className="mr-2">{label}</span>
        <svg
          className="w-3 h-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1l4 4 4-4"
          />
        </svg>
      </button>

      {/* Contenido del dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 z-10 bg-white border border-gray-200 rounded-lg shadow-lg min-w-max max-w-screen-sm dark:bg-gray-800">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {items.map((item, index) =>
              item.subItems ? (
                <li key={index} className="relative group">
                  {/* Botón para submenús */}
                  <button
                    className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenSubmenu(openSubmenu === index ? null : index);
                    }}
                  >
                    <span className="mr-2">{item.label}</span>
                    <svg
                      className="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1l4 4 4-4"
                      />
                    </svg>
                  </button>

                  {/* Submenú */}
                  {openSubmenu === index && (
                    <div className="absolute left-0 top-full mt-2 z-10 bg-white border border-gray-200 rounded-lg shadow-lg w-auto max-w-[20rem] px-4 dark:bg-gray-800">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.href}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white whitespace-normal break-words text-left"
                            >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ) : (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white whitespace-normal break-words text-left"
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

