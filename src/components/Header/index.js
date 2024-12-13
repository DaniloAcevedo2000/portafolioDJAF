import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsMoon, BsSun } from 'react-icons/bs';

const Header = ({ darkMode, handleThemeToggle }) => {
  const [toggle, setToggle] = React.useState(false);

  const handleToggle = () => setToggle(!toggle);

  const handleLinkClick = (e) => {
    e.preventDefault(); 
    const targetId = e.target.getAttribute('href').slice(1); 
    const targetSection = document.getElementById(targetId); 
    console.log("targetSection:", targetSection); 
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' }); 
    }
    setToggle(false); 
  };
  
  
  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white">
      <a href="#hero" className="logo text-2xl font-bold text-accent">
        DJAF
      </a>
      <nav className="hidden md:flex justify-end w-full">
        <ul className="flex space-x-4">
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#project">Proyectos</a></li>
          <li><a href="#skill">Habilidades</a></li>
          <li><a href="#contact">Contáctame</a></li>
          <li><a href="#summary">Resumen</a></li>

          {/* Botón de sol y luna dentro del <ul> y alineado a la derecha */}
          <li className="ml-auto">
          <button
            onClick={handleThemeToggle}
            className={`px-3 py-1 rounded bg-transparent flex items-center ${
              darkMode ? "text-yellow-500" : "text-gray-900"
            }`}
          >
            {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>
          </li>
        </ul>
      </nav>

      {/* Agregar clase "mobile-nav" y "show" según el estado toggle */}
      <nav className={`mobile-nav ${toggle ? 'show' : ''}`}>
        <ul>
          <li><a href="#about" onClick={handleLinkClick}>Sobre mí</a></li>
          <li><a href="#project" onClick={handleLinkClick}>Proyectos</a></li>
          <li><a href="#skill" onClick={handleLinkClick}>Habilidades</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contáctame</a></li>
          <li><a href="#summary" onClick={handleLinkClick}>Resumen</a></li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <button onClick={handleToggle} className="block md:hidden">
          {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
