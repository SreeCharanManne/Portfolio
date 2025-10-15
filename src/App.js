import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Awards from './components/Awards';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkTheme(false);
    }

    // Set loaded state
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'} ${isLoaded ? 'loaded' : ''}`}>
      {!isLoaded && (
        <div className="loading-screen">
          <div className="loading-content">Loading...</div>
        </div>
      )}
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Awards />
        <Terminal />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
