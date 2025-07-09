import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import './HeaderAspirant.css'; 

const HeaderAspirant = () => {
  return (
    <header className="header-conta">
      <div className="header-left">
        <Link to="/" className="logo-container">
          <img 
            src="https://i.postimg.cc/PrF6JqqC/WKB-LOGO-copia-removebg-preview.png" 
            alt="Logo" 
            className="img-wkb" 
          />
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
  );
};

export default HeaderAspirant;
