# 🚀 Quick Start - GitHub Setup

## TL;DR - Get Your Project on GitHub in 5 Minutes

### **Step 1: Clean Up & Organize** (2 minutes)
```bash
# Make scripts executable
chmod +x migrate-to-github.sh verify-structure.sh

# Run migration script
./migrate-to-github.sh

# Verify everything is correct
./verify-structure.sh
```

### **Step 2: Install Dependencies** (1 minute)
```bash
npm install
```

### **Step 3: Test Locally** (30 seconds)
```bash
npm run dev
```
Visit `http://localhost:3000` to verify everything works.

### **Step 4: Push to GitHub** (1.5 minutes)
```bash
# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Arrested Machine portfolio website

- Complete React TypeScript application with Motion animations
- Four full-screen sections: Hero, Cases, About, Process  
- Native navigation with Intersection Observer
- Professional GitHub repository structure"

# Connect to your GitHub repository
git remote add origin https://github.com/afinchdesigns/arrested_figma.git

# Push to GitHub
git push -u origin main
```

### **Step 5: Deploy to Vercel** (Optional - 2 minutes)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts - it will auto-detect your settings
```

## ✅ **That's It!**

Your portfolio is now:
- ✅ Properly organized on GitHub
- ✅ Ready for collaboration
- ✅ Deployable to any platform
- ✅ Professional and maintainable

## 🔧 **If Something Goes Wrong**

1. **Migration Issues**: Check `GITHUB_SETUP.md` for detailed instructions
2. **Build Errors**: Run `npm run type-check` and `npm run lint`
3. **Import Errors**: Verify file paths match the new src/ structure
4. **Deploy Issues**: See `DEPLOYMENT.md` for platform-specific guides

## 📁 **Final Structure**
```
arrested_figma/
├── src/
│   ├── App.tsx          # Main app
│   ├── main.tsx         # Entry point
│   ├── components/      # Your components
│   ├── imports/         # Figma sections
│   └── styles/          # CSS files
├── public/              # Static assets
├── package.json         # Dependencies
├── README.md           # Documentation
└── ...config files
```

🎉 **Enjoy your professional GitHub repository!**