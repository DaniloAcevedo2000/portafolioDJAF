import React, { useState, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faDownload } from '@fortawesome/free-solid-svg-icons';
import HeroImg from '../../assets/img/coding.webp';

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
        <section className='bg-primary text-white min-h-screen w-full flex items-center justify-center'>
            <div className='container mx-auto grid md:grid-cols-2 items-center md:justify-between'>
                <div className='hero-info'>
                    <div className='text-2xl md:text-5xl leading-loose'>
                        {visiblePhrases.map((phrase, index) => (
                            <h6 key={index} className='fade-in'>
                                <span className={index === 1 ? 'highlight' : ''}>
                                    {phrase}
                                </span>
                            </h6>
                        ))}
                    </div>

                    <div className="overflow-hidden">
                        <p className="py-5 animate-marquee text-highlight">
                            Combinando Análisis, Desarrollo y Creatividad para construir soluciones.
                        </p>
                    </div>

                    {/* Contenedor para los botones */}
                    <div className='flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-6'>
                        {/* Botón Ver Proyectos */}
                        <button 
                            onClick={scrollToProjects}
                            className='btn bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent flex items-center justify-center w-full sm:w-auto'>
                            <FontAwesomeIcon icon={faEye} className='mr-2' />
                            Ver Proyectos
                        </button>

                        {/* Botón Descargar CV */}
                        <button onClick={downloadCV} className='btn bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent flex items-center justify-center w-full sm:w-auto'>
                            <FontAwesomeIcon icon={faDownload} className='mr-2' />
                            Descargar CV
                        </button>
                    </div>
                </div>

                <div className='hero-img'>
                    <img src={HeroImg} alt="Código" className='w-[80%] ml-auto' />
                </div>
            </div>
        </section>
    );
};

export default Hero;
