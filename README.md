# Arrested Machine

A modern, single-page portfolio website for Andrew Finch, an experienced product designer. Built with React, TypeScript, and Motion animations, showcasing design work through an immersive, full-screen experience.

## 🚀 Live Demo

[View Live Site](https://your-deployed-url.com) <!-- Update with actual URL -->

## 📸 Preview

<!-- Add screenshots here when you have them -->

## ✨ Features

- **Full-Screen Sections**: Immersive viewport-height sections with smooth scrolling
- **Motion Animations**: Custom entrance animations using Framer Motion
- **Interactive Navigation**: Smart navigation dots with section detection
- **Responsive Design**: Optimized for all screen sizes and devices
- **Performance Optimized**: Smooth animations with proper cleanup and optimization
- **Accessibility**: Full keyboard navigation and reduced motion support
- **Modern Stack**: React 18, TypeScript, Tailwind CSS v4, Motion

## 🎨 Design System

### Color Palette
- **Primary Yellow**: `#FCB426` - Active states and highlights
- **Primary Brown**: `#352C27` - Text and dark elements
- **Background**: Dynamic alternating light/dark themes per section

### Typography
- **Headlines**: Encode Sans Condensed Black
- **Body Text**: Libre Franklin (Medium, Regular, Italic)
- **Special Elements**: Libre Barcode 39 Text

### Layout Principles
- **6.25% Margins**: Consistent left/right margins for visual alignment
- **Full Viewport**: Each section uses complete screen height
- **Centered Content**: 1369px max-width containers with responsive scaling

## 🛠 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion)
- **Build Tool**: Vite
- **Deployment**: [Add your deployment platform]

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/afinchdesigns/arrested_figma.git
   cd arrested_figma
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🏗 Project Structure

```
arrested_figma/
├── src/
│   ├── App.tsx                 # Main application component
│   ├── components/             # Reusable UI components
│   │   ├── FixedCommunicationIcon.tsx
│   │   ├── NativeNavigationDots.tsx
│   │   ├── figma/              # Figma integration components
│   │   └── ui/                 # Shadcn UI components
│   ├── imports/                # Figma-imported sections
│   │   ├── ArrestedMachineHero1A.tsx
│   │   ├── ArrestedMachineCasesVerticalCarousel1A.tsx
│   │   ├── ArrestedMachineAbout1A.tsx
│   │   └── ArrestedMachineProcessAccordian1A.tsx
│   └── styles/
│       └── globals.css         # Tailwind configuration
├── guidelines/
│   └── Guidelines.md           # Project development guidelines
└── README.md
```

## 🎯 Sections Overview

### 1. Hero Section
- Bold headline with robot background imagery
- Custom typography and brand introduction
- Smooth entrance animations

### 2. Cases Section
- Vertical carousel showcasing design projects
- Interactive project navigation
- Case study highlights

### 3. About Section
- Personal introduction and philosophy
- Skills and experience overview
- Contact information and CTAs

### 4. Process Section
- 5-phase design methodology
- Interactive accordion interface
- Detailed process breakdown

## 🔧 Development Guidelines

### Animation Best Practices
- Use Motion for complex animations and transitions
- Implement `whileInView` for section entrance effects
- Combine Motion with Intersection Observer for scroll detection
- Performance-first approach with `will-change` and proper cleanup

### Component Architecture
- Small, focused components with single responsibilities
- TypeScript for all components with proper type definitions
- React hooks with proper effect cleanup
- Semantic HTML for accessibility

### Performance Optimization
- Optimized images and SVGs
- Lazy loading for section content
- Reduced motion preferences support
- Efficient animation frame usage

## 🚀 Deployment

### Recommended Platforms
- **Vercel**: Zero-config deployment with automatic previews
- **Netlify**: Easy deployment with form handling
- **GitHub Pages**: Free hosting for static sites

### Build Configuration
```bash
# Build the project
npm run build

# Preview the build locally
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Andrew Finch**
- Portfolio: [andrewfinch.design](https://andrewfinch.design) <!-- Update with actual URL -->
- LinkedIn: [Andrew Finch](https://linkedin.com/in/andrewfinch) <!-- Update with actual URL -->
- Email: [contact@andrewfinch.design](mailto:contact@andrewfinch.design) <!-- Update with actual email -->

## 🙏 Acknowledgments

- Built with [Figma Make](https://figma.com) integration
- UI components powered by [Shadcn/ui](https://ui.shadcn.com/)
- Animations by [Motion](https://motion.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

**Note**: This project showcases modern web development practices and is optimized for performance, accessibility, and user experience.