import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: "Architecting with Google Compute Engine Specialization",
      issuer: "Google Cloud Platform",
      icon: "fab fa-google"
    },
    {
      title: "Tiger Edge - A Student Developer Program in DataScience",
      issuer: "Tiger Analytics",
      icon: "fas fa-certificate"
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      icon: "fab fa-microsoft"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      icon: "fab fa-aws"
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications & Publications</h2>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-icon">
                <i className={cert.icon}></i>
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
