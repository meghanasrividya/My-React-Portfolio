// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Homepage.css';
import profilePic from '../assets/Meghana Photo.jpeg'; // Your profile picture

function HomePage() {
  return (
    <div className="home">
      <div className="home-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>Hello, I'm Meghana Aenugu</h1>
        <p>I am a Full Stack Developer</p>
        <Link to="/contact">
          <button className="cta-btn">Let's Work Together!</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
