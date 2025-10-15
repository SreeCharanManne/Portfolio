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
    <section id="home" className="hero bg-pattern-1">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{titleText}</h1>
          <h2 className="hero-subtitle">
            Software Engineer @ Amazon Ads | Ex-Nissan, TigerAnalytics
          </h2>
          <p className="hero-description">
            Driven and adaptable software enthusiast with a problem-solving mindset, 
            strong work ethic, and a commitment to collaboration, learning, and growth.
          </p>
          
          {/* Live GitHub Stats */}
          <div className="github-stats">
            <div className="stat-item">
              <span className="stat-value">{githubStats.repos}</span>
              <span className="stat-label">Repositories</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{githubStats.followers}</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{githubStats.stars}</span>
              <span className="stat-label">Total Stars</span>
            </div>
          </div>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </button>
            <button 
              className="btn btn-accent"
              onClick={scrollToTerminal}
            >
              <i className="fas fa-terminal"></i> Open Terminal
            </button>
          </div>
          
          <div className="hero-social">
            <a 
              href="https://www.linkedin.com/in/sree-charan-manne/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="https://github.com/SreeCharanManne" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="profile-card">
            <div className="profile-info">
              <h3>Software Engineer</h3>
              <p>Austin, Texas</p>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">6</span>
                  <span className="stat-label">Companies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
