import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion'; // Import Framer Motion

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const sectionRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        () => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Mensaje enviado correctamente.',
            showConfirmButton: false,
            timer: 1500,
          });
          setFormData({ name: '', email: '', message: '' });
          setIsSending(false);
        },
        () => {
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
    <section
      id="contact"
      ref={sectionRef}
      className="bg-secondary text-white min-h-screen w-full flex items-center justify-center py-12 sm:py-16"
    >
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Información de contacto */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="about-info space-y-6"
        >
          <h1 className="text-2xl lg:text-6xl leading-loose font-bold">Contáctame</h1>
          <p className="text-lg">
            Si tienes alguna pregunta o deseas contactarme, por favor llena el formulario o conéctate a través de mis
            redes sociales.
          </p>
        </motion.div>

        {/* Formulario de contacto */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="contact-form bg-white text-black p-6 sm:p-8 rounded-lg shadow-lg transform max-w-xl mx-auto w-full"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-medium mb-2">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-medium mb-2">Correo Electrónico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-medium mb-2">Mensaje</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center bg-secondary text-white px-4 py-3 rounded hover:bg-opacity-80 transition duration-200 w-full"
              disabled={isSending}
            >
              {isSending ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
                  Enviando Correo...
                </>
              ) : (
                <>
                  <span className="mr-2">Enviar</span>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
