 import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaMapMarkerAlt, FaSearch} from 'react-icons/fa';
import Footer from '../../components/Footer/footer';
import './AspirantePage.css';

const AspirantePage = () => {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState(null);

  const jobListings = [
    { id: 1, name: 'Desarrollador Frontend', location: 'Medellín, Antioquia', timePosted: 'Hace 11 minutos', timepostuled: 'Termina el 28-08-2025', modalidad: 'Modalidad: Precencial' , contrato: 'Término Fijo' , empresa: "Empresa: Nexabyte Solutions" },
    { id: 2, name: 'Analista de Datos', location: 'Bogotá, Cundinamarca', timePosted: 'Hace 1 hora', timepostuled: 'Termina el 18-09-2025' , modalidad: 'Modalidad: Remota' , contrato: 'Término Indefinido' , empresa: "Empresa: Codexia Tech Labs"},
    { id: 3, name: 'Especialista QA', location: 'Cali, Valle', timePosted: 'Hace 2 días' , timepostuled: 'Termina el 08-10-2025' , modalidad: 'Modalidad: Precencial' , contrato: 'Aprendiz' , empresa: "Empresa: Lumitech Global"},
    { id: 4, name: 'Diseñador UX/UI', location: 'Barranquilla, Atlántico', timePosted: 'Hace 3 días' , timepostuled: 'Termina el 20-11-2025' , modalidad: 'Modalidad: Precencial' , contrato: 'Prestación de Servicios' , empresa: "Empresa: QuantumEdge Systems"},
    { id: 5, name: 'Ingeniero Backend', location: 'Cartagena, Bolívar', timePosted: 'Hace 5 días' , timepostuled: 'Termina el 11-07-2025' , modalidad: 'Modalidad: Hibrido' , contrato: 'Aprendiz' , empresa: "Empresa: Synapse Core"},
  ];

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <>
        <header className="header-conta">
          <div className="header-left">
            <Link to="/" className="logo-container">
              <img src="https://i.postimg.cc/PrF6JqqC/WKB-LOGO-copia-removebg-preview.png" alt="imglogo" className="img-wkb" />
            </Link>
          </div>

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

          <div className="header-right-container">
            <div className="perfil-section">
              <div className="search-seccion">
                <div className='name'>
                    Juan Perez
                </div>
              </div>
              <div className="divider" />
              <div className="search-section">
                <Link to="/Aspirante/MiPerfil">
                  <button className="button-perfil">Mi Perfil</button>
                </Link>
              </div>
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
                  <p className="p-job-postuled">{job.timepostuled}</p>
                  <p className="p-modalidad">{job.modalidad}</p>
                  <p className="p-contrato">{job.contrato}</p>
                  <p className="p-empresa">{job.empresa}</p>
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
                <p className="p-job-detail-postuled">Termina: {selectedJob.timepostuled}</p>
                <p className="p-job-detail-modalidad">Modalidad: {selectedJob.modalidad}</p>
                <p className="p-job-detail-contrato">Contrato: {selectedJob.contrato}</p>
                <p className="p-job-detail-description">
                  Empresa líder en el sector metalmecanica se encuentra en la búsqueda de personal para laborar en el cargo de Analista de Laboratorio. En este rol, serás responsable de realizar análisis y pruebas a materia prima y producto en linea y terminado para asegurar la calidad y el cumplimiento de especificaciones.                </p>
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