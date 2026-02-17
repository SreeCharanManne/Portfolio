import React from 'react';
import './Hero.css';
import photo from '../me.jpeg';

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero__wrap">
      <div className="hero__layout">
        <div className="hero__photo"><img src={photo} alt="Sreecharan Manne" /></div>
        <div className="hero__text">
          <p className="hero__greeting">Hi, I'm</p>
          <h1 className="hero__name">Sreecharan <span className="gradient-text">Manne</span></h1>
          <p className="hero__nickname">You can call me <strong>Charan</strong></p>
          <p className="hero__role">Software Engineer at <strong>Amazon </strong></p>
          <p className="hero__bio">Building scalable systems at the intersection of software engineering, AI, ML, and cloud infrastructure.</p>
          <div className="hero__links">
            <a href="https://github.com/SreeCharanManne" target="_blank" rel="noopener noreferrer" className="hero__link"><i className="fab fa-github" /> GitHub</a>
            <a href="https://linkedin.com/in/sree-charan-manne" target="_blank" rel="noopener noreferrer" className="hero__link"><i className="fab fa-linkedin" /> LinkedIn</a>
            <a href="mailto:sreecharanmanne2000@gmail.com" className="hero__link"><i className="fas fa-envelope" /> Email</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;