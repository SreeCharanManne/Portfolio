import React from 'react';
import './About.css';
import { useReveal } from '../hooks/useReveal';

const About = () => {
  const ref = useReveal();
  const tagsRef = useReveal();
  const skills = ['JavaScript','Python','React.js','HTML/CSS','Machine Learning','Data Science','Docker','MySQL','Firebase','Google Cloud','AWS','Bootstrap'];

  return (
    <section id="about" className="about">
      <div className="about__wrap">
        <div ref={ref} className="reveal">
          <p className="label">About</p>
          <div className="about__body">
            <p>I'm a Software Engineer at <strong>Amazon Ads</strong> in Austin, Texas, focused on building reliable, scalable systems. My background spans full-stack development, data science, and AI.</p>
            <p>Previously, I worked at <strong>Nissan Motor Corporation</strong> and <strong>Tiger Analytics</strong>, shipping production software and data pipelines. I hold a Master's in Computer Science from <strong>Arizona State University</strong> as an Engineering Graduate Scholar.</p>
          </div>
        </div>
        <div ref={tagsRef} className="reveal">
          <p className="about__skills-label">Technologies</p>
          <div className="about__tags reveal-children visible">
            {skills.map(s => <span key={s} className="tag">{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;