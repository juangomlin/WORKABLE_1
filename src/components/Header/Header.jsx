import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (

		<header className="header-container" href='/ '>
			<Link to='/' className="logo-container"> 
				<p className='p-logo'>WORK</p>
				<p className='p-logo2'>ABLE</p>
			</Link>

			<button className="menu-toggle"
				onClick={() => setMenuOpen(open => !open)}
				aria-label="Abrir menú"
			>
				☰
			</button>

			<nav className={menuOpen ? 'nav-list show' : 'nav-list'}>
				<Link to="/buscar-ofertas">Buscar Ofertas</Link>
				<Link to="/Professional">Perfil Profesional</Link>
				<Link to="/Salary">Salarios</Link>
			</nav>

			<div className={menuOpen ? 'user-menu show' : 'user-menu'}>
				<Link to="/Login" className="ls-link">Iniciar Sesión</Link>
				<Link to="/SignUp" className="ls-link">Registrarse</Link>
			</div>
		</header>
	);
}

export default Header;
