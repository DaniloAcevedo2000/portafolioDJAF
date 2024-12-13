import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons'; 
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send('portafolio_djaf2000', 'template_5gehero', emailParams, 'U120iQ9D0jruhIERq')
      .then(
        (response) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Mensaje enviado correctamente.',
            showConfirmButton: false,
            timer: 1500,
          });
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          setIsSending(false); 
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error al enviar el mensaje, por favor intenta de nuevo más tarde.',
          });
          setIsSending(false); 
        }
      );
  };

  return (
    <section className='bg-secondary text-white min-h-screen w-full flex items-center justify-center'>
      <div className='container mx-auto grid md:grid-cols-2 items-center md:justify-between gap-8'>
        {/* Información de contacto */}
        <div className='about-info'>
          <h1 className='text-2xl lg:text-6xl leading-loose font-bold'>Contáctame</h1>
          <p className='text-lg mt-4'>
            Si tienes alguna pregunta o deseas contactarme, por favor llena el formulario o conéctate a través de mis
            redes sociales.
          </p>
        </div>

        {/* Formulario de contacto */}
        <div className='contact-form bg-white text-black p-8 rounded-lg shadow-lg'>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block text-sm font-medium'>Nombre</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full p-3 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent'
              />
            </div>

            <div className='mb-4'>
              <label className='block text-sm font-medium'>Correo Electrónico</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full p-3 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent'
              />
            </div>

            <div className='mb-4'>
              <label className='block text-sm font-medium'>Mensaje</label>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                className='w-full p-3 mt-2 border border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent'
              ></textarea>
            </div>

            <button
              type='submit'
              className='flex items-center justify-center bg-secondary text-white px-4 py-3 rounded hover:bg-opacity-80 transition duration-200 w-full'
              disabled={isSending} // Deshabilita el botón mientras se envía
            >
              {isSending ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} spin className='mr-2' />
                  Enviando Correo...
                </>
              ) : (
                <>
                  <span className='mr-2'>Enviar</span>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
