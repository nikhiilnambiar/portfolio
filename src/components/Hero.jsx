import React from 'react';
import { Mail } from 'lucide-react';
import Shuffle from './Shuffle';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero container section-padding">
      <div className="hero-content">
        <div className="hero-badge brutal-border brutal-shadow-sm">
          <span>SOFTWARE DEVELOPER & DRONE SYSTEMS INTERN</span>
        </div>

        <h1 className="hero-title font-pixel">
          HI, I AM<br />
          <span className="highlight-yellow">
            <Shuffle text="NIKHIL" tag="span" duration={0.35} />
          </span><br />
          <Shuffle text="NAMBIAR" tag="span" duration={0.35} />
        </h1>

        <p className="hero-desc">
          Bridging the gap between software engineering and hardware integration.
          Focused on modern web applications.
        </p>

        <div className="hero-actions">
          <a href="#work" style={{ textDecoration: 'none' }}>
            <button className="brutal-btn brutal-btn-primary">VIEW PROJECTS</button>
          </a>
          <a href="#contact" style={{ textDecoration: 'none' }}>
            <button className="brutal-btn">
              <Mail size={18} />
              INITIALIZE CONTACT
            </button>
          </a>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="hero-image-shadow"></div>
        <div className="hero-image brutal-border">
          <img src="/profile.png" alt="Nikhil Nambiar" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
