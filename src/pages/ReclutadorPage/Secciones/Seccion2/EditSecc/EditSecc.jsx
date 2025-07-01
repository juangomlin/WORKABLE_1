import React from 'react';
import { Link, } from 'react-router-dom';
import './EditSecc.css';

function EditSecc() {
    return (
    <>
        <header className='HeadEdit'>
            <h1>WORKABLE</h1>
        </header>

        <div className='NavEdit'>
            <h1>Modificar el e-mail de acceso</h1>
            <h1>Modificar clave</h1>
            <h1><Link to="/SeccConfigura">Volver a configuración</Link></h1>
        </div>

        <div className='FormsEdit'>
            <div className='FormEdit1'>
                <form action="">
                    <div className='TxtEdit'>
                        <div className='Tit'>Email actual</div>
                        <p>ejemplo@gmail.com</p>
                    </div>
                    <div className='InputEdit'>
                        <h2>Nuevo e-mail</h2>
                        <input type="email" placeholder='' />
                    </div>
                    <div className='InputEdit'>
                        <h2>Repetir e-mail</h2>
                        <input type="email" placeholder='' />
                    </div>
                    <button className='BtnEdit'>
                        Modificar mi e-mail
                    </button>
                </form>
            </div>
            <div className='FormEdit2'>
                <form action="">
                    <div className='InputEdit'>
                        <h2>Clave actual</h2>
                        <input type="password" placeholder='' />
                    </div>
                    <div className='InputEdit'>
                        <h2>Nueva clave</h2>
                        <input type="password" placeholder='' />
                    </div>
                    <div className='InputEdit'>
                        <h2>Repetir clave</h2>
                        <input type="password" placeholder='' />
                    </div>
                    <button className='BtnEdit'>
                        Modificar mi clave
                    </button>
                </form>
            </div>
        </div>
    </>
    );
}

export default EditSecc;




