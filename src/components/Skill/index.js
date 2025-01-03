import React from 'react';
import { motion } from 'framer-motion';
import cSharpIcon from '../../assets/img/c.png';
import vbIcon from '../../assets/img/vb.png';
import php from '../../assets/img/php1.png';
import js from '../../assets/img/js.webp';
import react from '../../assets/img/recat.png';
import py from '../../assets/img/python1.png';
import pbi from '../../assets/img/pbi.png';
import r from '../../assets/img/r.png';
import sql from '../../assets/img/servidor-sql.png';
import toad from '../../assets/img/base-de-datos.png';
import mysql from '../../assets/img/mysql (1).png';
import excel from '../../assets/img/sobresalir.png';
import word from '../../assets/img/palabra.png';
import power from '../../assets/img/powerpoint.png';

const Skill = () => {
    const skills = {
        languages: [
            { name: 'C#', icon: cSharpIcon },
            { name: 'Visual Basic', icon: vbIcon },
            { name: 'PHP', icon: php },
            { name: 'JavaScript', icon: js },
            { name: 'React', icon: react },
        ],
        analysisTools: [
            { name: 'Python', icon: py },
            { name: 'Power BI', icon: pbi },
            { name: 'R - Studio', icon: r },
        ],
        databaseManagers: [
            { name: 'SQL Server', icon: sql },
            { name: 'MySQL', icon: mysql },
            { name: 'Oracle', icon: toad },
        ],
        officeTools: [
            { name: 'Excel', icon: excel },
            { name: 'Word', icon: word },
            { name: 'Power Point', icon: power }
        ]
    };

    return (
        <section className='bg-secondary text-white min-h-screen w-full py-16'>
            <div className='container mx-auto'>
                <h1 className='text-2xl lg:text-6xl leading-loose font-semibold'>Habilidades</h1>

                <div className='flex flex-col lg:flex-row justify-center items-start gap-16'>
                    {/* Lenguajes */}
                    <motion.div
                        className="w-full lg:w-1/4"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className='text-2xl font-semibold mb-4 text-center lg:text-left'>Lenguajes</h3>
                        <div className='flex flex-col gap-4'>
                            {skills.languages.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className='bg-gray-800 p-4 rounded-lg flex items-center gap-4 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl'
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className='bg-white rounded-full p-3'>
                                        <img src={skill.icon} alt={`${skill.name} icon`} className='h-10 w-10' />
                                    </div>
                                    <h4 className='text-xl font-medium'>{skill.name}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Herramientas de Análisis */}
                    <motion.div
                        className="w-full lg:w-1/4"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className='text-2xl font-semibold mb-4 text-center lg:text-left'>Herramientas de Análisis</h3>
                        <div className='flex flex-col gap-4'>
                            {skills.analysisTools.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className='bg-gray-800 p-4 rounded-lg flex items-center gap-4 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl'
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className='bg-white rounded-full p-3'>
                                        <img src={skill.icon} alt={`${skill.name} icon`} className='h-10 w-10' />
                                    </div>
                                    <h4 className='text-xl font-medium'>{skill.name}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Gestores de Bases de Datos */}
                    <motion.div
                        className="w-full lg:w-1/4"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h3 className='text-2xl font-semibold mb-4 text-center lg:text-left'>Gestores de Bases de Datos</h3>
                        <div className='flex flex-col gap-4'>
                            {skills.databaseManagers.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className='bg-gray-800 p-4 rounded-lg flex items-center gap-4 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl'
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className='bg-white rounded-full p-3'>
                                        <img src={skill.icon} alt={`${skill.name} icon`} className='h-10 w-10' />
                                    </div>
                                    <h4 className='text-xl font-medium'>{skill.name}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Paquetería de Office */}
                    <motion.div
                        className="w-full lg:w-1/4"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <h3 className='text-2xl font-semibold mb-4 text-center lg:text-left'>Paquetería de Office</h3>
                        <div className='flex flex-col gap-4'>
                            {skills.officeTools.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className='bg-gray-800 p-4 rounded-lg flex items-center gap-4 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl'
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className='bg-white rounded-full p-3'>
                                        <img src={skill.icon} alt={`${skill.name} icon`} className='h-10 w-10' />
                                    </div>
                                    <h4 className='text-xl font-medium'>{skill.name}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
