import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGoogle, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto text-center">
        <p
          className="text-sm mb-6 opacity-90 hover:opacity-100 transition-opacity duration-500 ease-in-out"
        >
          &copy; {new Date().getFullYear()} <span className="font-bold">Danilo Acevedo</span>. Todos los derechos reservados... Hecho con mucho ❤️!.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://wa.me/+50585184853"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-green-500 transition-all duration-300 transform hover:scale-125"
            title="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>
          <a
            href="mailto:daniloacevedo2000@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-red-500 transition-all duration-300 transform hover:scale-125"
            title="Google"
          >
            <FontAwesomeIcon icon={faGoogle} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/danilo-acevedo-645372241/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-500 transition-all duration-300 transform hover:scale-125"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://github.com/DaniloAcevedo2000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-500 transition-all duration-300 transform hover:scale-125"
            title="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
