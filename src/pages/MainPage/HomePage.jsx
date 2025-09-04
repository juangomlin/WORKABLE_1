import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './HomePage.css'; 

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    navigate(`/Aspirante?query=${encodeURIComponent(searchTerm)}`);
  };
  
  return (
    <>
      <Header />
      <main>
        <section className="section-search">
          <div className="div-search">
            <input
              className='input-search'
              type="text"
              placeholder="Buscar ofertas"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  handleSearchSubmit();
                }
              }}
            />
            <button
              className="button-search"
              onClick={handleSearchSubmit}
            >
              BUSCAR
            </button>
          </div>
        </section>

        <section className='section-publish'>
          <div className='div-publish'>
            <div className='title-publish'>¿Eres empresa?  <h1>Publica ofertas gratis</h1>  hoy mismo</div>
            <div className='publish'>
              <div className='box-publish'>
                <div className='title-boxes'>
                  <div className='number'>1</div>
                  <div className='div-link-publish'>
                <a href="" className='link-to-publish'>Publica gratis</a>
                <div className='div-box'>
                  <h3>Crea tu cuenta,</h3><p>publica y llega a diversidad de profesionales.</p>
                </div>
              </div>
                </div>
            </div>
            <div className='box-publish'>
              <div className='title-boxes'>
                <div className='number'>2</div>
              <div className='div-link-publish'>
                <a href="" className='link-to-publish'>Selecciona</a>
                <div className='div-box'>
                  <h3>Accede a perfiles</h3><p>y filtra segun tus necesidades.</p>
                </div>
              </div>
              </div>
            </div>
            <div className='box-publish'>
              <div className='title-boxes'>
                <div className='number'>3</div>
              <div className='div-link-publish'>
                <a href="" className='link-to-publish'>Encuentra al mejor perfil</a>
                <div className='div-box'>
                  <h3>Contacta al candidato</h3><p>que mejor encaja en tu empresa.</p>
                </div>
              </div>
              </div>
            </div>
            </div>
          </div>
        </section>
        

        <section className="section-companies">
          <div className='titles-companies'>
              <h1 className="h2-title">EMPRESAS PRESENTES</h1>
          <p className="text">Trabajamos con X empresas, para que tengas las mejores oportunidades, enfocandonos en tu bienestar tanto en la busqueda como en la facilidad de encontrar tu empleo deseado, encontraras algunas de las empresas que encontraras en Workable</p>
                <div className='carrusel-track'>
                  <div className='logo'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxI-HWe_oSrNwCD9YZhdWbvhc7OJK-CVyrBnbJ9yc5pl2-jzhVW8YbFUTcUmQ7TaZf9c&usqp=CAU" alt="" height="100" width="250"/>
                  </div>
                </div>
                <div className='carrusel-track'>
                  <div className='logo'>
                    <img src="data:image/png;base64,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" alt="" height="100" width="250"/>
                  </div>
                </div>
                <div className='carrusel-track'>
                  <div className='logo'>
                    <img src="https://mktadstrategies.wordpress.com/wp-content/uploads/2016/03/facebook-share-image.jpg?w=640" alt="" height="100" width="250"/>
                  </div>
                </div>
                <div className='carrusel-track'>
                  <div className='logo'>
                    <img src="https://marcasur.com/archivos/destacado_portada/2995.jpg" alt="" height="100" width="250"/>
                  </div>
                </div>
          </div>
        </section>


        <div className='button-companies'>
              <Link to="/Empresas" className="link-companies-mp">Ver todas las empresas</Link>
            </div>

        <section className='section-applicant'>
          <div className="img-applicant"> 
            <img src="https://i.postimg.cc/htsSQDKG/image.png" alt="appl" className='img-ap-link' />
          </div>
          <div className="div-promo">
            <h2 className="h2-title">¡Encuentra ofertas de trabajo inclusivas!</h2>
            <div className='div-text'>
              <p className="text">Estamos aquí para ayudarte a encontrar tu empleo ideal! 
              Miles de ofertas inclusivas te están esperando</p>
              <p className="text">Regístrate o inicia sesión de forma gratuita,
                aplica a ofertas de empresas comprometidas con la inclusión</p>
            </div>
          </div>
          <Link to="/SignUp" className='link-companies-mp'>Crear Cuenta</Link>
        </section>

        <section className="section-bussines">
          <h2 className="h2-title">Publica tu vacante</h2>
          <div className="div-features">
            <div className="div-item">
            <img src="https://i.postimg.cc/50BsPq1G/security-guard-4809374.png" alt="dd3" className='feature-image-placeholder' />
            <div className="feature-text">
              <h3>Inclusión y Responsabilidad</h3>
              <p>Promovemos la inclusión como un valor fundamental, fortaleciendo tu 
                compromiso real con la responsabilidad social.</p>
            </div>
            </div>
            <div className="div-item">
              <img src="https://i.postimg.cc/7Y8mFRbR/vision-7198823.png" alt="dd2" className='feature-image-placeholder' />
              <div className="feature-text">
                <h3>Amplía tu visibilidad</h3>
                <p>Nuestro portal maximiza la visibilidad de tus ofertas entre una
                  amplia audiencia de candidatos.
                </p>
              </div>
            </div>
            <div className="div-item">
            <img src="https://i.postimg.cc/Y0qq0RSB/resume-1118828.png" alt="dd1" className='feature-image-placeholder' />
            <div className="feature-text">
              <h3>Publica fácil, gestiona mejor</h3>
              <p>Publica tus vacantes sin costos iniciales y organiza postulaciones
                de manera eficiente.</p>
            </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;