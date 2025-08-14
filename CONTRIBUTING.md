# Contributing to Arrested Machine

Thank you for your interest in contributing to the Arrested Machine project! This document provides guidelines and information for contributors.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## 🤝 Code of Conduct

This project adheres to a code of conduct that we expect all contributors to follow:

- **Be respectful**: Treat everyone with respect and kindness
- **Be inclusive**: Welcome newcomers and help create an inclusive environment
- **Be constructive**: Provide helpful feedback and suggestions
- **Be patient**: Remember that everyone has different skill levels and experiences

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)
- Git

### Setup

1. **Fork the repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/arrested_figma.git
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

4. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🔄 Development Workflow

### Project Structure
```
src/
├── components/          # Reusable UI components
├── imports/            # Figma-imported sections
├── styles/             # Global styles and Tailwind config
└── App.tsx            # Main application component
```

### Key Files
- **`src/App.tsx`**: Main application entry point
- **`src/styles/globals.css`**: Tailwind configuration and global styles
- **`guidelines/Guidelines.md`**: Project development guidelines
- **`components/`**: Custom components and UI library

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check
```

## 📝 Coding Standards

### TypeScript
- Use strict TypeScript configuration
- Define proper types for all props and functions
- Avoid `any` types unless absolutely necessary
- Use meaningful variable and function names

### React
- Use functional components with hooks
- Implement proper cleanup in `useEffect`
- Use `useCallback` and `useMemo` for performance optimization
- Follow React best practices and patterns

### Styling
- Use Tailwind CSS for styling
- Follow the design system guidelines in `Guidelines.md`
- Maintain consistent spacing using the 6.25% margin system
- Use brand colors: `#FCB426` (yellow) and `#352C27` (brown)

### Animations
- Use Motion (Framer Motion) for complex animations
- Implement performance-first animations using `transform` and `opacity`
- Add `will-change` CSS property for animated elements
- Support reduced motion preferences

### Code Quality
- Write self-documenting code with clear variable names
- Add comments for complex logic
- Keep functions small and focused
- Follow the single responsibility principle

## 📦 Commit Guidelines

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples
```bash
feat(navigation): add smooth scroll to section navigation
fix(hero): resolve image loading issue on mobile
docs(readme): update installation instructions
style(components): format code with prettier
refactor(animations): optimize motion components
```

## 🔍 Pull Request Process

### Before Submitting
1. **Test your changes**
   ```bash
   npm run build
   npm run lint
   npm run type-check
   ```

2. **Update documentation** if needed
3. **Add or update tests** for new features
4. **Ensure responsive design** works on mobile and desktop

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Cross-browser testing completed
- [ ] Animation performance verified

## Screenshots
[Add screenshots if applicable]

## Checklist
- [ ] Code follows project guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors or warnings
```

### Review Process
1. **Automated checks**: All CI checks must pass
2. **Code review**: At least one maintainer review required
3. **Testing**: Manual testing on different devices/browsers
4. **Documentation**: Ensure docs are updated if needed

## 🎨 Design Guidelines

### Animation Principles
- **Smooth entrance effects**: Use `whileInView` for section reveals
- **Micro-interactions**: Implement hover and tap feedback
- **Performance first**: Optimize animations for 60fps
- **Accessibility**: Support reduced motion preferences

### Component Architecture
- **Single responsibility**: Each component should have one clear purpose
- **Reusability**: Create flexible, reusable components
- **Props interface**: Define clear TypeScript interfaces
- **Error boundaries**: Handle errors gracefully

### Performance Optimization
- **Lazy loading**: Implement for non-critical content
- **Image optimization**: Use appropriate formats and sizes
- **Code splitting**: Split bundles for optimal loading
- **Animation cleanup**: Proper cleanup of event listeners

## 📚 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Motion Documentation](https://motion.dev/)
- [Project Guidelines](./guidelines/Guidelines.md)

## ❓ Questions?

If you have questions or need help:

1. Check existing [issues](https://github.com/afinchdesigns/arrested_figma/issues)
2. Create a new issue with detailed information
3. Reach out to the maintainers

Thank you for contributing to Arrested Machine! 🎉