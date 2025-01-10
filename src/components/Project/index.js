import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import ventaImg from "../../assets/img/Ventas.png";
import kpiImg from "../../assets/img/KP-Detalle.png";
import portafolioImg from "../../assets/img/Portafolio.png";
import referenciaImg from "../../assets/img/Referencias.png";
import ExepcionesImg from "../../assets/img/Excepciones.png";
import API from "../../assets/img/API.png"


const Project = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const projects = [
        {
            title: "Sistema de Control de Ventas",
            description: "Sistema para registrar y validar ventas, con frontend en HTML y Bootstrap. Incluye módulos de reportes, gestión de usuarios, roles, permisos, encriptación de contraseñas y administración de catálogos.",
            technologies: ["HTML", "PHP", "AJAX", "JavaScript", "MySQL"],
            link: "https://github.com/DaniloAcevedo2000/Proyectos-Web.git",
            image: ventaImg,
        },
        {
            title: "Excepciones de Ventas",
            description: "Sistema desarrollado en .NET C#, gestiona el control de excepciones en las ventas mediante la entrada de datos relevantes y la generación de archivos PDF. Permite el seguimiento de excepciones por usuario, asegurando la gestión de la información a través de roles y permisos.",
            technologies: [".NET", "SQL Server"],
            link: "#",
            image: ExepcionesImg,
        },
        {
            title: "KPI HelpDesk",
            description: "Proyecto que visualiza de manera clara y efectiva la productividad de los usuarios que gestionan tickets, además de mostrar los canales con mayores reincidencias en la resolución. También permite el seguimiento detallado de los tickets a lo largo de sus diferentes estados.",
            technologies: ["Power BI", "SQL Server"],
            link: "https://github.com/DaniloAcevedo2000/Power-BI.git",
            image: kpiImg,
        },
        {
            title: "Sistema Referencias",
            description: "Sistema web para gestionar referencias de clientes, que incluye el registro de depósitos, rentas anticipadas y facturas. Realiza validaciones de clientes contra otros sistemas de ventas y cuenta con un módulo de control de excepciones.",
            technologies: ["PHP", "JavaScript", "SQL Server"],
            link: "#",
            image: referenciaImg,
        },
        {
            title: "Portafolio",
            description: "Este portafolio, desarrollado en React con Tailwind, presenta mis proyectos, habilidades y conocimientos en desarrollo web. A través de una interfaz moderna y responsiva, los visitantes pueden explorar mis trabajos anteriores y comprender mejor mi experiencia.",
            technologies: ["React", "Tailwind"],
            link: "https://github.com/DaniloAcevedo2000/portafolio.git",
            image: portafolioImg,
        },
        {
            title: "Organización API",
            description: "API RESTful para la gestión de organizaciones con control basado en roles y permisos. Incluye autenticación y autorización segura con JWT, soporte para refresh tokens, y bloqueo automático tras múltiples intentos fallidos.",
            technologies: [".NET", "C#", "SQL Server", "JWT", "Entity Framework Core", "REST"],
            link: "https://github.com/DaniloAcevedo2000/portafolio.git",
            image: API,
        }        
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="bg-primary text-white py-16">
            <div className="container mx-auto px-6">
                <h1 className="text-2xl lg:text-6xl leading-loose font-bold">
                    Proyectos Destacados
                </h1>
                <Slider {...settings} className="project-slider">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <motion.div
                                className="bg-secondary shadow-lg rounded-lg overflow-hidden p-2"
                                initial={{ x: "100%" }}
                                animate={{
                                    x: hoveredIndex === index ? "0%" : "0%",
                                }}
                                transition={{
                                    duration: hoveredIndex === index ? 0.2 : 0,
                                    ease: "linear",
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 1.05 }}
                            >
                                <div className="p-4 bg-secondary rounded-lg">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-2xl font-semibold mb-3">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 mb-4">
                                            {project.description}
                                        </p>
                                        <p className="text-sm text-gray-400 mb-2">
                                            <strong>Tecnologías usadas: </strong>
                                            {project.technologies.join(", ")}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Project;
