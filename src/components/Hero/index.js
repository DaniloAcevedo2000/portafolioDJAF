import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faDownload } from '@fortawesome/free-solid-svg-icons';
import HeroImg from '../../assets/img/coding.webp';
import { ReactTyped as Typed } from 'react-typed';



const Hero = () => {
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/CV_Danilo.pdf';
        link.setAttribute('download', 'CV_Danilo.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

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
                    <h1 className='text-2xl lg:text-6xl leading-loose'>
                        <Typed
                            strings={['Hola, Soy Danilo Acevedo - Ingeniero en Computación']}
                            typeSpeed={50}
                            backSpeed={50}
                            loop={false}
                        />
                    </h1>

                    <div className="overflow-hidden whitespace-nowrap">
                        <p className="py-5 animate-marquee">
                            Soy un apasionado por la tecnología y la programación. Me gusta aprender y mejorar.
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
}

export default Hero;
