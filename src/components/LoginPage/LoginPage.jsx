import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState('');
  const [cla, setCla] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const res = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo, cla }),
      });

      if (!res.ok) throw new Error('Credenciales inválidas');

      const data = await res.json();
      localStorage.setItem('token', data.token); // Guarda el JWT

      navigate('/Aspirante'); // Redirige después del login
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <Header />
      <main className='main-login'>
        <div className="div-login">
          <form className="div-lg-form" onSubmit={handleLogin}>
            <h2>Iniciar Sesión</h2>
            <input
              type="email"
              className="input-lg-form"
              placeholder="Correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
            <input
              type="password"
              className="input-lg-form"
              placeholder="Contraseña"
              value={cla}
              onChange={(e) => setCla(e.target.value)}
              required
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" className="button-submit">Entrar</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
