import React from 'react';
import './Experience.css';

const Experience = () => {
    const timelineItems = [
        {
            title: "Software Development Engineer, Amazon Ads",
            company: "Amazon",
            date: "June 2024 - Present (1 year 5 months)",
            location: "Austin, Texas, United States",
            type: "work"
        },
        {
            title: "ISSC Client Service Assistant",
            company: "Arizona State University",
            date: "October 2022 - May 2024 (1 year 8 months)",
            location: "United States",
            type: "work"
        },
        {
            title: "Software Engineer",
            company: "Nissan Motor Corporation",
            date: "May 2023 - March 2024 (11 months)",
            location: "California, United States",
            type: "work"
        },
        {
            title: "Software Engineer",
            company: "Tiger Analytics",
            date: "August 2021 - July 2022 (1 year)",
            location: "Chennai, Tamil Nadu, India",
            type: "work"
        },
        {
            title: "Software Intern",
            company: "Tiger Analytics",
            date: "February 2021 - July 2021 (6 months)",
            location: "Chennai, Tamil Nadu, India",
            type: "work"
        },
        {
            title: "Software Engineer Intern",
            company: "CodeMania",
            date: "January 2020 - March 2020 (3 months)",
            location: "Hyderabad, Telangana, India",
            type: "work"
        },
        {
            title: "Research Assistant",
            company: "SASTRA University",
            date: "January 2019 - April 2019 (4 months)",
            location: "Chennai, Tamil Nadu, India",
            description: "Privacy Preserving Fingerprint Authentication at the Cloud Server for eHealth Services: Worked on building a steganography algorithm using Matlab which uses SHA-256 for encryption. The objective of this paper is to design a scheme to carry out the fingerprint match at the cloud server that will not compromise the fingerprints.",
            type: "work"
        },
        {
            title: "Master's degree, Computer Science",
            company: "Arizona State University",
            date: "2022 - 2024",
            description: "Engineering Graduate Scholarship recipient. Focused on advanced software engineering and data science.",
            type: "education"
        },
        {
            title: "Bachelor of Technology - BTech, Computer Science",
            company: "Shanmugha Arts, Science, Technology and Research Academy",
            date: "2017 - 2021",
            description: "Dean's Merit Scholarship Awardee for 2019-20 and 2020-21. Indian Central Government Scholarship recipient for being in Top 10% in CBSE XI and XII examination.",
            type: "education"
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Experience & Education</h2>
                <div className="timeline">
                    {timelineItems.map((item, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <h3>{item.title}</h3>
                                <h4>{item.company}</h4>
                                <p className="timeline-date">{item.date}</p>
                                {item.location && <p>{item.location}</p>}
                                {item.description && <p>{item.description}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
