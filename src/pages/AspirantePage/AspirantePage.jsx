 import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import Footer from '../../components/Footer/footer';
import './AspirantePage.css';

const AspirantePage = () => {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState(null);

  const jobListings = [
    { id: 1, name: 'Desarrollador Frontend', location: 'Medellín, Antioquia', timePosted: 'Hace 11 minutos' },
    { id: 2, name: 'Analista de Datos', location: 'Bogotá, Cundinamarca', timePosted: 'Hace 1 hora' },
    { id: 3, name: 'Especialista QA', location: 'Cali, Valle', timePosted: 'Hace 2 días' },
    { id: 4, name: 'Diseñador UX/UI', location: 'Barranquilla, Atlántico', timePosted: 'Hace 3 días' },
    { id: 5, name: 'Ingeniero Backend', location: 'Cartagena, Bolívar', timePosted: 'Hace 5 días' },
  ];

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <>
        <header className="header-container">
        <Link to="/" className="logo-container">
          <p className='p-logo'>WORK</p>
          <p className='p-logo2'>ABLE</p>
        </Link>

        <div className="header-center">
          <div className="job-search-bar">
            <div className="search-section">
              <FaBriefcase className="search-icon" />
              <input type="text" placeholder="asesor comercial" />
            </div>
            <div className="divider" />
            <div className="search-section">
              <FaMapMarkerAlt className="search-icon" />
              <input type="text" placeholder="Bogotá, D.C." />
            </div>
            <button className="search-button">
              <FaSearch />
            </button>
          </div>
        </div>

          <div className="perfil-section">
            <div className="search-section">
            <div className='name'>
                nombre de aspirante
            </div>
            </div>
            <div className="divider" />
            <div className="search-section">
                  <Link to="/Aspirante/MiPerfil">
                  <button className='button-perfil'>Mi Perfil</button>
                </Link>
            </div>
          </div>

      </header>
      <main className="main-aspirant-page">
        <section className="section-filter-buttons">
          <button className="button-filter-dropdown">Ordenar ⌄</button>
          <button className="button-filter-dropdown">Distancia ⌄</button>
          <button className="button-filter-dropdown">Fecha ⌄</button>
          <button className="button-filter-dropdown">Lugar de trabajo ⌄</button>
          <button className="button-filter-dropdown">Experiencia ⌄</button>
          <button className="button-filter-dropdown">Salario ⌄</button>
          <button className="button-filter-dropdown">Jornada ⌄</button>
          <button className="button-filter-dropdown">Contrato ⌄</button>
          <button className="button-filter-dropdown">Discapacidad ⌄</button>
        </section>

        <section className="section-job-panels">
          <section className="section-listings-panel">
            <nav className="nav-job-categories"><p>Busca tu trabajo deseado</p></nav>
            <div className="div-job-cards-grid">
              {jobListings.map((job) => (
                <div
                  key={job.id}
                  className="div-job-card"
                  onClick={() => setSelectedJob(job)}
                >
                  <h3 className="h3-job-card-title">{job.name}</h3>
                  <p className="p-job-location">{job.location}</p>
                  <p className="p-job-time">{job.timePosted}</p>
                  <div className="div-job-card-actions">
                    <button
                      className="button-apply"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Postularme
                    </button>
                    <button
                      className="button-save"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="section-details-panel">
            {selectedJob ? (
              <div className="div-job-detail-content">
                <h2 className="h2-job-detail-title">Detalle de {selectedJob.name}</h2>
                <p className="p-job-detail-location">Ubicación: {selectedJob.location}</p>
                <p className="p-job-detail-time">Publicado: {selectedJob.timePosted}</p>
                <p className="p-job-detail-description">
                  Esta es la descripción completa y detallada del puesto de trabajo, incluyendo responsabilidades, requisitos y beneficios. Aquí es donde se expandiría toda la información relevante para el aspirante.
                </p>
              </div>
            ) : (
              <div className="div-no-selection-message">
                <p>Selecciona una oferta para ver los detalles aquí.</p>
              </div>
            )}
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AspirantePage;