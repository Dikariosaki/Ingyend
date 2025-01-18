import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    theme: {
      extend: {
        colors: {
          primary: '#1d4ed8', // Azul principal
          primaryHover: '#1e40af', // Azul más oscuro para hover
          secondary: '#374151', // Gris oscuro para texto
          light: '#f3f4f6', // Gris claro para fondos y hover
          dark: '#111827', // Negro oscuro para fondos en dark mode
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
