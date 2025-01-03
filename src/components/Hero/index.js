import React, { useState, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faDownload } from '@fortawesome/free-solid-svg-icons';
import HeroImg from '../../assets/img/fondo.jpg';

const Hero = () => {
    const phrases = useMemo(() => [
        'Hola, Soy Danilo Acevedo',
        'Analista de Datos y Desarrollador Web'
    ], []);

    const [visiblePhrases, setVisiblePhrases] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < phrases.length) {
            const timeout = setTimeout(() => {
                setVisiblePhrases((prev) => [...prev, phrases[currentIndex]]);
                setCurrentIndex((prev) => prev + 1);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, phrases]);

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/CV_Danilo.pdf';
        link.setAttribute('download', 'CV_Danilo.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const scrollToProjects = () => {
        const projectSection = document.getElementById('project');
        if (projectSection) {
            projectSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            className="relative bg-cover bg-center min-h-screen w-full flex items-center justify-center"
            style={{
                backgroundImage: `url(${HeroImg})`,
            }}
        >
            {/* Fondo con degradado más oscuro */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black opacity-95"></div>

            {/* Contenido */}
            <div className="container relative z-10 mx-auto grid md:grid-cols-2 items-center">
                <div className="hero-info text-white">
                    {/* Animación de frases */}
                    <div className="text-2xl md:text-5xl font-bold leading-loose">
                        {visiblePhrases.map((phrase, index) => (
                            <h6
                                key={index}
                                className={`fade-in ${index === 1 ? 'text-accent' : ''}`}
                            >
                                {phrase}
                            </h6>
                        ))}
                    </div>

                    {/* Descripción */}
                    <div className="overflow-hidden">
                        <p className="py-5 text-highlight animate-marquee">
                            Combinando Análisis, Desarrollo y Creatividad para construir soluciones.
                        </p>
                    </div>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                        <button
                            onClick={scrollToProjects}
                            aria-label="Ver proyectos"
                            className="btn bg-gradient-to-r from-purple-500 to-indigo-500 border-2 border-indigo-500 text-white px-6 py-3 hover:from-transparent hover:to-transparent hover:border-white flex items-center justify-center w-full sm:w-auto transition-all duration-300 focus:ring focus:outline-none"
                        >
                            <FontAwesomeIcon icon={faEye} className="mr-2" />
                            Ver Proyectos
                        </button>

                        <button
                            onClick={downloadCV}
                            aria-label="Descargar CV"
                            className="btn bg-gradient-to-r from-green-500 to-teal-500 border-2 border-teal-500 text-white px-6 py-3 hover:from-transparent hover:to-transparent hover:border-white flex items-center justify-center w-full sm:w-auto transition-all duration-300 focus:ring focus:outline-none"
                        >
                            <FontAwesomeIcon icon={faDownload} className="mr-2" />
                            Descargar CV
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
