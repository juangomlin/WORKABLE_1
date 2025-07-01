import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SeccConfigura.css';

const SeccConfigura = () => {
    const navigate = useNavigate();

    const handleExit = () => {
    navigate('/');
};
    return (
    <>
    <header className='CabConfig'>
        <h1>WORKABLE</h1>
        <button className="btn-exit" onClick={handleExit}>
            🡨
        </button>
    </header>

    <body>
        <main>
        <div className='SecConfig'>
            <div className='ModConfig'>
                <div className='TitleConfig'>
                    <h2>Modificar e-mail y clave</h2>
                    <link rel="stylesheet" href="" />
                    <a href=""><Link to="/EditSecc">Editar</Link></a>
                </div>
                <div className='BoxConfig'>
                <p>Estás registrado con el e-mail <span>ejemlo@gmail.com.</span> A esta dirección te enviaremos las notificaciones sobre nuevas ofertas y tus aplicaciones.</p>
                    
                </div>
                
            <div className='ModConfig'>
                <div className='TitleConfig'>
                    <h2>Modificar nivel de privacidad</h2>
                </div>
                <div className='BoxConfig'>
                    <div className='BOXconf'>
                        <div className='CheckBoxConfig'>
                            <input type="checkbox" name="CVs"/>
                            <p>Hoja de vida visible para las empresas</p>
                    </div>
                    <div className='CheckBoxConfig'>
                        <input type="checkbox" name="Cvs2"/>
                        <p>Hoja de vida no visible para las empresas
                        Las empresas no tienen acceso a tus datos y no pueden contactar contigo. Solamente las empresas a cuyos empleos aplicas, pueden visualizar tus datos y contactarte.</p>  
                    </div>
                    <button className='BtnCheckBox'>
                        <span>Modificar mi privacidad</span>
                    </button>
                    </div>
                </div>

            <div className='ModConfig'>
                <div className='TitleConfig'>
                    <h2>Eliminar cuenta</h2>
                </div>
                <div className='BoxConfig'>
                    <div className='BOXconf'>
                        <div className='CheckBoxConfig'>   
                        <input type="checkbox" name="Cvs2"/>
                        <p>Eliminar cuenta ejemplo@gmail.com.
                        Esta opción hace que tu cuenta ejemlo@gmail.com se elimine de manera definitiva junto con toda tu actividad en WORKABLE y todos los servicios contratados hasta la fecha.</p>  
                    </div>
                    <button className='BtnCheckBox'>
                        <span>Eliminar cuenta</span>
                    </button>
                </div>
                    </div>
            </div>
            </div>
            </div>
        </div>
    </main>
    </body>
    


    <footer className='FooterConfig'>
        <p>
            Copyright 2025 DGNET LTD.
            Contacto de candidato / Ayuda de candidato
        </p>
    </footer>
    </>


    );
};

export default SeccConfigura;