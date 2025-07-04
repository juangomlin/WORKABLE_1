import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/MainPage/HomePage';
import SalaryPage from './pages/SalaryPage/SalaryPage';
import ProfessionalPage from './pages/ProfessionalPage/ProfessionalPage';
import LoginPage from './components/LoginPage/LoginPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ReclutadorPage from './pages/ReclutadorPage/ReclutadorPage';
import AdminPage from './pages/AdminPage/AdminPage';
import Articulo1 from './pages/ProfessionalPage/Articulos/Articulo1/Articulo1';
import Articulo2 from './pages/ProfessionalPage/Articulos/Articulo2/Articulo2';
import Articulo3 from './pages/ProfessionalPage/Articulos/Articulo3/Articulo3';
import SeccReclutam from './pages/ReclutadorPage/Secciones/Seccion1/ReclutadorPage';
import SeccConfigura from './pages/ReclutadorPage/Secciones/Seccion2/SeccConfigura';
import EditSecc from './pages/ReclutadorPage/Secciones/Seccion2/EditSecc/EditSecc';
import PubAviso from './pages/ReclutadorPage/Secciones/Seccion1/PubAviso/PubAviso';
import AspirantePage from './pages/AspirantePage/AspirantePage';

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
				<Route path="/Reclutador/reclutamiento" element={<SeccReclutam />} />
				<Route path="/Reclutador/configuracion" element={<SeccConfigura />} />
				<Route path="/Reclutador/editar-seccion" element={<EditSecc />} />
				<Route path="/PerfilPro" element={<ProfessionalPage />} />
        		<Route path='/Aspirante' element={<AspirantePage />} />
				<Route path="/PubAviso" element={<PubAviso />} />
			</Routes>
		</Router>
	);
}

export default App;