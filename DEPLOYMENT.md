# Deployment Guide

This guide covers deploying the Arrested Machine portfolio website to various hosting platforms.

## 📋 Pre-deployment Checklist

Before deploying, ensure:

- [ ] All environment variables are properly configured
- [ ] Build process completes without errors (`npm run build`)
- [ ] All assets are optimized and compressed
- [ ] SEO meta tags are properly set in `index.html`
- [ ] Analytics tracking is configured (if required)
- [ ] Domain name is ready (if using custom domain)

## 🚀 Deployment Platforms

### Vercel (Recommended)

Vercel offers the best experience for React/Vite applications with zero-configuration deployment.

#### Automatic Deployment (GitHub Integration)

1. **Connect Repository**
   ```bash
   # Push your code to GitHub
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import `arrested_figma` repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Configuration** (Auto-detected)
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

#### Manual Deployment (Vercel CLI)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Production deployment
vercel --prod
```

#### Custom Domain Setup
```bash
# Add custom domain
vercel domains add your-domain.com

# Configure domain in project settings
vercel domains ls
```

### Netlify

Great alternative with excellent form handling and edge functions.

#### Automatic Deployment

1. **Connect Repository**
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect GitHub and select repository

2. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Environment Variables** (if needed)
   - Go to Site settings > Environment variables
   - Add any required environment variables

#### Manual Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build and deploy
npm run build
netlify deploy --dir=dist

# Production deployment
netlify deploy --dir=dist --prod
```

### GitHub Pages

Free hosting for static sites directly from GitHub repository.

#### Setup

1. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select source: "GitHub Actions"

2. **Create GitHub Action**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: ["main"]
   
   permissions:
     contents: read
     pages: write
     id-token: write
   
   concurrency:
     group: "pages"
     cancel-in-progress: true
   
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         - name: Setup Node
           uses: actions/setup-node@v3
           with:
             node-version: 18
             cache: npm
         - name: Install dependencies
           run: npm ci
         - name: Build
           run: npm run build
         - name: Setup Pages
           uses: actions/configure-pages@v3
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v2
           with:
             path: ./dist
   
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v2
   ```

3. **Configure Base Path** (if using subpath)
   Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/arrested_figma/', // Replace with your repo name
     // ... other config
   })
   ```

### Firebase Hosting

Google's hosting platform with global CDN and easy integration.

#### Setup

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init hosting

# Select or create project
# Choose 'dist' as public directory
# Configure as single-page app: Yes
# Set up automatic builds and deploys with GitHub: Yes (optional)
```

#### Deploy

```bash
# Build and deploy
npm run build
firebase deploy

# Deploy to specific project
firebase deploy --project your-project-id
```

## 🔧 Configuration Files

### Environment Variables

Create `.env.production` for production-specific variables:

```bash
# Analytics
VITE_GA_TRACKING_ID=your-ga-tracking-id

# Contact Form (if implemented)
VITE_CONTACT_FORM_URL=your-form-endpoint

# Domain
VITE_SITE_URL=https://your-domain.com
```

### Build Optimization

The project is already optimized with:

- **Code Splitting**: Vendor and component chunks
- **Asset Optimization**: Images and fonts are optimized
- **Bundle Analysis**: Run `npm run build` to see bundle sizes
- **Caching**: Static assets have proper cache headers

## 🌐 Custom Domain Setup

### DNS Configuration

For custom domains, configure these DNS records:

**For Vercel:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61
```

**For Netlify:**
```
Type: CNAME
Name: www
Value: your-site-name.netlify.app

Type: A
Name: @
Value: 75.2.60.5
```

### SSL Certificates

All recommended platforms provide automatic SSL certificates:
- Vercel: Automatic with Let's Encrypt
- Netlify: Automatic with Let's Encrypt
- GitHub Pages: Automatic
- Firebase: Automatic with Google-managed certificates

## 📊 Analytics Setup

### Google Analytics 4

1. Create GA4 property
2. Get tracking ID
3. Add to environment variables
4. Uncomment analytics code in `index.html`

### Performance Monitoring

Consider adding:
- **Vercel Analytics**: Built-in performance monitoring
- **Lighthouse CI**: Automated performance testing
- **Sentry**: Error tracking and performance monitoring

## 🔍 SEO Optimization

### Meta Tags
Update `index.html` with:
- Proper title and description
- Open Graph tags
- Twitter Card tags
- Canonical URLs

### Sitemap
Generate sitemap.xml:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-domain.com</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### robots.txt
Create `public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://your-domain.com/sitemap.xml
```

## 🚨 Troubleshooting

### Common Issues

**Build Failures:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Asset Loading Issues:**
- Check asset paths are relative
- Verify Figma assets are properly imported
- Ensure base URL is correctly configured

**Performance Issues:**
- Optimize images (use WebP format)
- Implement lazy loading for non-critical content
- Check bundle size with `npm run build`

### Debugging

```bash
# Local production preview
npm run build
npm run preview

# Check for TypeScript errors
npm run type-check

# Lint code
npm run lint
```

## 📞 Support

If you encounter deployment issues:

1. Check platform-specific documentation
2. Review build logs for errors
3. Test locally with production build
4. Check GitHub issues for similar problems

Happy deploying! 🎉