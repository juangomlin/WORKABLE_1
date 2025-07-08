import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './LoginPage.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const Users = {
    aspirante: { username: 'aspirante', password: '123', redirect: '/Aspirante' },
    reclutador: { username: 'pepito', password: '123', redirect: '/Reclutador' },
    administrador: { username: 'admin', password: '123', redirect: '/Administrador' },
  };

    const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage('');

    let loggedIn = false;
    for (const type in Users) {
      if (Users[type].username === username && Users[type].password === password) {
        navigate(Users[type].redirect);
        loggedIn = true;
        break;
      }
    }
    if (!loggedIn) {
      setErrorMessage('Credenciales incorrectas. Intenta de nuevo.');
    }
  };

  return(
    <>
      <Header />
      <main className='main-login'>
        <div className="div-login">
            <form className="div-lg-form" onSubmit={handleLogin}>
              <h2>Iniciar Sesión</h2>
              <input
                type="text"
                className="input-lg-form"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                className="input-lg-form"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button type="submit" className="button-submit">Entrar</button>
              <Link to='/ForgotPassword'>
                <p className="text-link">¿Olvidaste tu contraseña?</p>
              </Link>
              <Link to='/Signup'>
                <p className="text-link">¿No tienes cuenta? Regístrate aquí.</p>
              </Link>
            </form>
          </div>
      </main>
      <Footer />
    </>
  );
}

export default LoginPage;