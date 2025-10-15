import React from 'react';
import './Awards.css';

const Awards = () => {
  const awards = [
    {
      title: "Engineering Graduate Scholarship",
      organization: "Arizona State University",
      date: "July 2022",
      icon: "fas fa-trophy"
    },
    {
      title: "Dean's Merit Scholarship",
      organization: "SASTRA",
      date: "2019-20, 2020-21",
      icon: "fas fa-medal"
    },
    {
      title: "Indian Central Government Scholarship",
      organization: "Government of India",
      date: "2018-2022",
      icon: "fas fa-award"
    },
    {
      title: "Academic Excellence Award",
      organization: "SASTRA University",
      date: "2021",
      icon: "fas fa-star"
    }
  ];

  return (
    <section id="awards" className="awards">
      <div className="container">
        <h2 className="section-title">Awards & Recognition</h2>
        <div className="awards-grid">
          {awards.map((award, index) => (
            <div key={index} className="award-item">
              <div className="award-icon">
                <i className={award.icon}></i>
              </div>
              <div className="award-content">
                <h3>{award.title}</h3>
                <p>{award.organization} • {award.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
