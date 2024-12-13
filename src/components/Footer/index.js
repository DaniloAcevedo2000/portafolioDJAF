import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGoogle, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} Danilo Acevedo. Todos los derechos reservados.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://wa.me/+50585184853"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-green-500 transition duration-200"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>
          <a
            href="mailto:daniloacevedo2000@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-red-500 transition duration-200"
          >
            <FontAwesomeIcon icon={faGoogle} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/danilo-acevedo-645372241/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-500 transition duration-200"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://github.com/DaniloAcevedo2000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-500 transition duration-200"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
