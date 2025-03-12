import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import profilePic from '../assets/Meghana Photo.jpeg'; // Your profile picture

function HomePage() {
  return (
    <div className="home">
      <style>
        {`
          .home {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            width: 100vh;
            background-color: #f0f0f0;
          }
          
          .home-content {
            text-align: center;
          }
          
          .profile-pic {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 5px solid #34495e;
            margin-bottom: 20px;
          }
          
          .cta-btn {
            background-color: #34495e;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
          }
          
          .cta-btn:hover {
            background-color: #0056b3;
          }
        `}
      </style>

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
