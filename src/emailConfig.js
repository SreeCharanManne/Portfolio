// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and get your Public Key
// 3. Create an email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Replace the values below with your actual EmailJS credentials

export const emailConfig = {
  serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  templateId: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  publicKey: 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
};

// Example template variables for EmailJS:
// {{from_name}} - sender's name
// {{from_email}} - sender's email
// {{message}} - message content
// {{to_name}} - your name (recipient)
