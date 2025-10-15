# React Portfolio - Sreecharan Manne

A modern, responsive portfolio website built with React showcasing my experience as a Software Engineer at Amazon Ads.

## 🚀 Live Demo

Visit the live portfolio: [https://sreecharanmanne.github.io/Portfolio](https://sreecharanmanne.github.io/Portfolio)

## 📋 Features

- **Responsive Design**: Optimized for all device sizes
- **Interactive Terminal**: Command-line interface for exploring portfolio
- **Dynamic Content**: Real-time GitHub stats and project information
- **Contact Form**: Integrated with EmailJS for direct messaging
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

- **Frontend**: React 18, CSS3, HTML5
- **Deployment**: GitHub Pages with GitHub Actions
- **Email Service**: EmailJS
- **Icons**: Font Awesome
- **Build Tool**: Create React App

## 📁 Project Structure

```
portfolio-react/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.js & Navbar.css
│   │   ├── Hero.js & Hero.css
│   │   ├── About.js & About.css
│   │   ├── Experience.js & Experience.css
│   │   ├── Projects.js & Projects.css
│   │   ├── Certifications.js & Certifications.css
│   │   ├── Awards.js & Awards.css
│   │   ├── Terminal.js & Terminal.css
│   │   ├── Contact.js & Contact.css
│   │   └── Footer.js & Footer.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .github/workflows/
│   └── deploy.yml
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SreeCharanManne/Portfolio.git
cd Portfolio/portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run deploy` - Deploys the app to GitHub Pages

## 🌐 Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions. The deployment happens automatically when you push to the main branch.

### Manual Deployment

To deploy manually:

```bash
npm run deploy
```

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "Deploy from a branch"
4. Select "gh-pages" branch
5. Save the settings

## 📧 Contact Form Configuration

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the EmailJS configuration in `src/components/Contact.js`

## 🎨 Customization

### Colors and Themes

The portfolio uses CSS custom properties for easy theming. Update the variables in `src/App.css`:

```css
:root {
  --primary-color: #64ffda;
  --secondary-color: #8892b0;
  --background-color: #0a192f;
  --surface-color: #112240;
}
```

### Content Updates

- **Personal Info**: Update `src/components/Hero.js` and `src/components/About.js`
- **Experience**: Modify the experience array in `src/components/Experience.js`
- **Projects**: Update the projects array in `src/components/Projects.js`
- **Certifications**: Edit the certifications array in `src/components/Certifications.js`
- **Awards**: Modify the awards array in `src/components/Awards.js`

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/SreeCharanManne/Portfolio/issues).

## 📞 Contact

- **Email**: sreecharan.manne@gmail.com
- **LinkedIn**: [Sreecharan Manne](https://linkedin.com/in/sreecharan-manne)
- **GitHub**: [SreeCharanManne](https://github.com/SreeCharanManne)

---

⭐ Star this repository if you found it helpful!
