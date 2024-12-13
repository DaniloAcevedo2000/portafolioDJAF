import '../src/App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Project from './components/Project';
import Summary from './components/Summary';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [showButton, setShowButton] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleExpand = () => setIsExpanded(!isExpanded);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };
  

  useEffect(() => {
    const handleScroll = () => setShowButton(window.pageYOffset > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className={`App ${darkMode ? "dark" : ""}`}>
        <Header darkMode={darkMode} handleThemeToggle={handleThemeToggle} />
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
        <Footer></Footer>
        {/* Botones flotantes */}
        {showButton && (
          <>
            <button onClick={scrollToTop} className="scroll-to-top">
              &#8593;
            </button>
            <div className="floating-button-container">
              <button onClick={toggleExpand} className="floating-button">
                <FontAwesomeIcon icon={isExpanded ? faTimes : faPlus} />
              </button>
              {isExpanded && (
                <div className="floating-icons">
                  <a
                    href="https://wa.me/+50585184853"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="floating-icon whatsapp"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                  <a
                    href="mailto:daniloacevedo2000@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="floating-icon gmail"
                  >
                    <FontAwesomeIcon icon={faGoogle} />
                  </a>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
