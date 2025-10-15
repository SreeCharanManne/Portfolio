import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Multimodel Swine Flu Detector",
            description: "Advanced machine learning system using 5 different algorithms (SVM, NB, DT, KNN, RF) to predict swine flu with 95% accuracy. Features model comparison and automatic best model selection.",
            githubUrl: "https://github.com/SreeCharanManne/Swineflu_pediction_using_ML_GCP",
            technologies: ["Machine Learning", "Python", "GCP", "Data Science"]
        },
        {
            title: "Dining Management System",
            description: "University dining management system with attendance-based fee calculation. Built with modern web technologies and real-time database integration.",
            githubUrl: "https://github.com/SreeCharanManne/SoftwareProject.git",
            technologies: ["HTML/CSS", "Bootstrap", "Firebase", "JavaScript"]
        },
        {
            title: "NewsApp with Covid-19 Tracker",
            description: "Real-time news application integrated with Covid-19 case tracking worldwide. Deployed on Heroku with responsive design and live data updates.",
            githubUrl: "https://github.com/SreeCharanManne/Covid-19-Tracker",
            technologies: ["React.js", "API Integration", "Heroku", "Responsive Design"]
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-header">
                                <h3>{project.title}</h3>
                                <a 
                                    href={project.githubUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="project-link"
                                >
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
