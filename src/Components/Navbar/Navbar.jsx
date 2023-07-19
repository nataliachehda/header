import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Navbar.css'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <FaBars className="hamburger-icon" onClick={toggleMenu} />
      {isOpen && (
        <div className="menu-items">
          <a href="/">Inicio</a>
          <a href="/">Favoritos</a>
          <a href="/">Soporte</a>
          <a href="/">Información Legal</a>
          <div className="spacer" />
          <div className="spacer" />
          <a href="/">Cerrar sesión</a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
