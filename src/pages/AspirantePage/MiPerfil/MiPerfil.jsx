import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaBriefcase, FaWheelchair } from 'react-icons/fa';
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
      

          <button 
            className="perfil-button"
            onClick={() => navigate('/Aspirante')}
          >
            Volver al inicio
          </button>

    </>
  );
};

export default MiPerfil;
