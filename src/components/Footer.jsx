import React from 'react';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        
        <h3>MAGNUS STAR</h3>
        <p className="footer-tagline">Stories from the edge of space.</p>

       
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
        </div>

        
        <p className="copyright">&copy; 2025 Magnus Star. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;