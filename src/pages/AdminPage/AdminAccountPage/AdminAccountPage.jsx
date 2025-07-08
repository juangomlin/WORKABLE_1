import React from 'react';
import HeaderAdmin from '../../../components/HeaderAdmin/HeaderAdmin';
import Footer from '../../../components/Footer/Footer';
import './AdminAccountPage.css';

function AdminAccountsPage() {
  return (
    <>
      <HeaderAdmin />
      <main className="main-admin-accounts-AAP">
        <div className="container-admin-accounts-AAP">
          <h2 className="title-section-AAP">Administrar Cuentas Internas</h2>
          <p>Aquí podrás crear, modificar y eliminar cuentas de administradores de la plataforma.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AdminAccountsPage;