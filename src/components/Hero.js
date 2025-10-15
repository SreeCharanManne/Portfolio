import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [githubStats, setGithubStats] = useState({
    repos: '--',
    followers: '--',
    stars: '--'
  });
  const [titleText, setTitleText] = useState('');
  const fullTitle = 'Sreecharan Manne';

  // Typewriter effect for title
  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullTitle.length) {
        setTitleText(fullTitle.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 80);
      }
    };
    
    const timer = setTimeout(typeWriter, 500);
    return () => clearTimeout(timer);
  }, []);

  // Fetch GitHub stats
  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const username = 'SreeCharanManne';
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos`)
        ]);
        
        if (userResponse.ok && reposResponse.ok) {
          const userData = await userResponse.json();
          const reposData = await reposResponse.json();
          
          const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);
          
          // Animate counters
          animateValue('repos', userData.public_repos);
          animateValue('followers', userData.followers);
          animateValue('stars', totalStars);
        }
      } catch (error) {
        console.log('GitHub API rate limit or network error');
        // Fallback values
        setGithubStats({
          repos: '15+',
          followers: '10+',
          stars: '25+'
        });
      }
    };

    const animateValue = (key, endValue) => {
      let startValue = 0;
      const duration = 2000;
      const startTime = performance.now();
      
      const updateValue = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(startValue + (endValue - startValue) * progress);
        setGithubStats(prev => ({
          ...prev,
          [key]: current + (endValue > 0 ? '+' : '')
        }));
        
        if (progress < 1) {
          requestAnimationFrame(updateValue);
        }
      };
      
      requestAnimationFrame(updateValue);
    };

    fetchGitHubStats();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTerminal = () => {
    const element = document.getElementById('terminal');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-main">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="status-dot"></span>
              Available for opportunities
            </div>
            
            <h1 className="hero-title">{titleText}</h1>
            <h2 className="hero-role">Software Engineer</h2>
            <p className="hero-company">Amazon Ads • Austin, Texas</p>
            
            <p className="hero-description">
              Building scalable solutions and driving innovation in advertising technology. 
              Passionate about clean code, system design, and collaborative development.
            </p>
            
            <div className="hero-actions">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                <i className="fas fa-envelope"></i>
                Contact Me
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('projects')}
              >
                <i className="fas fa-code"></i>
                View Work
              </button>
              <button 
                className="btn btn-terminal"
                onClick={scrollToTerminal}
              >
                <i className="fas fa-terminal"></i>
                Terminal
              </button>
            </div>
          </div>
          
          <div className="hero-sidebar">
            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-avatar">
                  <div className="avatar-placeholder">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="status-indicator"></div>
                </div>
                <div className="profile-info">
                  <h3>Sreecharan Manne</h3>
                  <p className="profile-title">Software Engineer</p>
                  <p className="profile-location">
                    <i className="fas fa-map-marker-alt"></i>
                    Austin, TX
                  </p>
                </div>
              </div>
              
              <div className="profile-stats">
                <div className="stat-row">
                  <div className="stat-item">
                    <span className="stat-value">{githubStats.repos}</span>
                    <span className="stat-label">Repositories</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">{githubStats.followers}</span>
                    <span className="stat-label">Followers</span>
                  </div>
                </div>
                <div className="stat-row">
                  <div className="stat-item">
                    <span className="stat-value">{githubStats.stars}</span>
                    <span className="stat-label">Stars</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">4+</span>
                    <span className="stat-label">Years Exp</span>
                  </div>
                </div>
              </div>
              
              <div className="profile-social">
                <a 
                  href="https://github.com/SreeCharanManne" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/sree-charan-manne/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <i className="fab fa-linkedin"></i>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
