import React from 'react';
import { Wrench } from 'lucide-react';
import './AboutSkills.css';

const AboutSkills = () => {
  return (
    <section id="about" className="about-skills container section-padding">
      <div className="about-card brutal-card brutal-shadow">
        <h2 className="about-title">
          SYSTEM ARCHITECTURE:<br />
          THE HUMAN FACTOR
        </h2>
        <p className="about-text">
          Currently pushing the boundaries of autonomous systems as a Drone Systems Intern at <strong>Singularit</strong>.
          My academic foundation is rooted at <strong>CUSAT</strong>, where theoretical computing meets practical hardware challenges.
          I build robust digital infrastructure that bridges hardware telemetry with intuitive human interfaces.
        </p>
      </div>

      <div className="skills-card brutal-card brutal-shadow">
        <div className="skills-header">
          <h2 className="skills-title">TECHNICAL ARSENAL</h2>
          <Wrench size={24} className="skills-icon" />
        </div>
        <div className="skills-tags">
          <span className="skill-tag">PYTHON</span>
          <span className="skill-tag">RAG</span>
          <span className="skill-tag">NODE.JS</span>
          <span className="skill-tag">C++</span>
          <span className="skill-tag">REACT</span>
          <span className="skill-tag">TAILWIND CSS</span>
          <span className="skill-tag">DOCKER</span>
          <span className="skill-tag">GIT</span>

        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
