import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import { Experience, Education } from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terminal from './components/Terminal';

function App() {
  return (
    <div className="App">
      {/* Floating background decorations */}
      <div className="bg-decor">
        <div className="bg-decor__orb bg-decor__orb--1" />
        <div className="bg-decor__orb bg-decor__orb--2" />
        <div className="bg-decor__orb bg-decor__orb--3" />
        <div className="bg-decor__orb bg-decor__orb--4" />
        <div className="bg-decor__orb bg-decor__orb--5" />
        <div className="bg-decor__shape bg-decor__shape--ring1" />
        <div className="bg-decor__shape bg-decor__shape--ring2" />
        <div className="bg-decor__shape bg-decor__shape--square1" />
        <div className="bg-decor__shape bg-decor__shape--square2" />
        <div className="bg-decor__shape bg-decor__shape--dot1" />
        <div className="bg-decor__shape bg-decor__shape--dot2" />
        <div className="bg-decor__shape bg-decor__shape--dot3" />
        <div className="bg-decor__shape bg-decor__shape--line1" />
        <div className="bg-decor__shape bg-decor__shape--line2" />
        <div className="bg-decor__shape bg-decor__shape--cross1" />
        <div className="bg-decor__shape bg-decor__shape--cross2" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <div className="divider"><hr /></div>
        <About />
        <div className="divider"><hr /></div>
        <Experience />
        <div className="divider"><hr /></div>
        <Education />
        <div className="divider"><hr /></div>
        <Projects />
        <div className="divider"><hr /></div>
        <Certifications />
        <div className="divider"><hr /></div>
        <Awards />
        <div className="divider"><hr /></div>
        <Terminal />
        <div className="divider"><hr /></div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;