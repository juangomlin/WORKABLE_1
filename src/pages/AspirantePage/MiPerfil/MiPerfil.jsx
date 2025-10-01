import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaBriefcase, FaWheelchair } from 'react-icons/fa';
import HeaderAspirant from '../../../components/HeaderAspirant/HeaderAspirant';
import './MiPerfil.css';

const MiPerfil = () => {
  const navigate = useNavigate();

  return (
    <>
    <HeaderAspirant></HeaderAspirant>
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
