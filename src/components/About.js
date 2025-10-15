import React from 'react';
import './About.css';

const About = () => {
    const skills = [
        'JavaScript',
        'Docker Products',
        'MySQL',
        'Python',
        'React.js',
        'HTML/CSS',
        'Machine Learning',
        'Data Science',
        'Firebase',
        'Google Cloud Platform',
        'Bootstrap',
        'Database Management'
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a passionate software engineer currently working at Amazon Ads, with a strong background in 
                            software development, data science, and machine learning. My journey in technology has been 
                            driven by curiosity and a desire to solve complex problems through innovative solutions.
                        </p>
                        <p>
                            With experience spanning from web development to machine learning algorithms, I have worked 
                            at leading companies including Amazon, Nissan Motor Corporation, and Tiger Analytics. I hold a 
                            Master's degree in Computer Science from Arizona State University and have been recognized with 
                            multiple scholarships and awards for academic excellence including Dean's Merit Scholarship and 
                            Indian Central Government Scholarship.
                        </p>
                        <div className="skills">
                            <h3>Technical Skills</h3>
                            <div className="skill-tags">
                                {skills.map((skill, index) => (
                                    <span key={index} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
