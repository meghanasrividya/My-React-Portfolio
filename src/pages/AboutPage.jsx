// src/pages/AboutPage.js
import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about">
      <h2>About Me</h2>

      {/* Professional Summary */}
      <section className="about-section">
        <h3>Professional Summary</h3>
        <p>
          Proficient in version control systems such as GIT, with expertise in web development technologies including HTML, CSS, and JavaScript. Skilled in leveraging tools like Ansible, Terraform, Docker, and Kubernetes to streamline infrastructure management and deployment processes. Strong background in Linux environments and CI/CD pipelines, complemented by programming capabilities in Python. Adept at implementing scalable solutions and optimizing workflows to support organizational goals.
        </p>
      </section>

      {/* Work History */}
      <section className="about-section">
        <h3>Work History</h3>
        <div className="work-history">
          <h4>DevOps Engineer | Sparta Global - London, UK (10/2022 to 01/2023)</h4>
          <ul>
            <li>Worked in Agile methodology, collaborating with cross-functional teams to deliver iterative and high-quality software solutions.</li>
            <li>Implemented CI/CD pipelines using Jenkins and Docker, automating the deployment process and enhancing development efficiency.</li>
            <li>Provisioned and optimized 50+ EC2 instances, managed configurations, and maintained AMIs, ensuring consistent server setups across multiple environments.</li>
            <li>Designed and configured 10+ VPCs, established secure network connections, and implemented network security measures, reducing vulnerabilities by 30%.</li>
            <li>Automated infrastructure provisioning and scaling using Ansible and Terraform, reducing deployment time by 40%.</li>
            <li>Managed source code repositories and implemented version control best practices using Git, improving collaboration and code quality.</li>
          </ul>

          <h4>IT System Administrator | Montcalm Hotels - London, UK (01/2016 to 01/2021)</h4>
          <ul>
            <li>Oversaw IT operations for a network of 22 hotels with around 500+ systems, ensuring seamless connectivity, system performance, and data security.</li>
            <li>Implemented and maintained server infrastructure, including Linux-based systems and Windows servers.</li>
            <li>Collaborated with hotel management teams to understand their technology needs and provided effective IT solutions.</li>
            <li>Managed vendor relationships for hardware and software procurement, ensuring cost-effective purchases.</li>
            <li>Played a key role in troubleshooting and resolving IT issues, minimizing downtime, and ensuring uninterrupted guest services.</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="about-section">
        <h3>Skills</h3>
        <ul>
          <li>Version Control - GIT</li>
          <li>HTML, CSS, JavaScript</li>
          <li>Ansible & Terraform</li>
          <li>Docker and Kubernetes</li>
          <li>Linux</li>
          <li>CI/CD</li>
          <li>Python</li>
        </ul>
      </section>

      {/* Education */}
      <section className="about-section">
        <h3>Education</h3>
        <ul>
          <li>B.Tech, Electronics and Comm - Distinction, JNTU University, Hyderabad, India (09/2009 to 05/2013)</li>
          <li>M.Tech, VLSI Design - Distinction, GITAM University, Hyderabad, India (07/2013 to 05/2015)</li>
          <li>NVQ Level 4, Full Stack Web Developer Accredited BootCamp, Step8up Academy, Camberley, Surrey (01/2025 to 03/2025)</li>
        </ul>
      </section>

      {/* Certifications */}
      <section className="about-section">
        <h3>Certifications</h3>
        <ul>
          <li>AWS Certified Cloud Practitioner</li>
          <li>Certified DevOps Engineer (Edureka) with Grade A</li>
          <li>Hashicorp Terraform Associate (Udemy)</li>
          <li>Azure Fundamentals (Udemy)</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutPage;
