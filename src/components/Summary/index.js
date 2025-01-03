import React from 'react';
import { motion } from 'framer-motion';

const Summary = () => {
  const summaryData = [
    "Desarrollador de Software y Administrador de Bases de Datos con experiencia en el diseño, desarrollo y mantenimiento de sistemas utilizando tecnologías como PHP y C#. Trabajo tanto en frontend como backend, lo que me permite crear soluciones completas.",
    "Manejo bases de datos como SQL Server, MySQL y Oracle, y he trabajado en la integración de datos con Linked Server y en procesos ETL para la migración y consolidación de datos.",
    "Uso Transact-SQL para desarrollar y optimizar consultas, mejorando el rendimiento de aplicaciones. También he implementado jobs programados para automatizar tareas importantes como respaldos y mantenimiento de bases de datos.",
    "Tengo experiencia en la creación de dashboards e informes interactivos en Power BI, facilitando a las organizaciones visualizar datos clave y tomar decisiones informadas basadas en análisis en tiempo real."
  ];

  const educationData = [
    {
      title: 'Analítica Avanzada con Power BI, R y Python',
      date: '2024',
      institution: 'Universidad Nacional de Ingeniería - UNI',
    },
    {
      title: 'Ingeniería en Computación',
      date: '2017 - 2024',
      institution: 'Universidad Nacional de Ingeniería - UNI',
    },
    {
      title: 'Secundaria',
      date: '2011 - 2016',
      institution: 'Colegio Público Los Cedros',
    },
    {
      title: 'Excel Básico y Avanzado',
      date: '2016',
      institution: 'CECNA | Managua',
    },
    {
      title: 'Inglés Básico',
      date: '2015',
      institution: 'CECNA | Managua',
    },
  ];

  return (
    <section className="bg-secondary text-white min-h-screen w-full flex items-center justify-center">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-12 p-6">
        {/* Resumen */}
        <motion.div
          className="summary-info"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="text-3xl lg:text-5xl font-bold leading-relaxed">
            Resumen
          </h1>
          {summaryData.map((text, index) => (
            <motion.p
              key={index}
              className="pb-4 text-justify"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: false }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        {/* Educación */}
        <motion.div
          className="education-info bg-white text-black p-4 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-xl lg:text-2xl font-bold text-center mb-3 text-secondary">
            Educación
          </h2>
          <div className="education-list space-y-4">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className="education-item p-3 bg-gray-100 rounded-md shadow"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 1.5 }}
                viewport={{ once: false }}
              >
                <motion.h3
                  className="text-base font-semibold text-secondary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 1.5 }}
                >
                  {edu.title}
                </motion.h3>
                <motion.p
                  className="text-xs"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 1.5 }}
                >
                  {edu.institution}
                </motion.p>
                <motion.span
                  className="text-xs text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 1.5 }}
                >
                  {edu.date}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Summary;
