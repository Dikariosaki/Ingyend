import React from 'react';

const Logo = () => {
  return (
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-8"
        alt="Flowbite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Ingyend
      </span>
    </a>
  );
};

export default Logo;
