import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig as EMAIL_CONFIG } from '../emailConfig';
import { useReveal } from '../hooks/useReveal';
import './Contact.css';

const Contact = () => {
  const ref = useReveal();
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    emailjs.sendForm(EMAIL_CONFIG.serviceId, EMAIL_CONFIG.templateId, form.current, EMAIL_CONFIG.publicKey)
      .then(() => { setStatus('success'); setSending(false); form.current.reset(); })
      .catch(() => { setStatus('error'); setSending(false); });
  };

  return (
    <section id="contact" className="contact">
      <div ref={ref} className="contact__wrap reveal">
        <p className="label">Contact</p>
        <div className="contact__grid">
          <div className="contact__info">
            <p className="contact__text">I'm always open to new opportunities and conversations. Feel free to reach out.</p>
            <div className="contact__links">
              <a href="mailto:sreecharanmanne2000@gmail.com"><i className="fas fa-envelope" /> sreecharanmanne2000@gmail.com</a>
              <a href="https://linkedin.com/in/sree-charan-manne" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /> LinkedIn</a>
              <a href="https://github.com/SreeCharanManne" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /> GitHub</a>
              <span className="contact__loc"><i className="fas fa-map-marker-alt" /> Austin, Texas</span>
            </div>
          </div>
          <form ref={form} onSubmit={handleSubmit} className="contact__form">
            <input name="user_name" type="text" placeholder="Name" required />
            <input name="user_email" type="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" rows="5" required />
            <button type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send Message'}</button>
            {status === 'success' && <p className="contact__status contact__status--ok">Message sent successfully!</p>}
            {status === 'error' && <p className="contact__status contact__status--err">Something went wrong. Try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;