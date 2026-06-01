import React from 'react';
import { CheckCircle2, Scan, BarChart3, Package } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    id: 'SYS.01',
    title: 'Smart Task Manager',
    description: 'An intelligent productivity suite leveraging modern web tech to streamline daily operations and task prioritization workflows.',
    tags: ['REACT', 'NODE.JS'],
    headerColor: 'var(--color-primary)',
    headerText: 'var(--color-text)',
    Icon: CheckCircle2
  },
  {
    id: 'SYS.02',
    title: 'VR Video Call',
    description: 'Immersive communication protocol enabling real-time video transmission within a virtual reality environment.',
    tags: ['WEBRTC', 'THREE.JS'],
    headerColor: 'var(--color-secondary)',
    headerText: 'var(--color-bg)',
    Icon: Scan
  },
  {
    id: 'SYS.03',
    title: 'Student Skill Gap Analysis',
    description: 'Data-driven platform identifying competency deficiencies in academic cohorts, providing actionable insights for curriculum adaptation.',
    tags: ['REACT', 'NODE.JS', 'MONGODB'],
    headerColor: '#1a1a1a',
    headerText: 'var(--color-bg)',
    Icon: BarChart3
  }
];

const Projects = () => {
  return (
    <section id="work" className="projects container section-padding">
      <div className="section-header">
        <h2 className="section-title">
          DEPLOYED<br />
          MODULES
        </h2>
        <Package size={40} strokeWidth={2} />
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card brutal-card brutal-shadow">
            <div
              className="project-header"
              style={{ backgroundColor: project.headerColor, color: project.headerText }}
            >
              <span className="project-id">{project.id}</span>
              <project.Icon size={20} />
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
