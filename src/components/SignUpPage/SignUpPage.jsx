import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../Footer/Footer';
import './SignUpPage.css';
import { crearAspirante } from '../../api/aspirantesApi';

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

  const handleSubmit = async (event) => {
    event.preventDefault();

  if (userType === 'aspirante') {
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());

    data.tel = Number(data.tel);
    data.tipDoc_id = Number(data.tipDoc_id);
    data.munici_id = Number(data.munici_id);
    data.genero_id = Number(data.genero_id);
    data.numeroID = Number(data.numeroID);

      try{
        const aspiranteCreado = await crearAspirante(data);
        console.log("✅ Aspirante creado:", aspiranteCreado);
        navigate('/Aspirante')
      }catch (error){
        console.error("❌ Error al crear aspirante:", error.message);
        alert("Error: " +  + error.message);
      }
    }else if (userType === 'reclutador') {
      navigate('/Reclutador');
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
                    <input type='text' name='nom' placeholder='Nombre' required className='input-signup' />
                    <input type='text' name='ape' placeholder='Apellido' required className='input-signup' />

                    {/* Correo y Ubicación */}
                    <input type='email' name='corr' placeholder='Correo electrónico' required className='input-signup' />
                    <input type='text' name='ubi' placeholder='Ubicación' required className='input-signup' />

                    {/* Teléfono y Fecha de nacimiento */}
                    <input type='tel' name='tel' placeholder='Número de Teléfono' required className='input-signup' />
                    <input type='date' name='feNa' placeholder='Fecha de Nacimiento' required className='input-signup' />

                    {/* Contraseña */}
                    <input type='password' name='cla' placeholder='Contraseña' required className='input-signup' />

                    {/* Género (usa IDs numéricos que correspondan en tu DB) */}
                    <select name='genero_id' required className='input-signup'>
                      <option value=''>Selecciona tu género</option>
                      <option value='1'>Masculino</option>
                      <option value='2'>Femenino</option>
                    </select>

                    {/* Tipo de documento (usa IDs numéricos que correspondan en tu DB) */}
                    <select name='tipDoc_id' required className='input-signup'>
                      <option value=''>Tipo de Documento</option>
                      <option value='1'>CC</option>
                      <option value='2'>TI</option>
                    </select>

                    {/* Número de Documento */}
                    <input type="number" name="numeroID" placeholder="Número de Documento" required className="input-signup" min="0" step="1" />

                    {/* Ciudad (municipio, usa IDs de tu DB) */}
                    <select name='munici_id' required className='input-signup'>
                      <option value=''>Ciudad</option>
                      <option value='1'>Cali</option>
                      <option value='2'>Medellín</option>
                      <option value='3'>Bogotá</option>
                      <option value='4'>Barranquilla</option>
                      <option value='5'>Cartagena</option>
                    </select>
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
    </>
  );
};

export default SignUpPage;