import React from 'react';
import './Certifications.css';
import { useReveal } from '../hooks/useReveal';

const Certifications = () => {
  const ref = useReveal();
  const certs = [
    { name: 'Architecting with Google Compute Engine', issuer: 'Google Cloud', icon: 'fab fa-google' },
    { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', icon: 'fab fa-aws' },
    { name: 'Microsoft Azure Fundamentals', issuer: 'Microsoft', icon: 'fab fa-microsoft' },
    { name: 'Tiger Edge — Data Science Program', issuer: 'Tiger Analytics', icon: 'fas fa-chart-bar' },
  ];

  return (
    <section id="certifications" className="certs">
      <div className="certs__wrap">
        <p className="label">Certifications</p>
        <div ref={ref} className="certs__list reveal-children">
          {certs.map((c, i) => (
            <div key={i} className="certs__item">
              <div className="certs__icon"><i className={c.icon} /></div>
              <div><p className="certs__name">{c.name}</p><p className="certs__issuer">{c.issuer}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;