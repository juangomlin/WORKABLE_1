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

        
        
        <section className="section-companies">
              <h1 className="h2-title">EMPRESAS PRESENTES</h1>
          <p className="text">Trabajamos con X empresas, para que tengas las mejores oportunidades</p>
          <div className="div-images">
              <Link to="/KFCPage" >
                  <img src="https://seeklogo.com/images/K/kfc-logo-A232F2E6D1-seeklogo.com.png" alt="kfc" className='img-company' />
              </Link>
              <img src="https://images.seeklogo.com/logo-png/35/3/starbucks-logo-png_seeklogo-354127.png" alt="kfc" className='img-company' />
              <img src="https://logodownload.org/wp-content/uploads/2014/04/coca-cola-logo-1-1.png" alt="kfc" className='img-company' />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw8jO9eC3_62cmHaMI5eveXB2sPm53oHlM8A&s" alt="kfc" className='img-company' />
          </div>
          <button className='button-companies-mp'>
            <Link to="/Companies" className='link-companies-mp'>Ver todas las empresas</Link>
          </button>
        </section>


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
          <button className='button-section-applicant'>
              <Link to="/SignUp" className='link-companies-mp'>Crear Cuenta</Link>
          </button>
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