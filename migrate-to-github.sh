#!/bin/bash

echo "🚀 Setting up GitHub repository for Arrested Machine..."

# Check if we're already in a git repository
if [[ -d ".git" ]]; then
    echo "📁 Git repository already exists"
else
    echo "📁 Initializing new git repository..."
    git init
fi

# Add all files to staging
echo "📄 Adding all files to git..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "🎨 Initial commit: Arrested Machine portfolio

- Complete professional portfolio website
- Four full-screen sections (Hero, Cases, About, Process)
- Motion animations and smooth scrolling
- Professional component library
- Mobile responsive design
- Figma design imports
- Ready for deployment"

# Check if remote already exists
if git remote get-url origin >/dev/null 2>&1; then
    echo "🔗 Remote origin already exists"
else
    echo "🔗 Adding GitHub remote..."
    echo "Enter your GitHub repository URL (e.g., https://github.com/username/arrested_figma.git):"
    read repo_url
    git remote add origin "$repo_url"
fi

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Successfully pushed to GitHub!"
echo ""
echo "🌐 Next steps:"
echo "1. Visit your GitHub repository"
echo "2. Go to Vercel.com or Netlify.com"
echo "3. Connect your GitHub repo"
echo "4. Deploy with one click!"
echo ""
echo "🎉 Your professional portfolio is now live on GitHub!"