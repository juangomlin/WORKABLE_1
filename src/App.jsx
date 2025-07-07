import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/MainPage/HomePage';
import SalaryPage from './pages/SalaryPage/SalaryPage';
import ProfessionalPage from './pages/ProfessionalPage/ProfessionalPage';
import LoginPage from './components/LoginPage/LoginPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ReclutadorPage from './pages/ReclutadorPage/ReclutadorPage';
import Articulo1 from './pages/ProfessionalPage/Articulos/Articulo1/Articulo1';
import Articulo2 from './pages/ProfessionalPage/Articulos/Articulo2/Articulo2';
import Articulo3 from './pages/ProfessionalPage/Articulos/Articulo3/Articulo3';
import ConfigPage from './pages/ReclutadorPage/ConfigPage/ConfigPage';
import ProfileEditPage from './pages/ReclutadorPage/ProfileEditPage/ProfileEditPage';
import PublicacionPage from './pages/ReclutadorPage/PublicacionPage/PublicacionPage';
import AspirantePage from './pages/AspirantePage/AspirantePage';
import InfoRecPage from './pages/ReclutadorPage/InfoReclutadorPage/InfoRecPage';
import MiPerfil from './pages/AspirantePage/MiPerfil/MiPerfil';

import AdminPage from './pages/AdminPage/AdminPage';
import AdminAccountsPage from './pages/AdminPage/AdminAccountPage/AdminAccountPage';
import CompaniesPage from './pages/AdminPage/CompaniesPage/CompaniesPage';
import FeedBackPage from './pages/AdminPage/FeedBackPage/FeedBackPage';
import OffersPage from './pages/AdminPage/OffersPage/OffersPage';
import ReportPage from './pages/AdminPage/ReportPage/ReportPage';
import UsersManagePage from './pages/AdminPage/UsersManagePage/UsersManagePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/salary" element={<SalaryPage />} />
        <Route path="/professional" element={<ProfessionalPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignUpPage />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />

        <Route path="/articulo1" element={<Articulo1 />} />
        <Route path="/articulo2" element={<Articulo2 />} />
        <Route path="/articulo3" element={<Articulo3 />} />

        <Route path="/Aspirante" element={<AspirantePage />} />
        <Route path="/Aspirante/MiPerfil" element={<MiPerfil />} />

        <Route path="/Reclutador" element={<ReclutadorPage />} />
        <Route path="/Reclutador/Reclutamiento" element={<InfoRecPage />} />
        <Route path="/Reclutador/Configuracion" element={<ConfigPage />} />
        <Route path="/Reclutador/EditarPerfil" element={<ProfileEditPage />} />
        <Route path="/Reclutador/Publicacion" element={<PublicacionPage />} />

        <Route path="/Administrador" element={<AdminPage />} />
        <Route path="/Admin/CuentasInternas" element={<AdminAccountsPage />} />
        <Route path="/Admin/Reportes" element={<ReportPage />} />
        <Route path="/Admin/Retroalimentacion" element={<FeedBackPage />} />
        <Route path="/Admin/Empresas" element={<CompaniesPage />} />
        <Route path="/Admin/Ofertas" element={<OffersPage />} />
        <Route path="/Admin/Usuarios" element={<UsersManagePage />} />

        <Route path="/Admin/Empresas/:id" element={<CompaniesPage />} />
        <Route path="/Admin/Ofertas/:id" element={<OffersPage />} />
        <Route path="/Admin/Usuarios/:id" element={<UsersManagePage />} />

      </Routes>
    </Router>
  );
}

export default App;