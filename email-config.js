// EmailJS Configuration
// To set up EmailJS for the contact form:

// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Public Key, Service ID, and Template ID
// 5. Replace the placeholders below with your actual credentials

const EMAIL_CONFIG = {
    PUBLIC_KEY: "ibRyrmlZrMtjzFn6O",
    SERVICE_ID: "service_6p8cw04", 
    TEMPLATE_ID: "template_p8ifdyp"
};


/* 
SETUP INSTRUCTIONS:

1. Create EmailJS Account:
   - Go to https://www.emailjs.com/
   - Sign up for a free account

2. Add Email Service:
   - Go to Email Services
   - Click "Add New Service"
   - Choose Gmail (or your preferred email provider)
   - Connect your sreecharanmanne2000@gmail.com account
   - Note the Service ID

3. Create Email Template:
   - Go to Email Templates
   - Click "Create New Template"
   - Use this template content:

   Subject: New Portfolio Contact Message from {{from_name}}
   
   Body:
   You have received a new message from your portfolio website:
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   
   ---
   This message was sent from your portfolio contact form.

4. Get Public Key:
   - Go to Account > General
   - Copy your Public Key

5. Update Configuration:
   - Replace YOUR_PUBLIC_KEY_HERE with your actual public key
   - Replace YOUR_SERVICE_ID_HERE with your service ID
   - Replace YOUR_TEMPLATE_ID_HERE with your template ID

6. Test the Form:
   - Open your portfolio website
   - Fill out the contact form
   - Check your email for the message

Note: EmailJS free plan allows 200 emails per month, which should be sufficient for a portfolio website.
*/
