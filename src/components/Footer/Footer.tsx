import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsEnvelope, BsTelephone, BsGeoAlt } from "react-icons/bs";
import type { FC } from "react";

const CustomFooter: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer container className="rounded-none shadow-lg">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="mb-6 md:mb-0">
            <Footer.Brand
              href="https://ingyend.com.co"
              src="/img/home/logo.webp"
              alt="Ingyend Logo"
              name="Ingyend"
            />
            <p className="mt-2 max-w-md text-sm text-gray-500 dark:text-gray-400">
              Soluciones en ensayos no destructivos para la industria colombiana.
            </p>
            <div className="mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <BsEnvelope />
                <a href="mailto:contacto@ingyend.com.co">contacto@ingyend.com.co</a>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <BsTelephone />
                <a href="tel:+573000000000">+57 300 000 0000</a>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <BsGeoAlt />
                <span>Bogotá, Colombia</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Nosotros" />
              <Footer.LinkGroup col>
                <Footer.Link href="/empresa">Empresa</Footer.Link>
                <Footer.Link href="/servicios">Ensayos END</Footer.Link>
                <Footer.Link href="/proyectos">Proyectos</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Síguenos" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://facebook.com/ingyend" target="_blank" rel="noopener noreferrer">
                  Facebook
                </Footer.Link>
                <Footer.Link href="https://instagram.com/ingyend" target="_blank" rel="noopener noreferrer">
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="/politica-privacidad">Política de Privacidad</Footer.Link>
                <Footer.Link href="/terminos-condiciones">Términos y Condiciones</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright 
            href="https://ingyend.com.co" 
            by="Ingyend" 
            year={currentYear} 
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon 
              href="https://facebook.com/ingyend" 
              icon={BsFacebook} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Ingyend"
            />
            <Footer.Icon 
              href="https://instagram.com/ingyend" 
              icon={BsInstagram} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Ingyend"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;