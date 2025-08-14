# GitHub Repository Setup Guide

Follow these steps to properly organize and upload your Arrested Machine project to GitHub.

## 📁 **Current File Issues to Fix**

### **Files in Wrong Locations:**
- `LICENSE/Code-component-20-155.tsx` → Delete (this is license text, not a component)
- `LICENSE/Code-component-20-170.tsx` → Delete (this is license text, not a component)
- `App.tsx` (root) → Delete (use `src/App.tsx` instead)

### **File Organization Steps:**

## 🗂️ **Step 1: Create Proper Directory Structure**

Your final structure should look like this:

```
arrested_figma/
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── vercel.json
├── LICENSE
├── README.md
├── CONTRIBUTING.md
├── DEPLOYMENT.md
├── GITHUB_SETUP.md
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/
│   │   ├── FixedCommunicationIcon.tsx
│   │   ├── NativeNavigationDots.tsx
│   │   ├── about/
│   │   │   ├── AboutButtons.tsx
│   │   │   ├── AboutContentFrame.tsx
│   │   │   ├── AboutIcons.tsx
│   │   │   └── AboutImagePositioning.ts
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx
│   │   └── ui/
│   │       └── [all your shadcn components]
│   ├── imports/
│   │   ├── ArrestedMachineHero1A.tsx
│   │   ├── ArrestedMachineCasesVerticalCarousel1A.tsx
│   │   ├── ArrestedMachineAbout1A.tsx
│   │   ├── ArrestedMachineProcessAccordian1A.tsx
│   │   ├── svg-7grg70023c.ts
│   │   ├── svg-b3d20xiacy.ts
│   │   ├── svg-d9s77zyu21.ts
│   │   └── svg-x2thk5miwj.ts
│   └── styles/
│       └── globals.css
├── guidelines/
│   └── Guidelines.md
└── public/
    └── [favicon and other static assets]
```

## 🧹 **Step 2: Clean Up Files**

### **Delete These Files:**
```bash
# These are incorrectly placed
rm LICENSE/Code-component-20-155.tsx
rm LICENSE/Code-component-20-170.tsx
rm App.tsx  # Use src/App.tsx instead

# These are outdated navigation components (keep only NativeNavigationDots.tsx)
rm components/FixedNavigationDots.tsx
rm components/GSAPNavigationDots.tsx
rm components/SimpleNavigationDots.tsx
rm components/ImagePositionDebugger.tsx
```

### **Move Files to src/ Directory:**
```bash
# Move components to src/
mv components/ src/components/

# Move imports to src/
mv imports/ src/imports/

# Move styles to src/
mv styles/ src/styles/

# Move guidelines to root level
mv guidelines/ ./
```

## 📝 **Step 3: Update Import Paths**

After moving to src/ structure, update import paths in all component files:

### **Update src/App.tsx imports:**
```typescript
// Change from:
import ArrestedMachineHero1A from './imports/ArrestedMachineHero1A';
import FixedCommunicationIcon from './components/FixedCommunicationIcon';

// To:
import ArrestedMachineHero1A from '../imports/ArrestedMachineHero1A';
import FixedCommunicationIcon from '../components/FixedCommunicationIcon';
```

### **Update component imports:**
Update all component files to use relative paths from the src/ directory.

## 🚀 **Step 4: Initialize Git Repository**

```bash
# Navigate to your project directory
cd path/to/your/arrested_figma

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Arrested Machine portfolio website

- Complete React TypeScript application with Motion animations
- Four full-screen sections: Hero, Cases, About, Process
- Native navigation with Intersection Observer
- Responsive design with Tailwind CSS v4
- Optimized performance and accessibility
- Professional GitHub repository structure"

# Add remote origin
git remote add origin https://github.com/afinchdesigns/arrested_figma.git

# Push to GitHub
git push -u origin main
```

## 🔄 **Step 5: Verify Repository Structure**

After pushing, your GitHub repository should have:

### **Root Files:**
- ✅ README.md with comprehensive documentation
- ✅ package.json with all dependencies
- ✅ .gitignore excluding node_modules and build files
- ✅ LICENSE file
- ✅ TypeScript and build configuration files

### **Source Code:**
- ✅ src/main.tsx - React entry point
- ✅ src/App.tsx - Main application component
- ✅ src/components/ - All reusable components
- ✅ src/imports/ - Figma-imported sections
- ✅ src/styles/ - Global CSS and Tailwind config

### **Documentation:**
- ✅ CONTRIBUTING.md - Contribution guidelines
- ✅ DEPLOYMENT.md - Deployment instructions
- ✅ guidelines/Guidelines.md - Project guidelines

## 🎯 **Step 6: Set Up Development Environment**

Anyone cloning your repository can now:

```bash
# Clone the repository
git clone https://github.com/afinchdesigns/arrested_figma.git
cd arrested_figma

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📊 **Step 7: Deploy to Vercel (Optional)**

```bash
# Install Vercel CLI
npm i -g vercel

# Login and deploy
vercel login
vercel

# Follow prompts to deploy
```

## ✅ **Step 8: Repository Checklist**

Make sure your repository has:

- [ ] All source code in src/ directory
- [ ] Proper TypeScript configuration
- [ ] Working build process (`npm run build`)
- [ ] Clean file structure with no duplicates
- [ ] Updated import paths
- [ ] Professional README.md
- [ ] Contributing guidelines
- [ ] Deployment documentation
- [ ] MIT License
- [ ] .gitignore file
- [ ] Vercel deployment configuration

## 🔧 **Troubleshooting**

### **Import Path Errors:**
If you get import errors after reorganizing:
1. Check that files are in the correct src/ subdirectories
2. Update relative import paths (use `../` to go up directories)
3. Verify all Figma imports and SVG files are accessible

### **Build Errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### **Development Server Issues:**
```bash
# Ensure proper file structure
npm run type-check
npm run lint
npm run dev
```

Your project is now ready for professional GitHub hosting and collaboration! 🎉