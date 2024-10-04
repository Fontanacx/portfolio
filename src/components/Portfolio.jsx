import React from 'react';
import * as LucideIcons from 'lucide-react';

const ProjectCard = ({ title, description, link }) => (
  <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
    >
      Ver Aquí
    </a>
  </div>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <div className="mb-6">
            <img 
              src="/maximo-fontana.jpeg" 
              alt="Maximo Fontana" 
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4">Maximo Fontana</h1>
          <p className="text-xl mb-6">Desarrollador Web Front-end</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/Fontanacx" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <LucideIcons.Github size={24} />
            </a>
            <a href="mailto:fontanacdev@gmail.com" className="text-white hover:text-gray-300">
              <LucideIcons.Mail size={24} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=543814798213&text=Hola!%20%2C%20me%20gustaria%20asesorarme%20para%20dise%C3%B1ar%20mi%20pagina%20web%F0%9F%8C%90!%20" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <LucideIcons.MessageCircle size={24} />
            </a>
          </div>
        </header>


        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Sobre mí</h2>
          <p className="text-lg mb-4">
            Soy un desarrollador web de 18 años con sede en Tucumán, Argentina, apasionado por la tecnología y los sistemas informáticos. Me especializo en tecnologías front-end como HTML, CSS, JavaScript y React, con un fuerte dominio de Tailwind CSS. 
          </p>
          <p className="text-lg mb-4">
            Además de mi experiencia en desarrollo web, poseo conocimientos avanzados en software y sistemas. Mi pasión por la informática me impulsa a estar siempre actualizado con las últimas tendencias y soluciones tecnológicas.
          </p>
          <p className="text-lg">
            Me destaco por mi habilidad para resolver todo tipo de dudas informáticas y abordar problemas técnicos de manera eficiente. Ya sea optimizando el rendimiento de un sistema, depurando código complejo o diseñando soluciones innovadoras, estoy siempre listo para enfrentar nuevos desafíos y aportar valor a cualquier proyecto tecnológico.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'].map((skill) => (
              <div key={skill} className="bg-white bg-opacity-10 rounded-full px-4 py-2 text-center">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Proyectos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="Simulador de Cuotas" 
              description="Una aplicación web interactiva para calcular y visualizar planes de pago en cuotas."
              link="https://fontanacx.github.io/entrega3-js/"
            />
            <ProjectCard 
              title="Boost de PC y Optimizaciones" 
              description="Sitio web para un emprendimiento de servicios de optimización de computadoras."
              link="https://tweakerhub.netlify.app/"
            />
            <ProjectCard 
              title="Salón de Fiestas" 
              description="Página web para un salón de eventos, mostrando servicios y facilitando reservas."
              link="https://homcasa.netlify.app/"
            />
            <ProjectCard 
              title="Lista de Tareas" 
              description="Aplicacion web para organizar y completar tareas diarias con un diseño limpio y Dark Mode

"
              link="https://taskboarder.netlify.app/"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Curriculum Vitae</h2>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-4">Puedes descargar mi CV completo haciendo clic en el botón de abajo:</p>
            <a 
              href="/MaximoFontanaCV.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Descargar CV
            </a>
          </div>
        </section>
      </div>

      <footer className="bg-black bg-opacity-50 py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Todos los derechos reservados</p>
          <p>Owned and Made By Fontanac Dev</p>
          <p>Para contactos o ofertas fontanacdev@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;