import React from 'react';
import { Link } from 'react-router-dom';
import HeaderReclutador from '../../components/HeaderReclutador/HeaderReclutador';
import './ReclutadorPage.css';

function ReclutadorPage() {
  return (
    <>
      <HeaderReclutador />
      <main className='main-reclutador-rc'>
        <div className="nav-panel-rc">
          <div className="nav-item-rc">
            <svg className="icon-nav-rc" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" role="img" aria-hidden="true">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
            </svg>
            <span className="link-nav-rc">
              <Link to="/Reclutador">Inicio</Link>
            </span>
          </div>
          <div className="nav-item-rc">
            <svg className="icon-nav-rc" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" role="img" aria-hidden="true">
              <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68 68 0 0 0-1.722-.082z"/>
            </svg>
            <span className="link-nav-rc">
              <Link to="/Reclutador/reclutamiento">Reclutamiento</Link>
            </span>
          </div>
          <div className="nav-item-rc">
            <svg className="icon-nav-rc" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" role="img" aria-hidden="true">
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
            </svg>
            <span className="link-nav-rc">
              <Link to="/Reclutador/Configuracion">Configuracion</Link>
            </span>
          </div>
        </div>
        <div className="main-content-rc">
          <div className="column-left-rc">
            <div className="info-company-rc">
              <div className="logo-company-rc">
                <img src="https://logodownload.org/wp-content/uploads/2014/04/coca-cola-logo-1-1.png" alt="coc" className='img-logo-rc'/>
              </div>
              <div>
                <h2 className="name-company-rc">Empresa genérica</h2>
                <p className="user-admin-rc">Usuario administrador</p>
              </div>
            </div>
            <div className="section-recruitment-rc">
              <div className="header-section-rc">
                <h3 className="title-section-rc">Reclutamiento</h3>
                <span className="link-manage-rc">Gestionar avisos</span>
              </div>
              <div className="cards-recruitment-rc">
                <div className="card-recruitment-rc">
                  <div className="circle-placeholder-rc"></div>
                  <p className="card-text-rc">Avisos publicados</p>
                </div>
                <div className="card-recruitment-rc">
                  <div className="circle-placeholder-rc"></div>
                  <p className="card-text-rc">Avisos destacados</p>
                </div>
                <div className="card-recruitment-rc">
                  <div className="circle-placeholder-rc"></div>
                  <p className="card-text-rc">Avisos urgentes</p>
                </div>
              </div>
              <div className="container-button-publish-rc">
                <Link to='/Reclutador/Publicacion'>
                  <button className="button-publish-rc">Publicar oferta</button>
                </Link>
              </div>
            </div>
            <div className="section-statistics-rc">
              <div className="header-statistics-rc">
                <h3 className="title-section-rc">Estadística</h3>
                <span className="link-more-rc">Ver más estadísticas</span>
              </div>
              <div className="graphs-statistics-rc">
                <div className="card-graph-rc">
                  <div className="graph-placeholder-rc"></div>
                  <p className="card-text-rc">Avisos Activos</p>
                </div>
                <div className="card-graph-rc">
                  <div className="graph-placeholder-rc"></div>
                  <p className="card-text-rc">Postulantes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="column-right-rc">
            <div className="image-placeholder-rc"></div>
            <div className="section-reviews-rc">
              <div className="header-reviews-rc">
                <h3 className="title-section-rc">Reviews</h3>
                <span className="link-reviews-rc">Ver reviews</span>
              </div>
              <div className="container-reviews-rc">
                <p className="review-label-rc">Evaluación general</p>
                <div className="stars-reviews-rc">
                  <i className="fas fa-star" aria-hidden="true"></i>
                  <i className="fas fa-star" aria-hidden="true"></i>
                  <i className="fas fa-star" aria-hidden="true"></i>
                  <i className="fas fa-star" aria-hidden="true"></i>
                  <i className="fas fa-star-half-alt" aria-hidden="true"></i>
                </div>
                <p className="review-label-rc">Evaluaciones</p>
                <div className="users-reviews-rc">
                  <i className="fas fa-user" aria-hidden="true"></i>
                  <i className="fas fa-user" aria-hidden="true"></i>
                  <i className="fas fa-user" aria-hidden="true"></i>
                  <i className="fas fa-user" aria-hidden="true"></i>
                  <i className="fas fa-user" aria-hidden="true"></i>
                </div>
                <p className="review-label-rc">Comentarios</p>
                <div className="comments-reviews-rc">
                  <i className="fas fa-comment" aria-hidden="true"></i>
                  <i className="fas fa-comment" aria-hidden="true"></i>
                  <i className="fas fa-comment" aria-hidden="true"></i>
                  <i className="fas fa-comment" aria-hidden="true"></i>
                  <i className="fas fa-comment" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ReclutadorPage;