import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Sreecharan Manne</h3>
            <p>Software Engineer passionate about creating innovative solutions and building impactful technology.</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/sree-charan-manne/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/SreeCharanManne" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:sreecharanmanne2000@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>More</h4>
              <ul>
                <li><a href="#certifications">Certifications</a></li>
                <li><a href="#awards">Awards</a></li>
                <li><a href="#terminal">Terminal</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Sreecharan Manne. All rights reserved.</p>
          </div>
          <div className="footer-tech">
            <p>Built with React.js & ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
