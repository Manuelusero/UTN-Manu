import React from 'react';
import './Navbar.css';

const Navbar = ({userData}) => {
    const { isLogged, isAdmin, lang } = userData;

    return (
        <nav className="navbar">
         <div className="navbar-logo">LOGO</div>
         <div className="navbar-links">
          <span>{lang === 'en' ? 'Home' : 'Inicio'}</span>
          {isAdmin && <button>{lang === 'en' ? 'Create product' : 'Crear producto'}</button>}
          {!isLogged && <button>{lang === 'en' ? 'Login' : 'Iniciar sesión'}</button>}
        </div>
    </nav>
  );
};

export default Navbar;
