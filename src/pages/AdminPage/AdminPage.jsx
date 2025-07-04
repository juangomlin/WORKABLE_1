import React from 'react';
import { Link } from 'react-router-dom';
import HeaderReclutador from '../../components/HeaderReclutador/HeaderReclutador';
import Footer from '../../components/Footer/Footer';
import './AdminPage.css';

function AdminPage() {
  return (
    <>
      <HeaderReclutador />
      <main className='main-admin-AD'>
        <div className="main-content-admin-AD">

          <div className="column-left-admin-AD">
            <section className="section-overview-AD">
              <h2 className="title-section-AD">Panel de Administración</h2>
              <div className="overview-stats-AD">
                <div className="stat-item-AD">
                  <h3 className="stat-number-AD">7.1M</h3>
                  <p className="stat-label-AD">Usuarios Registrados</p>
                </div>
                <div className="stat-item-AD">
                  <h3 className="stat-number-AD">11.2K</h3>
                  <p className="stat-label-AD">Empresas Activas</p>
                </div>
                <div className="stat-item-AD">
                  <h3 className="stat-number-AD">8.9K</h3>
                  <p className="stat-label-AD">Ofertas Publicadas</p>
                </div>
                <div className="stat-item-AD">
                  <h3 className="stat-number-AD">23</h3>
                  <p className="stat-label-AD">Reportes Pendientes</p>
                </div>
              </div>
            </section>

            <section className="section-actions-AD">
              <h2 className="title-section-AD">Acciones Rápidas</h2>
              <div className="action-buttons-AD">
                <button className="button-action-AD">Gestionar Empresas</button>
                <button className="button-action-AD">Gestionar Ofertas</button>
                <button className="button-action-AD">Gestionar Usuarios</button>
                <button className="button-action-AD">Ver Reportes</button>
              </div>
            </section>
          </div>

          <div className="column-right-admin-AD">
            <section className="section-list-companies-AD">
              <div className="header-list-AD">
                <h2 className="title-section-AD">Listado de Empresas</h2>
                <button className="button-add-AD">Añadir Empresa</button>
              </div>
              <div className="table-container-AD">
                <table className="data-table-AD">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>NIT</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Coca-Cola S.A.</td>
                      <td>900123456</td>
                      <td>
                        <button className="button-action-small-AD">Ver</button>
                        <button className="button-delete-small-AD">Eliminar</button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Google Ltda.</td>
                      <td>800789123</td>
                      <td>
                        <button className="button-action-small-AD">Ver</button>
                        <button className="button-delete-small-AD">Eliminar</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="section-list-offers-AD">
              <div className="header-list-AD">
                <h2 className="title-section-AD">Últimas Ofertas</h2>
                <button className="button-add-AD">Añadir Oferta</button>
              </div>
              <div className="list-items-AD">
                <div className="list-item-AD">Desarrollador Frontend (Reportada) <button className="button-delete-small-AD">Eliminar</button></div>
                <div className="list-item-AD">Diseñador UX/UI</div>
                <div className="list-item-AD">Especialista en Marketing (Reportada) <button className="button-delete-small-AD">Eliminar</button></div>
              </div>
            </section>

            <section className="section-list-users-AD">
              <div className="header-list-AD">
                <h2 className="title-section-AD">Usuarios Reportados</h2>
              </div>
              <div className="list-items-AD">
                <div className="list-item-AD">Usuario123 (Comentario inapropiado) <button className="button-delete-small-AD">Eliminar Comentario</button><button className="button-ban-small-AD">Banear</button></div>
                <div className="list-item-AD">Pepito_Perez (Oferta discriminatoria) <button className="button-delete-small-AD">Eliminar Oferta</button></div>
                <div className="list-item-AD">Maria_Gomez (Spam) <button className="button-delete-small-AD">Eliminar Contenido</button><button className="button-ban-small-AD">Banear</button></div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AdminPage;