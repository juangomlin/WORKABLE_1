import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaBriefcase, FaWheelchair } from 'react-icons/fa';
import Footer from "../../../components/Footer/Footer";
import './MiPerfil.css';

const MiPerfil = () => {
  const navigate = useNavigate();

  const aspirante = {
    nombre: 'Juan Perez',
    correo: 'juan@example.com',
    telefono: '+57 300 123 4567',
    ciudad: 'Medellín, Antioquia',
    experiencia: '3 años en desarrollo Frontend',
    habilidades: ['React', 'JavaScript', 'CSS', 'HTML'],
    empresaActual: 'Tech Solutions S.A.S',
    discapacidad: 'Sordera'
  };

  return (
    <>
      <main className="perfil-container">
        <section className="perfil-card">
          <h2 className="perfil-title">Mi Perfil</h2>
          <div className="perfil-grid">
            
            <div className="perfil-section">
              <h3 className="perfil-subtitle"><FaUser /> Datos Básicos</h3>
              <p><strong>Nombre:</strong> {aspirante.nombre}</p>
              <p><strong>Correo:</strong> {aspirante.correo}</p>
              <p><strong>Teléfono:</strong> {aspirante.telefono}</p>
              <p><strong>Ciudad:</strong> {aspirante.ciudad}</p>
            </div>
            <div className="perfil-section">
              <h3 className="perfil-subtitle"><FaBriefcase /> Experiencia & Habilidades</h3>
              <p><strong>Experiencia:</strong> {aspirante.experiencia}</p>
              <p><strong>Empresa actual:</strong> {aspirante.empresaActual}</p>
              <strong>Habilidades:</strong>
              <ul>
                {aspirante.habilidades.map((hab, idx) => (
                  <li key={idx}>{hab}</li>
                ))}
              </ul>
            </div>
            <div className="perfil-section">
              <h3 className="perfil-subtitle"><FaWheelchair /> Discapacidad</h3>
              <p>{aspirante.discapacidad}</p>
            </div>

          </div>

          <button 
            className="perfil-button"
            onClick={() => navigate('/Aspirante')}
          >
            Volver al inicio
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MiPerfil;
