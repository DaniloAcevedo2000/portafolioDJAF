import React from 'react';

const Summary = () => {
  return (
    <section className='bg-secondary text-white min-h-screen w-full flex items-center justify-center'>
      <div className='container mx-auto grid md:grid-cols-2 items-center md:justify-between gap-8'>
        
        {/* Sección de Resumen */}
        <div className='summary-info'>
          <h1 className='text-2xl lg:text-6xl font-bold leading-loose'>
            Resumen
          </h1>
          <p className='pb-5 text-justify'>
            Desarrollador de Software y Administrador de Bases de Datos con experiencia en el diseño, desarrollo y mantenimiento de sistemas utilizando tecnologías como PHP y C#. Trabajo tanto en frontend como backend, lo que me permite crear soluciones completas
          </p>
          <p className='pb-5 text-justify'>
            Manejo bases de datos como SQL Server, MySQL y Oracle, y he trabajado en la integración de datos con Linked Server y en procesos ETL (Extracción, Transformación y Carga) para la migración y consolidación de datos.
          </p>
          <p className='pb-5 text-justify'>
            Uso Transact-SQL para desarrollar y optimizar consultas para mejoran el rendimiento de las aplicaciones. También he implementado jobs programados para la automatización de tareas importantes como respaldos y mantenimiento de bases de datos.
          </p>
          <p className='pb-5 text-justify'>
            Tengo experiencia en la creación de dashboards e informes interactivos en Power BI, facilitando a las organizaciones visualizar datos clave y tomar decisiones informadas basadas en análisis en tiempo real.
          </p>
        </div>

        {/* Sección de Educación */}
        <div className='education-info bg-white text-black p-8 rounded-lg shadow-lg'>
          <h2 className='text-xl lg:text-4xl font-bold text-center mb-6 text-secondary'>
            Educación
          </h2>
          
          <div className='education-item mb-8'>
            <h3 className='text-lg font-semibold text-secondary'>Analítica Avanzada con Power BI, R y Python</h3>
            <p className='text-sm'>2024</p>
            <p className='text-sm'>Universidad Nacional de Ingeniería - UNI</p>
          </div>

          <div className='education-item mb-8'>
            <h3 className='text-lg font-semibold text-secondary'>Ingeniería en Computación</h3>
            <p className='text-sm'>2017 - 2024</p>
            <p className='text-sm'>Universidad Nacional de Ingeniería - UNI</p>
          </div>

          <div className='education-item mb-8'>
            <h3 className='text-lg font-semibold text-secondary'>Secundaria</h3>
            <p className='text-sm'>2011 - 2016</p>
            <p className='text-sm'>Colegio Público Los Cedros</p>
          </div>

          <div className='education-item mb-8'>
            <h3 className='text-lg font-semibold text-secondary'>Excel Básico y Avanzado</h3>
            <p className='text-sm'>2016</p>
            <p className='text-sm'>CECNA | Managua</p>
          </div>

          <div className='education-item mb-8'>
            <h3 className='text-lg font-semibold text-secondary'>Inglés Básico</h3>
            <p className='text-sm'>2015</p>
            <p className='text-sm'>CECNA | Managua</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
