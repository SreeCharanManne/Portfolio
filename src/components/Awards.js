import React from 'react';
import './Awards.css';
import { useReveal } from '../hooks/useReveal';

const Awards = () => {
  const ref = useReveal();
  const awards = [
    { title: 'Engineering Graduate Scholarship', org: 'Arizona State University', year: '2022' },
    { title: "Dean's Merit Scholarship", org: 'SASTRA University', year: '2019 — 2021' },
    { title: 'Indian Central Government Scholarship', org: 'Government of India', year: '2018 — 2022' },
    { title: 'Academic Excellence Award', org: 'SASTRA University', year: '2021' },
  ];

  return (
    <section id="awards" className="awards">
      <div className="awards__wrap">
        <p className="label">Awards</p>
        <div ref={ref} className="awards__list reveal-children">
          {awards.map((a, i) => (
            <div key={i} className="awards__item">
              <div><p className="awards__title">{a.title}</p><p className="awards__org">{a.org}</p></div>
              <span className="awards__year">{a.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;