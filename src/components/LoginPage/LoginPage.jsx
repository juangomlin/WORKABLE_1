import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/footer';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [currentFormType, setCurrentFormType] = useState('aspirante');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/reclutador');
  };

  const showAspiranteForm = () => {
    setCurrentFormType('aspirante');
  };

  const showReclutadorForm = () => {
    setCurrentFormType('reclutador');
  };

  const showAdministradorForm = () => {
    setCurrentFormType('administrador');
  };

    const LoginSuccess = (type) => {
    if (type === 'aspirante') {
      navigate('/Aspirante');
    } 
    else if (type === 'reclutador') {
      navigate('/Reclutador');
    }
    else if (type === 'administrador') {
      navigate('/Administrador')
    }

  };

  const renderCurrentForm = () => {
    switch (currentFormType) {
      case 'aspirante':
        return (
          <>
            <h2>Iniciar Sesión como Aspirante</h2>
            <input type="text" className="input-lg-form" placeholder="Correo de Aspirante" />
            <input type="password" className="input-lg-form" placeholder="Contraseña de Aspirante" />
            <button className="button-submit" onClick={() => LoginSuccess('aspirante')}>Entrar</button>
            <p className="text-link">¿Olvidaste tu contraseña?</p>
            <p className="text-link">¿No tienes cuenta? Regístrate aquí.</p>
          </>
        );
      case 'reclutador':
        return (
          <>
            <h2>Iniciar Sesión como Reclutador</h2>
            <input type="text" className="input-lg-form" placeholder="Correo de Reclutador" />
            <input type="password" className="input-lg-form" placeholder="Contraseña de Reclutador" />
            <button className="button-submit" onClick={() => LoginSuccess('reclutador')}>Acceder</button>
            <p className="text-link">¿Eres nuevo? Crea tu cuenta de empresa.</p>
          </>
        );
      case 'administrador':
        return (
          <>
            <h2>Acceso de Administrador</h2>
            <input type="text" className="input-lg-form" placeholder="Usuario Admin" />
            <input type="password" className="input-lg-form" placeholder="Contraseña Admin" />
            <button className="button-submit" onClick={() => LoginSuccess('administrador')}>Ingresar</button>
          </>
        );
      default:
        return null;
    }
  };

  return(
    <>
      <Header />
      <main>
        <section className="section-form">
          <div className="div-form">
            <div className="div-bt-form">
              <button className="bt-form-aspirante" onClick={showAspiranteForm}>ASPIRANTE</button>
              <button className="bt-form-reclutador" onClick={showReclutadorForm}>RECLUTADOR</button>
              <button className="bt-form-adminstrador" onClick={showAdministradorForm}>ADMINISTRADOR</button>
            </div>
            <div className="div-lg-form">
              {renderCurrentForm()}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LoginPage;