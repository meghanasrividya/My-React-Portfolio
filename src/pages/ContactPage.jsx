// src/pages/ContactPage.js
import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>

      <section className="contact-info">
        <div className="contact-item">
          <h3>Address</h3>
          <p>  ABC street, XYZ county, Greater London, ABC 9EF </p>
        </div>

        <div className="contact-item">
          <h3>Phone</h3>
          <p>**********</p>
        </div>

        <div className="contact-item">
          <h3>Email</h3>
          <p>
            <a href="mailto:meghanar19@gmail.com">meghanar19@gmail.com</a>
          </p>
        </div>

        <div className="contact-item">
          <h3>Website</h3>
          <p>
            <a href="https://github.com/meghanasrividya" target="_blank" rel="noopener noreferrer">
              GitHub - meghanasrividya
            </a>
          </p>
        </div>

        <div className="contact-item">
          <h3>LinkedIn</h3>
          <p>
            <a href="https://www.linkedin.com/in/meghana-aenugu-88969689/" target="_blank" rel="noopener noreferrer">
              LinkedIn - Meghana Aenugu
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
