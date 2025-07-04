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
import AdminPage from './pages/AdminPage/AdminPage';

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
				<Route path="/Reclutador" element={<ReclutadorPage />} />
				<Route path="/Administrador" element={<AdminPage />} />
				<Route path="/articulo1" element={<Articulo1 />} />
				<Route path="/articulo2" element={<Articulo2 />} />
				<Route path="/articulo3" element={<Articulo3 />} />
				<Route path="/Reclutador/Reclutamiento" element={<InfoRecPage />} />
				<Route path="/Reclutador/Configuracion" element={<ConfigPage />} />
				<Route path="/Reclutador/EditarPerfil" element={<ProfileEditPage />} />
        <Route path='/Aspirante' element={<AspirantePage />} />
				<Route path="/Reclutador/Publicacion" element={<PublicacionPage />} />
			</Routes>
		</Router>
	);
}

export default App;