import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import './Contact.css';

const LinkedinIcon = ({ size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="contact container section-padding">
      <div className="contact-header brutal-border brutal-shadow">
        <h2 className="contact-title font-pixel">
          ESTABLISH CONNECTION
        </h2>
        <p className="contact-subtitle">
          Ready to build something impactful? Reach out through the channels below.
        </p>
      </div>

      <div className="contact-grid">
        <a 
          href="mailto:nikhilnnambiar62@gmail.com" 
          className="contact-card brutal-card brutal-shadow brutal-hover"
        >
          <div className="contact-card-icon">
            <Mail size={32} />
          </div>
          <div className="contact-card-content">
            <h3>EMAIL</h3>
            <p>nikhilnnambiar62@gmail.com</p>
          </div>
          <ArrowUpRight className="contact-card-arrow" />
        </a>

        <a 
          href="https://linkedin.com/in/nikhil-naranthatta-5b75ab32b" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-card brutal-card brutal-shadow brutal-hover linkedin-card"
        >
          <div className="contact-card-icon">
            <LinkedinIcon size={32} />
          </div>
          <div className="contact-card-content">
            <h3>LINKEDIN</h3>
            <p>linkedin.com/in/nikhil-naranthatta-5b75ab32b</p>
          </div>
          <ArrowUpRight className="contact-card-arrow" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
