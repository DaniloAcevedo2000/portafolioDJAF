import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

    return (
        <header className='flex justify-between px-5 py-2 bg-primary text-white'>
            <a href="#hero" className='logo text-2xl font-bold text-accent'>DJAF</a>
            <nav className='hidden md:block'>
                {/*Desktop Nav */}
                <ul className='flex'>
                    <li><a href="#about">Sobre mí</a></li>
                    <li><a href="#project">Proyectos</a></li>
                    <li><a href="#skill">Habilidades</a></li>
                    <li><a href="#contact">Contáctame</a></li>
                    <li><a href="#summary">Resumen</a></li>
                </ul>
            </nav>

            {/*Mobile Nav */}
            <nav className={ !toggle ? 'mobile-nav left-[-100%]' : 'mobile-nav left-0'}>
                <ul className='flex flex-col'>
                    <li><a href="#about" onClick={handleToggle}>Sobre mí</a></li>
                    <li><a href="#project" onClick={handleToggle}>Proyectos</a></li>
                    <li><a href="#skill" onClick={handleToggle}>Habilidades</a></li>
                    <li><a href="#contact" onClick={handleToggle}>Contáctame</a></li>
                    <li><a href="#summary" onClick={handleToggle}>Resumen</a></li>
                </ul>
            </nav>

            {/*Toggle Button*/}
            <button onClick={handleToggle} className='block md:hidden'>
                {!toggle ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/>}
            </button>
        </header>
    );
};

export default Header;
