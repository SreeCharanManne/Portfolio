# GitHub Pages Deployment Guide

This guide will help you deploy your React portfolio to GitHub Pages.

## 🔧 Prerequisites

1. **GitHub Repository**: Your code should be in a GitHub repository
2. **Node.js**: Ensure Node.js (v18+) is installed locally
3. **Git**: Git should be configured with your GitHub credentials

## 📋 Step-by-Step Deployment

### 1. Repository Settings

1. Go to your GitHub repository: `https://github.com/SreeCharanManne/Portfolio`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select "Deploy from a branch"
5. Select **gh-pages** branch (this will be created automatically)
6. Click **Save**

### 2. Enable GitHub Actions

1. In your repository, go to **Actions** tab
2. If prompted, click **"I understand my workflows, go ahead and enable them"**
3. The workflow file is already configured in `.github/workflows/deploy.yml`

### 3. Automatic Deployment

The deployment is now automated! Every time you push to the `main` or `master` branch:

1. GitHub Actions will automatically:
   - Install dependencies
   - Build the React app
   - Deploy to GitHub Pages

2. Your site will be available at: `https://sreecharanmanne.github.io/Portfolio`

### 4. Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Navigate to the portfolio-react directory
cd portfolio-react

# Install dependencies (if not already done)
npm install

# Deploy to GitHub Pages
npm run deploy
```

## 🔍 Troubleshooting

### Common Issues

1. **404 Error on GitHub Pages**
   - Ensure the `homepage` field in `package.json` matches your repository URL
   - Check that the repository name is correct in the URL

2. **Build Fails**
   - Check the Actions tab for error details
   - Ensure all dependencies are properly listed in `package.json`
   - Verify Node.js version compatibility

3. **Changes Not Reflecting**
   - Wait 5-10 minutes for GitHub Pages to update
   - Clear browser cache
   - Check if the build completed successfully in Actions

### Checking Deployment Status

1. Go to **Actions** tab in your repository
2. Click on the latest workflow run
3. Check if all steps completed successfully
4. If there are errors, click on the failed step for details

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. In repository **Settings** → **Pages**
2. Enter your custom domain in the **Custom domain** field
3. Add a `CNAME` file to the `public` folder with your domain name
4. Configure DNS settings with your domain provider

## 📊 Monitoring

- **GitHub Actions**: Monitor deployment status
- **GitHub Pages**: Check site availability and performance
- **Analytics**: Consider adding Google Analytics for visitor tracking

## 🔄 Updating Your Portfolio

To update your portfolio:

1. Make changes to your React components
2. Commit and push to the main branch
3. GitHub Actions will automatically rebuild and deploy
4. Changes will be live within 5-10 minutes

## 📞 Support

If you encounter issues:

1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the [GitHub Actions logs](https://github.com/SreeCharanManne/Portfolio/actions)
3. Ensure your repository is public (required for free GitHub Pages)

---

🎉 **Congratulations!** Your React portfolio is now deployed and accessible worldwide!
