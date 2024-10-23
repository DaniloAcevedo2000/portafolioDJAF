import React from "react";
import Slider from "react-slick";

const Project = () => {
    const projects = [
        {
            title: "Sistema de Control de Ventas",
            description: "Sistema para registrar y validar ventas, con frontend en HTML y Bootstrap. Incluye módulos de reportes, gestión de usuarios, roles, permisos, encriptación de contraseñas y administración de catálogos.",
            technologies: ["HTML", "PHP", "AJAX", "JavaScript", "MySQL"],
            link: "https://github.com/DaniloAcevedo2000/Proyectos-Web.git",
            image: "/Ventas.png"
        },
        {
            title: "Excepciones de Ventas",
            description: "Sistema desarrollado en .NET C#, gestiona el control de excepciones en las ventas mediante la entrada de datos relevantes y la generación de archivos PDF. Permite el seguimiento de excepciones por usuario, asegurando la gestión adecuada de la información a través de roles y permisos. Además, incluye módulos para la generación de reportes, la administración de usuarios y la gestión de catálogos.",
            technologies: [".NET", "SQL Server"],
            link: "#",
            image: "/Excepciones.png"
        },
        {
            title: "KPI HelpDesk",
            description: "Proyecto que visualiza de manera clara y efectiva la productividad de los usuarios que gestionan tickets, además de mostrar los canales con mayores reincidencias en la resolución. También permite el seguimiento detallado de los tickets a lo largo de sus diferentes estados, ofreciendo un control preciso del proceso.",
            technologies: ["Power BI", "SQL Server"],
            link: "https://github.com/DaniloAcevedo2000/Power-BI.git",
            image: "/KP-Detalle.png"
        },
        {
            title: "Sistema Referencias",
            description: "Sistema web para gestionar referencias de clientes, que incluye el registro de depósitos, rentas anticipadas y facturas. Realiza validaciones de clientes contra otros sistemas de ventas y cuenta con un módulo de control de excepciones. También integra 'Validaciones Syrem' para registrar ventas y evaluar el comportamiento del cliente, gestionando información sobre zonas sin recibo básico.",
            technologies: ["PHP", "JavaScript", "SQL Server"],
            link: "#",
            image: "/Referencias.png"
        },
        {
            title: "Portafolio",
            description: "Este portafolio, desarrollado en React con Tailwind, presenta mis proyectos, habilidades y conocimientos en desarrollo web. A través de una interfaz moderna y responsiva, los visitantes pueden explorar mis trabajos anteriores y comprender mejor mi experiencia en el campo.",
            technologies: ["React", "Tailwind"],
            link: "https://github.com/DaniloAcevedo2000/portafolio.git",
            image: "/Portafolio.png"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "30px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: false,
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    centerMode: false,
                    centerPadding: "0px",
                },
            },
        ],
    };

    return (
        <section className='bg-primary text-white py-16'>
            <div className='container mx-auto px-6'>
                <h1 className='text-2xl lg:text-6xl leading-loose font-bold'>
                    Proyectos Destacados
                </h1>
                <Slider {...settings} className="project-slider"> {/* Añadir clase project-slider */}
                    {projects.map((project, index) => (
                        <div key={index} className='p-4'> {/* Añadir padding para crear el espaciado */}
                            <div className='bg-secondary shadow-lg rounded-lg overflow-hidden p-2'>
                                <div className="p-4 bg-secondary rounded-lg">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className='w-full h-48 object-cover rounded-lg mb-4'
                                    />
                                    <div className='p-6'>
                                        <h3 className='text-2xl font-semibold mb-3'>
                                            {project.title}
                                        </h3>
                                        <p className='text-gray-300 mb-4'>
                                            {project.description}
                                        </p>
                                        <p className='text-sm text-gray-400 mb-2'>
                                            <strong>Tecnologías usadas: </strong>
                                            {project.technologies.join(", ")}
                                        </p>
                                        <a
                                            href={project.link}
                                            className='inline-block bg-accent text-white px-4 py-2 rounded hover:bg-secondary transition duration-300'
                                        >
                                            Ver proyecto
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Project;
