import '../src/App.css';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Project from './components/Project';
import Summary from './components/Summary';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

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
      </div>
    </div>
  );
}

export default App;
