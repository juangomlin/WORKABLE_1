import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../Footer/Footer';
import './SignUpPage.css';

const SignUpPage = () => {
  const [userType, setUserType] = useState('aspirante');
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleUserTypeChange = (type) => {
    if (formRef.current) {
      formRef.current.reset();
    }
    setUserType(type);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userType === 'reclutador') {
      navigate('/Reclutador');
    } else if (userType === 'aspirante') {
      navigate('/Aspirante');
    }
  };

  return (
    <>
      <Header />
      <main className='main-signup'>
        <div className='div-signup-container'>
          <h2 className='h2-signup-title'>Regístrate en workable</h2>
          <p className='p-signup-instruction'>Crea una cuenta para comenzar</p>

          <div className='signup-buttons'>
            <button
              className={`Btn-signup ${userType === 'aspirante' ? 'active Aspirante' : ''}`}
              onClick={() => handleUserTypeChange('aspirante')}
            >
              Soy Aspirante
            </button>
            <button
              className={`Btn-signup ${userType === 'reclutador' ? 'active Reclutador' : ''}`}
              onClick={() => handleUserTypeChange('reclutador')}
            >
              Soy Reclutador
            </button>
          </div>

          <form className='form-signup' ref={formRef} onSubmit={handleSubmit}>
            {userType === 'aspirante' && (
              <>
                <input type='text' name='fullName' placeholder='Nombre Completo' required className='input-signup' />
                <input type='tel' name='phone' placeholder='Número de Teléfono' required className='input-signup' />
                <input type='email' name='email' placeholder='Correo Electrónico' required className='input-signup' />
                <input type='password' name='password' placeholder='Contraseña' required className='input-signup' />
                <button type='submit' className='button-submit'>Crear Cuenta Aspirante</button>
              </>
            )}

            {userType === 'reclutador' && (
              <>
                <div className='form-reclutador-fields'>
                  <input type='text' name='companyName' placeholder='Nombre de la Empresa' required className='input-signup' />
                  <input type='text' name='legalName' placeholder='Razón Social' required className='input-signup' />
                  <input type='text' name='nit' placeholder='NIT' required className='input-signup' />
                  <input type='text' name='country' placeholder='País' required className='input-signup' />
                  <input type='text' name='cityOrZip' placeholder='Ciudad o Código Postal' required className='input-signup' />
                  <input type='text' name='sector' placeholder='Sector' required className='input-signup' />
                  <input type='number' name='numWorkers' placeholder='Número de Trabajadores' required className='input-signup' />
                  <input type='number' name='annualVacancies' placeholder='Vacantes Anuales Estimadas' required className='input-signup' />
                  <input type='email' name='email' placeholder='Correo Electrónico (Contacto)' required className='input-signup' />
                  <input type='password' name='password' placeholder='Contraseña' required className='input-signup' />
                </div>
                <button type='submit' className='button-submit'>Crear Cuenta Reclutador</button>
              </>
            )}
          </form>

          <p className='text-link'>
            Ya tienes una cuenta? <Link to='/Login'>Iniciar Sesión</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SignUpPage;