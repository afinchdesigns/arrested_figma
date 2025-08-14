# 🎯 **COMPLETE LOCAL SETUP GUIDE**
## Export Your Arrested Machine Portfolio to Mac

### 🔥 **The Situation:**
- **Your portfolio is PERFECT** in Figma Make ✅
- **You need it running** in `/sites/arrested_figma/` on your Mac ✅
- **All files must be copied** from Figma Make to local machine ✅

---

## 📋 **STEP 1: Create Local Project Structure**

**Open Terminal on your Mac and run:**

```bash
# Navigate to your sites folder
cd /sites

# Create the arrested_figma project folder
mkdir -p arrested_figma
cd arrested_figma

# Create the professional src structure
mkdir -p src/components/ui
mkdir -p src/imports
mkdir -p src/styles
mkdir -p components/ui
mkdir -p imports
mkdir -p styles
```

---

## 📄 **STEP 2: Copy Essential Files from Figma Make**

You need to manually copy each file from Figma Make to your local machine. Here are the files:

### **Root Configuration Files:**

**1. package.json** - Copy content from Figma Make:
```bash
nano package.json
# Paste the package.json content from Figma Make
```

**2. vite.config.ts** - Copy from Figma Make:
```bash
nano vite.config.ts
# Paste the vite.config.ts content
```

**3. tsconfig.json** - Copy from Figma Make:
```bash
nano tsconfig.json
# Paste the tsconfig.json content
```

**4. tsconfig.node.json** - Copy from Figma Make:
```bash
nano tsconfig.node.json
# Paste the tsconfig.node.json content
```

**5. index.html** - Copy from Figma Make:
```bash
nano index.html
# Paste the index.html content
```

### **Source Files:**

**6. Main React entry:**
```bash
nano src/main.tsx
# Copy the main.tsx content from Figma Make
```

**7. Your portfolio (most important!):**
```bash
nano src/App.tsx
# Copy the App.tsx content from Figma Make
```

**8. Global styles:**
```bash
nano src/styles/globals.css
# Copy the complete globals.css from Figma Make
```

---

## 🎨 **STEP 3: Copy Component Files**

### **Navigation Components:**
```bash
nano src/components/FixedCommunicationIcon.tsx
nano src/components/NativeNavigationDots.tsx
# Copy the component files from Figma Make
```

### **Figma Import Components:**
```bash
nano src/imports/ArrestedMachineHero1A.tsx
nano src/imports/ArrestedMachineCasesVerticalCarousel1A.tsx  
nano src/imports/ArrestedMachineAbout1A.tsx
nano src/imports/ArrestedMachineProcessAccordian1A.tsx
# Copy all your Figma section components
```

### **SVG Files:**
```bash
nano src/imports/svg-7grg70023c.ts
nano src/imports/svg-b3d20xiacy.ts
nano src/imports/svg-d9s77zyu21.ts
nano src/imports/svg-x2thk5miwj.ts
# Copy all SVG export files
```

### **UI Components:**
Copy all the UI components from `src/components/ui/` in Figma Make to your local `src/components/ui/` folder.

---

## 🚀 **STEP 4: Install and Run**

**After copying all files:**

```bash
# Navigate to your project (if not already there)
cd /sites/arrested_figma

# Install dependencies
npm install

# Start development server
npm run dev
```

**Your portfolio will open at `http://localhost:3000`**

---

## 🎊 **STEP 5: Verify Everything Works**

### **✅ What Should Work Perfectly:**
1. **Hero Section** - Robot background, yellow text animation
2. **Cases Section** - Vertical carousel with case studies
3. **About Section** - Your profile and information
4. **Process Section** - Accordion with your design process
5. **Navigation Dots** - Right side, smooth scrolling
6. **Communication Icon** - Top right corner
7. **Smooth Animations** - Motion library working perfectly

---

## ⚡ **Alternative: Quick Copy Method**

**If you want to copy files faster:**

1. **In Figma Make:** Select all text from each file
2. **Copy to clipboard** (Cmd+C on Mac)  
3. **In Terminal:** Create file with `nano filename.tsx`
4. **Paste content** (Cmd+V)
5. **Save file** (Ctrl+X, then Y, then Enter)
6. **Repeat for all files**

---

## 🔧 **Common Issues & Solutions:**

### **"Module not found" errors:**
```bash
npm install
# This installs all dependencies
```

### **"Port 3000 already in use":**
```bash
npm run dev -- --port 3001
# Uses port 3001 instead
```

### **TypeScript errors:**
```bash
# Make sure you copied tsconfig.json correctly
# Check that all imports have .tsx extensions
```

---

## 🌟 **After Local Success:**

### **Deploy to GitHub:**
```bash
git init
git add .
git commit -m "🎨 Initial commit - Arrested Machine Portfolio"
git branch -M main
git remote add origin https://github.com/afinchdesigns/arrested_figma.git
git push -u origin main
```

### **Deploy to Vercel:**
1. **Go to vercel.com**
2. **Import GitHub repository**
3. **Deploy with default settings**
4. **Get your live URL!**

---

## 🎯 **File Checklist:**

### **Essential Files (Must Have):**
- [ ] `package.json`
- [ ] `vite.config.ts`
- [ ] `tsconfig.json`
- [ ] `index.html`
- [ ] `src/main.tsx`
- [ ] `src/App.tsx` (your portfolio!)
- [ ] `src/styles/globals.css`

### **Component Files:**
- [ ] `src/components/FixedCommunicationIcon.tsx`
- [ ] `src/components/NativeNavigationDots.tsx`
- [ ] All files in `src/imports/`
- [ ] All files in `src/components/ui/`

**Once you have these files copied and `npm run dev` works, you're live!** 🚀

Your professional portfolio deserves to be seen by the world! ✨