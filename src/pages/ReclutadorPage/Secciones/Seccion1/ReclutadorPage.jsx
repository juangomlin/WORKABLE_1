import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ReclutadorPage.css';

const SeccReclutam = () => {
  const navigate = useNavigate();
  navigate('/ReclutadorPage');
    return (
    <>
      <header className='Header'>
          <h1>Personas</h1>
          <h1>Reclutadores</h1>
          
      </header>

      <div className='Header2'>
          <h1>WORKABLE</h1>
          <h2><Link to="/">Inicio</Link></h2>
          <h1></h1>
          <button className='PubOferta'>
            <span>
              <Link to="/PubVacante">Publicar oferta</Link>
            </span>
          </button>
        </div>

      <section>
        <div className='SecTitulo'>
          <h3>¡Publica ofertas gratis!</h3>
          <p>Ahorra costos y tiempo en tus procesos de selección y consigue el candidato ideal de forma rápida y fácil</p>
          <button className='PubTiOf'>
            <span>
              <Link to="/PubVacante">Publicar una oferta</Link>
            </span>
          </button>
        </div>
      </section>

      <div className="process-section">
        <div className="images-column">
          <img src="https://media.istockphoto.com/id/1440285048/es/foto/%C3%A9xito-visi%C3%B3n-y-orgulloso-l%C3%ADder-gerente-que-se-ve-feliz-y-sonr%C3%ADe-liderazgo-con-innovaci%C3%B3n-en-el.jpg?s=612x612&w=0&k=20&c=NA9BvKkZdocPJNsqUZzl_bPfmGzqS_BUj00SZazloCs=" alt="Persona 1" className="img-process" />
          <img src="https://media.istockphoto.com/id/1754234512/es/foto/empresario-hombre-y-brazos-cruzados-en-un-taller-con-sonrisa-y-confianza-para-el-retrato-en.jpg?s=612x612&w=0&k=20&c=IDLiVjG-l8IEqA2NPTP_5Jqyk7boFGp0ubc_WGm44ks=" alt="Persona 2" className="img-process img-bottom" />
        </div>

        <div className="steps-column">
          <div className="step">
            <div className="step-number">1</div>
            <div>
              <h4>Publica tu vacante</h4>
              <p>Crea fácilmente tu oferta de trabajo y publícala en un click.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div>
              <h4>Revisa las aplicaciones</h4>
              <p>Selecciona a los mejores candidatos entre todos los CVs recibidos.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div>
              <h4>Contrata</h4>
              <p>Encuentra al candidato que mejor se adapta al perfil buscado.</p>
            </div>
          </div>
        </div>
      </div>


      <main>
        <div className='mainObj'>
            <h3>Publica tu oferta</h3>
            <p>seran tus 5 minutos de hoy mejor invertidos</p>
          <button>
            <span><Link to="/PubVacante">Encontrar candidatos</Link></span>
          </button>
        </div>
      </main>

      <section className="features-section">
      <div className="feature-card">
        <div className="icon-circle green">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
          </svg>
        </div>
        <h3>Atrae al candidato que necesitas</h3>
        <p>Enumera las habilidades necesarias para el empleo para que puedan aplicarse candidatos pertinentes.</p>
      </div>

      <div className="feature-card">
        <div className="icon-circle yellow">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3>Verifica sus habilidades</h3>
        <p>Personaliza el proceso de selección de cada oferta: definición de etapas, test y mucho más.</p>
      </div>

      <div className="feature-card">
        <div className="icon-circle red">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5-6l3 3-3 3" />
          </svg>
        </div>
        <h3>Organiza tus candidatos</h3>
        <p>Ordena los CV, envía mensajes y entrevístalos, todo en la web de empleo más utilizada en Latinoamérica.</p>
      </div>
    </section>

    <div className='ButtoObj'>
      <button className='ButtEncon'>
        <span>
          <Link to="/PubVacante">Comenzar ahora</Link>
        </span>
      </button>
    </div>

    <div className='ContainerData'>
      <div className='TextData'>
          <p>Las mejores empresas ya estan contratando a los mejores candidatos te estamos esperando</p>
      <div className='DataSec'>
          <div className='SecData1'>
            <h4>7.104.450</h4>
            <p>Usuarios</p>
          </div>
          <div className='SecData2'>
            <h4>17.761.126</h4>
            <p>Curriculums</p>
          </div>
          <div className='SecData3'>
            <h4>11.271</h4>
            <p>Empresas</p>
          </div>
          <div className='SecData4'>
            <h4>808.138</h4>
            <p>Aplicaciones</p>
          </div>
      </div>
    </div>

    </div>
    
      

      <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-column">
          <h4>Institucional</h4>
          <a href="#">¿Quiénes somos?</a>
          <a href="#">Computrabajo en otros países</a>
          <a href="#">Aviso legal y privacidad</a>
        </div>

        <div className="footer-column">
          <h4>Personas</h4>
          <a href="#">Preguntas frecuentes de candidato</a>
          <a href="#">Contacto para candidatos</a>
          <a href="#">Buscar empleo</a>
        </div>

        <div className="footer-column">
          <h4>Reclutadores</h4>
          <a href="#">Preguntas frecuentes de reclutadores</a>
          <a href="#">Contacto para reclutadores</a>
          <a href="#">Buscar personas</a>
        </div>
        </div>

        <div className="footer-copy">
          <p>Copyright 2025 DGNET LTD.</p>
        </div>
  </footer>

    </>


    );
};

export default SeccReclutam;