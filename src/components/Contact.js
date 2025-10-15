import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../emailConfig';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Check if EmailJS is configured
      if (emailConfig.serviceId === 'service_6p8cw04' || 
          emailConfig.templateId === 'template_p8ifdyp' || 
          emailConfig.publicKey === 'YOUR_PUBLIC_KEY') {
        // EmailJS not configured, show helpful message
        setSubmitStatus('config');
        return;
      }

      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Sree Charan Manne'
      };

      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always interested in discussing new opportunities, innovative projects, and collaborations. Feel free to reach out!</p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Austin, Texas, United States</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:sreecharanmanne2000@gmail.com">sreecharanmanne2000@gmail.com</a>
              </div>
              <div className="contact-item">
                <i className="fab fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/sree-charan-manne/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
              </div>
              <div className="contact-item">
                <i className="fab fa-github"></i>
                <a href="https://github.com/SreeCharanManne" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <div className="status-message success">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="status-message error">
                  Failed to send message. Please try again or contact me directly.
                </div>
              )}
              {submitStatus === 'config' && (
                <div className="status-message warning">
                  EmailJS is not configured yet. Please update the configuration in src/emailConfig.js or contact me directly at sreecharanmanne2000@gmail.com
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
