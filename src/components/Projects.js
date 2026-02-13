import React from 'react';
import './Projects.css';
import { useReveal } from '../hooks/useReveal';

const Projects = () => {
  const ref = useReveal();
  const projects = [
    { title: 'Multimodel Swine Flu Detector', desc: 'ML prediction system using 5 algorithms achieving 95% accuracy. Deployed on Google Cloud Platform.', tech: ['Python','ML','GCP'], url: 'https://github.com/SreeCharanManne/Swineflu_pediction_using_ML_GCP' },
    { title: 'Dining Management System', desc: 'University dining app with attendance-based fee calculation and Firebase real-time sync.', tech: ['JavaScript','Firebase','Bootstrap'], url: 'https://github.com/SreeCharanManne/SoftwareProject.git' },
    { title: 'NewsApp with Covid-19 Tracker', desc: 'Real-time news aggregation and Covid-19 tracking with responsive design.', tech: ['React.js','APIs','Heroku'], url: 'https://github.com/SreeCharanManne/Covid-19-Tracker' },
  ];

  return (
    <section id="projects" className="proj">
      <div className="proj__wrap">
        <p className="label">Projects</p>
        <div ref={ref} className="proj__grid reveal-children">
          {projects.map((p, i) => (
            <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="proj__card">
              <div className="proj__top">
                <div className="proj__icon"><i className="fab fa-github" /></div>
                <h3 className="proj__title">{p.title}</h3>
                <p className="proj__desc">{p.desc}</p>
              </div>
              <div className="proj__tags">{p.tech.map(t => <span key={t} className="proj__tag">{t}</span>)}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;