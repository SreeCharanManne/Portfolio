// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .cert-card, .award-item, .timeline-item');
    animateElements.forEach(el => observer.observe(el));
});

// Initialize EmailJS when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key from config
    if (typeof emailjs !== 'undefined' && typeof EMAIL_CONFIG !== 'undefined') {
        emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
        console.log('EmailJS initialized successfully');
    } else {
        console.error('EmailJS or EMAIL_CONFIG not found');
    }
});

// Contact form handling with EmailJS
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Prepare form submission
            const submitBtn = this.querySelector('.btn-primary');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Send email using EmailJS
            const templateParams = {
                from_name: name,
                from_email: email,
                message: message,
                to_email: 'sreecharanmanne2000@gmail.com',
                reply_to: email
            };
            
            // Use EmailJS to send the email with your configuration
            if (typeof emailjs !== 'undefined' && typeof EMAIL_CONFIG !== 'undefined') {
                emailjs.send(EMAIL_CONFIG.SERVICE_ID, EMAIL_CONFIG.TEMPLATE_ID, templateParams)
                    .then(function(response) {
                        console.log('Email sent successfully:', response);
                        alert('Thank you for your message! I\'ll get back to you soon.');
                        contactForm.reset();
                    })
                    .catch(function(error) {
                        console.error('Email sending failed:', error);
                        console.error('Error details:', error);
                        alert('Sorry, there was an error sending your message. Please try again or contact me directly at sreecharanmanne2000@gmail.com');
                    })
                    .finally(function() {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    });
            } else {
                alert('Email service is not available. Please contact me directly at sreecharanmanne2000@gmail.com');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Skills animation on scroll
const skillTags = document.querySelectorAll('.skill-tag');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.5 });

// Initialize skills animation
document.addEventListener('DOMContentLoaded', () => {
    skillTags.forEach(tag => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(20px)';
        tag.style.transition = 'all 0.5s ease';
        skillsObserver.observe(tag);
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    updateCounter();
}

// Initialize counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                if (number) {
                    animateCounter(stat, number);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading animation
const loadingStyles = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    body:not(.loaded)::after {
        content: 'Loading...';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
        z-index: 10000;
        animation: pulse 1.5s ease-in-out infinite;
    }
    
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }
`;

// Inject loading styles
const styleSheet = document.createElement('style');
styleSheet.textContent = loadingStyles;
document.head.appendChild(styleSheet);

// Add active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active navigation
const navStyles = `
    .nav-link.active {
        color: #2563eb !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;

const navStyleSheet = document.createElement('style');
navStyleSheet.textContent = navStyles;
document.head.appendChild(navStyleSheet);

// Particles Animation System
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        this.init();
        this.animate();
        this.setupEventListeners();
    }

    init() {
        this.resize();
        this.createParticles();
    }

    resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }

    createParticles() {
        const particleCount = Math.min(100, Math.floor(this.canvas.width * this.canvas.height / 15000));
        this.particles = [];
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2,
                color: `hsl(${Math.random() * 60 + 240}, 70%, 60%)`
            });
        }
    }

    setupEventListeners() {
        window.addEventListener('resize', () => this.resize());
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach((particle, index) => {
            // Mouse interaction
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const force = (100 - distance) / 100;
                particle.vx += dx * force * 0.001;
                particle.vy += dy * force * 0.001;
            }
            
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Boundary check
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fill();
            
            // Draw connections
            this.particles.slice(index + 1).forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 80) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(otherParticle.x, otherParticle.y);
                    this.ctx.strokeStyle = particle.color;
                    this.ctx.globalAlpha = (80 - distance) / 80 * 0.2;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            });
        });
        
        this.ctx.globalAlpha = 1;
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize particles
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        new ParticleSystem(canvas);
    }
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-btn');
let isDarkTheme = true;

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        isDarkTheme = !isDarkTheme;
        document.body.classList.toggle('light-theme', !isDarkTheme);
        
        const icon = themeToggle.querySelector('i');
        if (isDarkTheme) {
            icon.className = 'fas fa-moon';
        } else {
            icon.className = 'fas fa-sun';
        }
        
        // Save theme preference
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        themeToggle.click();
    }
}

// GitHub Stats Fetcher
async function fetchGitHubStats() {
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
            animateValue('github-repos', 0, userData.public_repos, 2000);
            animateValue('github-followers', 0, userData.followers, 2000);
            animateValue('github-stars', 0, totalStars, 2000);
        }
    } catch (error) {
        console.log('GitHub API rate limit or network error');
        // Fallback values
        document.getElementById('github-repos').textContent = '15+';
        document.getElementById('github-followers').textContent = '10+';
        document.getElementById('github-stars').textContent = '25+';
    }
}

