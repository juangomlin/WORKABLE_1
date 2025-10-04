import React from 'react';
import {Link } from 'react-router-dom';
import { FaUser, FaBriefcase, FaWheelchair} from 'react-icons/fa';
import { CheckCircle, Eye, IdCard, Medal, Rocket, ChevronRight, Settings, BadgeDollarSign } from 'lucide-react';
import './MiPerfil.css';
import HeaderAspirant from '../../../components/HeaderAspirant/HeaderAspirant';
import Menu from '../../../components/Menu/Menu';

const MiPerfil = () => {

  return (
    <>
    <HeaderAspirant />
    <Menu />
    
    <main className='main-perfil'>
      <section className='left-section'>
        <div className='box-left-perfil'>
          <div className='perfil'>
          <div class="profile-pic">
          <div class="overlay">
              <svg xmlns="http://www.w3.org/2000/svg" 
                class="icon-photo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M3 7h4l2-3h6l2 3h4v13H3V7z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </div>
          </div>
          <div className='text-perfil'>
            <h1>Nombre de perfil</h1>
            <p>Cargo</p>
            <p>Perfil completado</p>
          </div>
        </div>
        <div className='sub-text'>
          <p>Lorem ipsum dolor sit!</p>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
        </div>
        </div>

        <div className='box-left-application'>
          <div className="buttons-left-box">
            <div className='title-box-left'>
              <p>Mis aplicaciones</p>
            </div>
            <div className="buttons-container">
              <div className='buttons-1'>
                <button className="button">
                  <CheckCircle className="icon" size={30} color='#313945'/>
                  Aplicado <strong>0</strong>
                </button>
                <button className="button">
                  <Eye className="icon" size={30} color='#313945' />
                  HdV vista <strong>0</strong>
                </button>
              </div>
              <div className='buttons-2'>
                <button className="button">
                  <IdCard className="icon" size={30} color='#313945' />
                  En proceso <strong>0</strong>
                </button>
                <button className="button">
                  <Medal className="icon" size={30} color='#313945' />
                  Finalista <strong>0</strong>
                </button>
              </div>
          </div>

          </div>
        </div>

      <div className='section-perfil'>
        <div className="perfil-button">
        <Link to='/Professional' className="buttons-perfil">
          <div className="Button">
            <Rocket className="icon-2" size={18} color='#313945' />
            <span>Desarrollo profesional</span>
          </div>
          <ChevronRight className="text-gray-500" size={20}/>
        </Link>
      </div>

      <div className="perfil-button">
        <Link to='/' className="buttons-perfil">
          <div className="Button">
            <Settings className="icon-2" size={18} color='#313945'/>
            <span>Configuracion</span>
          </div>
          <ChevronRight className="text-gray-500" size={20}/>
        </Link>
        </div>
      </div>
    </section>

      <section className='right-section'>
        <div className='container-oferts'>
          <div className='title-offers'>
            <p className='text-offers'>Descubre estas opciones <strong>que te pueden interesar</strong></p>
          </div>
          <div className='offers-scroll'>
            <article className='box-offers'>
              <div className='offers'>
                <div className='span-offers'>
                </div>
                <h3>Desarrollador frontend</h3>
                <p>Next Solutions </p>
                <p>Bogota D.C</p>
                <div className='salary'>
                  <span>
                    <span className='icon-money'>
                      <BadgeDollarSign></BadgeDollarSign>
                      $ 2.100.000
                    </span>
                  </span>
                <p>Ayer</p>
                </div>
              </div>
            </article>
            <article className='box-offers'>
            <div className='offers'>
              <div className='span-offers'>
              </div>
              <h3>Ingeniero de Software</h3>
              <p>Tech Global</p>
              <p>Medellín, Antioquia</p>
              <div className='salary'>
                <span>
                  <span className='icon-money'>
                    <BadgeDollarSign></BadgeDollarSign>
                    $ 4.500.000
                  </span>
                </span>
                <p>Hoy</p>
              </div>
            </div>
          </article>
          <article className='box-offers'>
            <div className='offers'>
              <div className='span-offers'>
              </div>
              <h3>Analista de Datos</h3>
              <p>DataCorp</p>
              <p>Cali, Valle del Cauca</p>
              <div className='salary'>
                <span>
                  <span className='icon-money'>
                    <BadgeDollarSign></BadgeDollarSign>
                    $ 3.800.000
                  </span>
                </span>
                <p>Hace 2 días</p>
              </div>
            </div>
          </article>
          <article className='box-offers'>
          <div className='offers'>
            <div className='span-offers'>
            </div>
            <h3>Diseñador UX/UI</h3>
            <p>Creative Studio</p>
            <p>Barranquilla, Atlántico</p>
            <div className='salary'>
              <span>
                <span className='icon-money'>
                  <BadgeDollarSign></BadgeDollarSign>
                  $ 2.800.000
                </span>
              </span>
              <p>Hace 3 días</p>
            </div>
          </div>
        </article>
        <article className='box-offers'>
        <div className='offers'>
          <div className='span-offers'>
          </div>
          <h3>Administrador de Bases de Datos</h3>
          <p>Cloud Systems</p>
          <p>Cartagena, Bolívar</p>
          <div className='salary'>
            <span>
              <span className='icon-money'>
                <BadgeDollarSign></BadgeDollarSign>
                $ 4.200.000
              </span>
            </span>
            <p>Hace 5 días</p>
          </div>
        </div>
      </article>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default MiPerfil;
