import '../src/App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Project from './components/Project';
import Summary from './components/Summary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [showButton, setShowButton] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skill">
          <Skill />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="summary">
          <Summary />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Muestra el botón de scroll y el botón flotante */}
      {showButton && (
        <>
          <button onClick={scrollToTop} className="scroll-to-top">
            &#8593;
          </button>

          {/* Botón flotante con iconos */}
          <div className="floating-button-container">
            <button onClick={toggleExpand} className="floating-button">
              <FontAwesomeIcon icon={isExpanded ? faTimes : faPlus} />
            </button>
            
            {/* Iconos flotantes (solo visibles si el botón está expandido) */}
            {isExpanded && (
              <div className="floating-icons">
                <a href="https://wa.me/tu-numero" target="_blank" rel="noopener noreferrer" className="floating-icon whatsapp">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="mailto:tu-correo@gmail.com" target="_blank" rel="noopener noreferrer" className="floating-icon gmail">
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
