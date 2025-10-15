# EmailJS Setup Instructions

This portfolio includes EmailJS integration for the contact form. Follow these steps to set it up:

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Portfolio Contact Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (User ID)
3. Copy this key

## 5. Update Configuration

1. Open `src/emailConfig.js`
2. Replace the placeholder values:

```javascript
export const emailConfig = {
  serviceId: 'your_actual_service_id',
  templateId: 'your_actual_template_id', 
  publicKey: 'your_actual_public_key'
};
```

## 6. Test the Contact Form

1. Build and run your portfolio
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Template Variables

The following variables are automatically sent to your EmailJS template:

- `{{from_name}}` - Sender's name from the form
- `{{from_email}}` - Sender's email from the form  
- `{{message}}` - Message content from the form
- `{{to_name}}` - Set to "Sree Charan Manne" (you can change this in Contact.js)

## Troubleshooting

- **Configuration Error**: Make sure all three values (serviceId, templateId, publicKey) are updated
- **Email Not Received**: Check your spam folder and verify your email service setup
- **Form Errors**: Check the browser console for detailed error messages

## Security Note

The EmailJS public key is safe to include in your frontend code - it's designed to be public. However, make sure to set up proper email service authentication in your EmailJS dashboard.
