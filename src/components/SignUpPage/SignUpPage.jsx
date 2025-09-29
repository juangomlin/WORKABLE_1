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
                  <div className='form-reclutador-fields'>
                    <input type='text' name='fullName' placeholder='Nombre' required className='input-signup' />
                    <input type='text' name='fullName' placeholder='Apellido' required className='input-signup' />
                    <input type='text' name='email' placeholder='Correo electronico' required className='input-signup' />
                    <input type='text' name='direction' placeholder='Ubicacion' required className='input-signup' />
                    <input type='tel' name='phone' placeholder='Número de Teléfono' required className='input-signup' />
                    <input type='date' name='nacimiento' placeholder='Fecha de Nacimiento' required className='input-signup' />
                    <input type='password' name='password' placeholder='Contraseña' required className='input-signup' />
                    <select name='gender' required className='input-signup'>
                      <option value=''>Selecciona tu género</option>
                      <option value='masculino'>Masculino</option>
                      <option value='femenino'>Femenino</option>
                    </select>
                    <select name='documentType' required className='input-signup'>
                      <option value=''>Tipo de Documento</option>
                      <option value='Cedula'>CC</option>
                      <option value='Tarjeta de Identidad'>TI</option>
                    </select>
                    <input type="number" name="numeroID" placeholder="Número de Documento" required className="input-signup" min="0" step="1" />
                    <select name='discapacidadTipo' required className='input-signup'>
                      <option value=''>Tipo de Discapacidad</option>
                      <option value='Visual'>Visual</option>
                      <option value='Sordera'>Sordera</option>
                      <option value='Motora'>Motora</option>
                    </select>
                    <input type='text' name='discapacidad' placeholder='Discapacidad' required className='input-signup' />
                  </div>
                  <button type='submit' className='button-submit'>Crear Cuenta Aspirante</button>
                </>
              )}


            {userType === 'reclutador' && (
              <>
                <div className='form-reclutador-fields'>
                  <input type='text' name='companyName' placeholder='Nombre legal de la Empresa' required className='input-signup' />
                  <input type='text' name='legalName' placeholder='Razón Social' required className='input-signup' />
                  <input type='text' name='nit' placeholder='Numero de identificacion fiscal' required className='input-signup' />
                  <input type='text' name='country' placeholder='Direccion fisica' required className='input-signup' />
                  <input type='text' name='cityOrZip' placeholder='Ciudad o Código Postal' required className='input-signup' />
                  <input type='text' name='sector' placeholder='Sector' required className='input-signup' />
                  <select name="workers" id="">
                    <option value=''>Numero de trabajadores</option>
                    <option value="pequeña">Entre 10 y 49 empleados</option>
                    <option value="mediana">Entre 50 a 249 empleados</option>
                    <option value="grande">Entre 250 y 500 o mas empleados</option>
                  </select>
                  <input type='date' name='dateCreate' placeholder='Fecha creacion' required className='input-signup' />
                  <input type='email' name='email' placeholder='Correo corporativo' required className='input-signup' />
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