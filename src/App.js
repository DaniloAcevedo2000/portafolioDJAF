import '../src/App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Project from './components/Project';
import Summary from './components/Summary';

function App() {

  const [showButton, setShowButton] = useState(false);
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
      {/* Muestra el botón solo si showButton es true */}
      {showButton && (
        <button onClick={scrollToTop} className="scroll-to-top">
          &#8593;
        </button>
      )}
    </div>
  );
}

export default App;
