import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css'; // Para estilização
import logo from '../assets/navicon.png'; // logo do projeto

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">

      <img src={logo} alt="Logo" className="navbar-icon"/> 
      <h1 className="navbar-logo">Projeto Carapaça</h1>
      <ul className="navbar-links">
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/dashboard">Equipe</Link>
              </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <button className="logout-button" onClick={logout}>
                Sair
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/AboutUs">Sobre Nós</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
