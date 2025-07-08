import React from 'react';
import HeaderAdmin from '../../../components/HeaderAdmin/HeaderAdmin';
import Footer from '../../../components/Footer/Footer';
import './UsersManagePage.css';

function UsersManagementPage() {
  return (
    <>
      <HeaderAdmin />
      <main className="main-users-management-UMP">
        <div className="container-users-management-UMP">
          <h2 className="title-section-UMP">Gestión de Usuarios</h2>
          <p>Aquí podrás ver el listado completo de usuarios y gestionar sus perfiles o suspenderlos.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default UsersManagementPage;