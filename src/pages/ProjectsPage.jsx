// src/pages/ProjectsPage.js
import React from 'react';
import './ProjectsPage.css';

const projects = [
  {
    title: 'ClimaVoice-Weather Dashboard',
    description: 'ClimaVoice is an interactive weather dashboard that provides real-time weather updates and a 5-day forecast for any city worldwide. It features voice recognition, allowing users to search for weather information using their voice.',
    github: 'https://github.com/meghanasrividya/weather-website',
    live: 'https://cameronamoateng.github.io/weather-website/',
  },
  {
    title: 'Note-Making App',
    description: "Welcome to the Note-Making App! This application allows you to create, edit, and delete notes seamlessly. It's built using modern web technologies like HTML, CSS, and JavaScript, with a backend powered by Node.js and Express.A full-stack application built with Node.js and MongoDB.",
    github: 'https://github.com/meghanasrividya/Note-Making-App',
    live: 'https://note-making-app-l1il.onrender.com/',
  },
  
  {
    title: 'Modern Todo Dashboard',
    description: "A sleek and interactive Todo Dashboard built using HTML, CSS, and JavaScript. This project allows users to add, manage, and track tasks with an intuitive interface.",
    github: 'https://github.com/meghanasrividya/To_Do_List_App',
    live: 'https://meghanasrividya.github.io/To_Do_List_App/',
  },

  {
    title: 'Precision Calculator',
    description: "Welcome to the Responsive Calculator project! This calculator is built with HTML, CSS, and JavaScript, utilizing Bootstrap for a sleek and responsive design.",
    github: 'https://github.com/meghanasrividya/Functional_calculator',
    live: 'https://meghanasrividya.github.io/Functional_calculator/',
  },

  {
    title: 'PrakritiMart',
    description: "PrakritiMart is a web-based platform designed for sustainable shopping. This project provides an eco-friendly shopping experience with features such as cart management, checkout, and a contact form for inquiries.",
    github: 'https://github.com/meghanasrividya/Multipage_Website',
    live: 'https://meghanasrividya.github.io/Multipage_Website/',
  },

  {
    title: 'Portfolio Website',
    description: "This is a simple, responsive portfolio website built with HTML, CSS, and Bootstrap. The website showcases my skills, projects, and contact details, providing an easy way to reach out.",
    github: 'https://github.com/meghanasrividya/Portfolio_Website_using_Bootstrap',
    live: 'https://meghanasrividya.github.io/Portfolio_Website_using_Bootstrap/',
  },
];

function ProjectsPage() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