function animateValue(id, start, end, duration) {
    const element = document.getElementById(id);
    if (!element) return;
    
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current + (end > 0 ? '+' : '');
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Initialize GitHub stats
document.addEventListener('DOMContentLoaded', fetchGitHubStats);

// Interactive Terminal
class InteractiveTerminal {
    constructor() {
        this.commands = {
            help: () => 'Available commands: whoami, ls, cat, clear, skills, experience, contact, projects',
            whoami: () => 'Software Engineer @ Amazon Ads\nPassionate about ML, Web Development, and Problem Solving',
            ls: () => 'skills/  experience/  projects/  contact/  awards/',
            'ls skills': () => 'JavaScript  Python  React.js  Machine-Learning  AWS  Docker  MySQL  GCP',
            'cat experience.txt': () => '4+ years of software development experience\nAmazon | Nissan | Tiger Analytics | ASU\nMaster\'s in Computer Science from Arizona State University',
            'cat contact.txt': () => 'Email: sreecharanmanne2000@gmail.com\nLocation: Austin, Texas\nLinkedIn: linkedin.com/in/sree-charan-manne/',
            skills: () => 'Technical Skills:\n• JavaScript, Python, React.js\n• Machine Learning, Data Science\n• AWS, Docker, MySQL, GCP\n• HTML/CSS, Bootstrap, Firebase',
            experience: () => 'Current: Software Development Engineer @ Amazon Ads\nPrevious: Software Engineer @ Nissan Motor Corporation\nEducation: MS Computer Science @ Arizona State University',
            projects: () => 'Featured Projects:\n• Multimodel Swine Flu Detector (95% accuracy)\n• Dining Management System\n• NewsApp with Covid-19 Tracker',
            contact: () => 'Let\'s connect!\nEmail: sreecharanmanne2000@gmail.com\nLinkedIn: linkedin.com/in/sree-charan-manne/\nGitHub: github.com/SreeCharanManne',
            clear: () => 'CLEAR'
        };
        
        this.initTerminal();
    }
    
    initTerminal() {
        const commandInput = document.getElementById('command-input');
        if (!commandInput) return;
        
        commandInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const command = commandInput.textContent.trim();
                this.executeCommand(command);
                commandInput.textContent = '';
            }
        });
    }
    
    executeCommand(command) {
        const terminalBody = document.getElementById('terminal-body');
        if (!terminalBody) return;
        
        // Add command line
        const commandLine = document.createElement('div');
        commandLine.className = 'terminal-line';
        commandLine.innerHTML = `<span class="prompt">sreecharan@portfolio:~$</span> <span class="command">${command}</span>`;
        
        // Remove active class from current line
        const activeLine = terminalBody.querySelector('.terminal-line.active');
        if (activeLine) {
            activeLine.classList.remove('active');
            activeLine.querySelector('.cursor').remove();
        }
        
        terminalBody.insertBefore(commandLine, activeLine);
        
        // Execute command
        const output = this.commands[command.toLowerCase()] || (() => `Command not found: ${command}. Type 'help' for available commands.`);
        const result = output();
        
        if (result === 'CLEAR') {
            // Clear terminal except for the active input line
            const lines = terminalBody.querySelectorAll('.terminal-line:not(.active)');
            lines.forEach(line => line.remove());
            
            const outputs = terminalBody.querySelectorAll('.terminal-output');
            outputs.forEach(output => output.remove());
        } else {
            // Add output
            const outputDiv = document.createElement('div');
            outputDiv.className = 'terminal-output';
            outputDiv.innerHTML = result.replace(/\n/g, '<br>');
            terminalBody.insertBefore(outputDiv, activeLine);
        }
        
        // Scroll to bottom
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
}

// Initialize terminal
document.addEventListener('DOMContentLoaded', () => {
    new InteractiveTerminal();
});

// Terminal button functionality
document.addEventListener('DOMContentLoaded', () => {
    const terminalBtn = document.getElementById('terminal-btn');
    if (terminalBtn) {
        terminalBtn.addEventListener('click', () => {
            document.getElementById('terminal').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

// Code Tabs Functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const codeTabs = document.querySelectorAll('.code-tab');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Remove active class from all buttons and tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            codeTabs.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked button and corresponding tab
            btn.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
        });
    });
});

// Enhanced 3D Tilt Effect for Cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card, .cert-card, .award-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) rotateX(5deg) rotateY(5deg)';
            card.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
        });
    });
});

// Scroll-triggered animations for new sections
const observeNewSections = () => {
    const newSections = document.querySelectorAll('.terminal-section, .code-showcase');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    newSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });
};

document.addEventListener('DOMContentLoaded', observeNewSections);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus terminal
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const terminalInput = document.getElementById('command-input');
        if (terminalInput) {
            document.getElementById('terminal').scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => terminalInput.focus(), 500);
        }
    }
    
    // Ctrl/Cmd + Shift + T to toggle theme
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        const themeBtn = document.getElementById('theme-btn');
        if (themeBtn) themeBtn.click();
    }
});

// Enhanced loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Stagger animation for hero elements
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .hero-buttons, .github-stats');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.8s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
