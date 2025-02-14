import React from "react";

const Logo: React.FC = () => {
  return (
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/img/home/logo.webp" className="h-20" alt="Flowbite Logo" />
      <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
        Ingyend
      </span>
    </a>
  );
};

export default Logo;
