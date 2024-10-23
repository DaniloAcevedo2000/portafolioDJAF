import React from 'react';
import AboutImg from '../../assets/img/About-me.webp';

const About = () => {
  return (
    <section className='bg-secondary text-white min-h-screen w-full flex items-center justify-center'>
      <div className='container mx-auto grid md:grid-cols-2 items-center md:justify-between'>
        <div className='about-info'>
          <h1 className='text-2xl lg:text-6xl leading-loose'>
            Acerca de mí
          </h1>
          <p className='pb-5 text-justify'>
            Soy un desarrollador apasionado por la tecnología y la innovación. Tengo experiencia en tecnologías tanto frontend como backend, y me enfoco en resolver problemas a través del desarrollo, proporcionando soluciones prácticas y efectivas.
          </p>

          <p className='pb-5 text-justify'>
            Soy un firme creyente en la colaboración en equipo, la optimización de procesos, y siempre busco formas de innovar en cada proyecto, con el objetivo de aportar valor real tanto a los usuarios como a los clientes.
          </p>

          <p className='pb-5 text-justify'>
            Me apasiona el desarollo web y el análisis de datos, ya que considero que la correcta interpretación de los datos puede aportar insights valiosos para la toma de decisiones y la mejora continua en los proyectos.
          </p>

          <p className='pb-5 text-justify'>
            Actualmente, estoy interesado en expandir mis conocimientos en el mundo de la programación y el análisis de datos, con el propósito de integrar las tecnologías en soluciones que mejoren la vida de los usuarios y generen un impacto positivo. Siempre estoy en busca de nuevos desafíos que me permitan seguir aprendiendo y creciendo profesionalmente.
          </p>
        </div>

        <div className='about-img'>
          <img src={AboutImg} alt="Desarrollador trabajando" className='w-[80%] ml-auto' />
        </div>
      </div>
    </section>
  );
};

export default About;
