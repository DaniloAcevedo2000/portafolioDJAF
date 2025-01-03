import React from 'react';
import { motion } from 'framer-motion';
import AboutImg from '../../assets/img/about.webp';

const About = () => {
  return (
    <section className='bg-secondary text-white min-h-screen w-full flex items-center justify-center'>
      <div className='container mx-auto grid md:grid-cols-2 items-center md:gap-8'>
        <motion.div
          className='about-info'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-2xl lg:text-6xl leading-loose'>
            Acerca de mí
          </h1>

          <motion.p
            className='pb-4 text-justify'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Soy un desarrollador apasionado por la tecnología y la innovación. Tengo experiencia en tecnologías tanto frontend como backend, y me enfoco en resolver problemas a través del desarrollo, proporcionando soluciones prácticas y efectivas.
          </motion.p>

          <motion.p
            className='pb-4 text-justify'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Soy un firme creyente en la colaboración en equipo, la optimización de procesos, y siempre busco formas de innovar en cada proyecto, con el objetivo de aportar valor real tanto a los usuarios como a los clientes.
          </motion.p>

          <motion.p
            className='pb-4 text-justify'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Me apasiona el desarrollo web y el análisis de datos, ya que considero que la correcta interpretación de los datos puede aportar insights valiosos para la toma de decisiones y la mejora continua en los proyectos.
          </motion.p>

          <motion.p
            className='pb-4 text-justify'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Actualmente, estoy interesado en expandir mis conocimientos en el mundo de la programación y el análisis de datos, con el propósito de integrar las tecnologías en soluciones que mejoren la vida de los usuarios y generen un impacto positivo. Siempre estoy en busca de nuevos desafíos que me permitan seguir aprendiendo y creciendo profesionalmente.
          </motion.p>
        </motion.div>

        <motion.div
          className='about-img relative'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Imagen con degradado y bordes suaves */}
          <div className="relative w-[80%] mx-auto md:ml-auto">
            <img
              src={AboutImg}
              alt="Desarrollador trabajando"
              className='w-full h-auto rounded-lg shadow-xl object-cover relative z-10'
            />
            {/* Degradado a los bordes */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary opacity-80 rounded-lg z-0"></div>
            <div className="absolute inset-0 border-4 border-transparent rounded-lg" style={{ 
              background: 'radial-gradient(circle, rgba(0,0,0,0.7) 0%, transparent 70%)' 
            }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
