// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="nav-link">My Portfolio</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
