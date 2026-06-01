import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar nav-container">
      <div className="nav-logo brutal-border brutal-shadow-sm">
        <span className="logo-text">NIKHIL.DEV</span>
      </div>

      <div className="nav-links">
        <a href="#work" className="nav-link">WORK</a>


        <a href="#about" className="nav-link active">ABOUT</a>
        <a href="#contact" className="nav-link">CONTACT</a>
      </div>

      <div className="nav-actions">
        <a href="/Nikhil_Resume.new.pdf" target="_blank" rel="noopener noreferrer">
          <button className="brutal-btn brutal-btn-primary">RESUME</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
