import React from 'react';
import cSharpIcon from '../../assets/img/c.png';
import vbIcon from '../../assets/img/vb.png';
import php from '../../assets/img/php1.png';
import html from '../../assets/img/html.png';
import css from '../../assets/img/css.png';
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
            { name: 'HTML', icon: html },
            { name: 'CSS', icon: css },
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
                <h1 className='text-4xl lg:text-6xl font-bold text-center mb-12 leading-loose'>Habilidades</h1>

                <div className='flex flex-col lg:flex-row justify-center items-start gap-16'>
                    {/* Lenguajes */}
                    <div className='w-full lg:w-1/4'>
                        <h3 className='text-2xl font-semibold mb-4 text-center lg:text-left'>Lenguajes</h3>
                        <div className='flex flex-col gap-4'>
                            {skills.languages.map((skill, index) => (
                                <div key={index} className='bg-gray-800 p-4 rounded-lg flex items-center gap-4 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl'>
                                    <div className='bg-white rounded-full p-3'>
                                        <img src={skill.icon} alt={`${skill.name} icon`} className='h-10 w-10' />
                                    </div>
                                    <h4 className='text-xl font-medium'>{skill.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Herramientas de Análisis */}
                    <div className='w-full lg:w-1/4'>
                        <h3 className='text-2xl font-semibold mb-4 text-center lg:text-left'>Herramientas de Análisis</h3>
                        <div className='flex flex-col gap-4'>
                            {skills.analysisTools.map((skill, index) => (
                                <div key={index} className='bg-gray-800 p-4 rounded-lg flex items-center gap-4 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl'>
                                    <div className='bg-white rounded-full p-3'>
                                        <img src={skill.icon} alt={`${skill.name} icon`} className='h-10 w-10' />
                                    </div>
                                    <h4 className='text-xl font-medium'>{skill.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gestores de Bases de Datos */}
                    <div className='w-full lg:w-1/4'>
                        <h3 className='text-2xl font-semibold mb-4 text-center lg:text-left'>Gestores de Bases de Datos</h3>
                        <div className='flex flex-col gap-4'>
                            {skills.databaseManagers.map((skill, index) => (
                                <div key={index} className='bg-gray-800 p-4 rounded-lg flex items-center gap-4 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl'>
                                    <div className='bg-white rounded-full p-3'>
                                        <img src={skill.icon} alt={`${skill.name} icon`} className='h-10 w-10' />
                                    </div>
                                    <h4 className='text-xl font-medium'>{skill.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Paquetería de Office */}
                    <div className='w-full lg:w-1/4'>
                        <h3 className='text-2xl font-semibold mb-4 text-center lg:text-left'>Paquetería de Office</h3>
                        <div className='flex flex-col gap-4'>
                            {skills.officeTools.map((skill, index) => (
                                <div key={index} className='bg-gray-800 p-4 rounded-lg flex items-center gap-4 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl'>
                                    <div className='bg-white rounded-full p-3'>
                                        <img src={skill.icon} alt={`${skill.name} icon`} className='h-10 w-10' />
                                    </div>
                                    <h4 className='text-xl font-medium'>{skill.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
