import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // <--- NEW IMPORT
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

     
        <a href="#" className="logo" onClick={closeMenu}>
          AUTHOR <span className="logo-accent">PORTFOLIO</span>
        </a>

       
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

       
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#books" className="nav-links" onClick={closeMenu}>
              Books
            </a>
          </li>

          <li className="nav-item">
            <a href="#bio" className="nav-links" onClick={closeMenu}>
              Bio
            </a>
          </li>

          <li className="nav-item">
            <a href="#blog" className="nav-links" onClick={closeMenu}>
              Blog
            </a>
          </li>

          <li className="nav-item">
            <a href="#books" className="nav-links btn-nav" onClick={closeMenu}>
              Purchase
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;