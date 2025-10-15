import React, { useState, useEffect, useRef } from 'react';
import './Terminal.css';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'command', text: 'whoami' },
    { type: 'output', text: 'Software Engineer @ Amazon Ads' },
    { type: 'command', text: 'ls skills/' },
    { type: 'output', text: 'JavaScript  Python  React.js  Machine-Learning  AWS  Docker' },
    { type: 'command', text: 'cat experience.txt' },
    { type: 'output', text: '4+ years of software development experience\nAmazon | Nissan | Tiger Analytics | ASU' }
  ]);
  const inputRef = useRef(null);

  const commands = {
    help: 'Available commands: help, whoami, skills, experience, education, contact, clear, projects',
    whoami: 'Software Engineer @ Amazon Ads',
    skills: 'JavaScript, Python, React.js, Machine Learning, AWS, Docker, MySQL, GCP, Firebase',
    experience: 'Amazon Ads (2024-Present)\nNissan Motor Corporation (2023-2024)\nTiger Analytics (2022-2023)',
    education: 'Master of Science in Computer Science - Arizona State University (2022-2024)\nBachelor of Technology in Computer Science - SASTRA University (2018-2022)',
    contact: 'Email: sreecharanmanne2000@gmail.com\nLinkedIn: linkedin.com/in/sree-charan-manne\nGitHub: github.com/SreeCharanManne',
    projects: 'Multimodel Swine Flu Detector, Portfolio Website, Machine Learning Projects\nType "github" to visit my GitHub profile',
    github: 'Opening GitHub profile...',
    clear: 'CLEAR_TERMINAL'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const command = input.toLowerCase().trim();
    const newHistory = [...history, { type: 'command', text: input }];

    if (command === 'clear') {
      setHistory([]);
    } else if (commands[command]) {
      if (command === 'github') {
        window.open('https://github.com/SreeCharanManne', '_blank');
      }
      newHistory.push({ type: 'output', text: commands[command] });
      setHistory(newHistory);
    } else {
      newHistory.push({ type: 'output', text: `Command not found: ${input}. Type 'help' for available commands.` });
      setHistory(newHistory);
    }

    setInput('');
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [history]);

  return (
    <section id="terminal" className="terminal-section">
      <div className="container">
        <h2 className="section-title">Interactive Terminal</h2>
        <div className="terminal-container">
          <div className="terminal-header">
            <div className="terminal-controls">
              <span className="control close"></span>
              <span className="control minimize"></span>
              <span className="control maximize"></span>
            </div>
            <div className="terminal-title">sreecharan@portfolio:~$</div>
          </div>
          <div className="terminal-body">
            {history.map((item, index) => (
              <div key={index} className={`terminal-line ${item.type}`}>
                {item.type === 'command' ? (
                  <>
                    <span className="prompt">sreecharan@portfolio:~$</span>
                    <span className="command">{item.text}</span>
                  </>
                ) : (
                  <div className="terminal-output">
                    {item.text.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <form onSubmit={handleSubmit} className="terminal-input-form">
              <div className="terminal-line active">
                <span className="prompt">sreecharan@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="command-input"
                  autoComplete="off"
                  spellCheck="false"
                />
                <span className="cursor">|</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
