import React from 'react';
import './Experience.css';
import { useReveal } from '../hooks/useReveal';

const Education = () => {
  const eduRef = useReveal();
  const edu = [
    { deg: 'M.S. in Computer Science', school: 'Arizona State University', period: '2022 — 2024', note: 'Engineering Graduate Scholarship' },
    { deg: 'B.Tech in Computer Science', school: 'SASTRA University', period: '2017 — 2021', note: "Dean's Merit Scholarship" },
  ];

  return (
    <section id="education" className="exp">
      <div className="exp__wrap">
        <div ref={eduRef} className="reveal">
          <p className="label">Education</p>
          <div className="exp__list">
            {edu.map((e, i) => (
              <div key={i} className="exp__item">
                <div className="exp__header">
                  <div><h3 className="exp__title">{e.deg}</h3><p className="exp__co">{e.school}</p></div>
                  <span className="exp__period">{e.period}</span>
                </div>
                <p className="exp__desc">{e.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const ref = useReveal();
  const jobs = [
    { title: 'Software Development Engineer', co: 'Amazon ', loc: 'Austin, TX', period: 'Jun 2024 — Present', desc: 'Engineered and deployed multi-format ad units (REC, OLV, ABC) for Alexa and IMDb, powering an advertising ecosystem generating $2B in annual revenue.' },
    { title: 'Software Engineer', co: 'Nissan Motor Corporation', loc: 'California', period: 'May 2023 — Mar 2024', desc: 'Developed software systems for automotive engineering.' },
    { title: 'Software Engineer', co: 'Tiger Analytics', loc: 'Chennai, India', period: 'Aug 2021 — Jul 2022', desc: 'Built data pipelines and analytics applications.' },
    { title: 'Software Intern', co: 'Tiger Analytics', loc: 'Chennai, India', period: 'Feb 2021 — Jul 2021', desc: 'Contributed to analytics platform development.' },
  ];

  return (
    <section id="experience" className="exp">
      <div className="exp__wrap">
        <div ref={ref} className="reveal">
          <p className="label">Experience</p>
          <div className="exp__list">
            {jobs.map((j, i) => (
              <div key={i} className="exp__item">
                <div className="exp__header">
                  <div><h3 className="exp__title">{j.title}</h3><p className="exp__co">{j.co} · {j.loc}</p></div>
                  <span className="exp__period">{j.period}</span>
                </div>
                <p className="exp__desc">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Experience, Education };
