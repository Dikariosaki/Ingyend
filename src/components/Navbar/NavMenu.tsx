import React from "react";
import Dropdown from "./Dropdown";

interface NavItem {
  label: string;
  href?: string;
  subItems?: NavItem[];
}

interface NavMenuProps {
  items: NavItem[];
  isMenuOpen: boolean;
}

const NavMenu: React.FC<NavMenuProps> = ({ items, isMenuOpen }) => {
  return (
    <div
      className={`${
        isMenuOpen ? "block" : "hidden"
      } absolute left-0 top-full w-full rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900 md:relative md:left-0 md:top-0 md:block md:w-auto md:border-0 md:bg-transparent md:shadow-none`}
    >
      <ul className="flex flex-col p-4 md:flex-row md:space-x-8 md:p-0">
        {items.map((item, index) => (
          <li key={index} className="group relative">
            {item.subItems ? (
              <Dropdown label={item.label} items={item.subItems} />
            ) : (
              <a
                href={item.href}
                className="block rounded px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
