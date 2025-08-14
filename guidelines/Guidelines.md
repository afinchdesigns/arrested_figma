# Arrested Machine Project Guidelines

## Animation Guidelines

### Animation Libraries
- **PRIMARY:** Use Motion (framer-motion) for all complex animations and transitions
- **SECONDARY:** Use CSS animations for simple micro-interactions and utility animations
- **AVOID:** Do not use GSAP due to compatibility issues in this environment

### Animation Approach
- **Section Reveals:** Use Motion's `whileInView` for smooth section entrance animations
- **Navigation Interactions:** Combine Motion with Intersection Observer for reliable scroll detection
- **Micro-interactions:** Use Motion's `whileHover`, `whileTap`, and `AnimatePresence` for UI feedback
- **Page Load:** Implement staggered animations with Motion's `delayChildren` and `staggerChildren`

### Performance Optimization
- Use `will-change` CSS property for elements that will be animated
- Prefer `transform` and `opacity` animations over layout-affecting properties
- Use `once: true` in `viewport` settings to prevent re-triggering animations
- Implement `AnimatePresence` with `mode="wait"` for smooth state transitions

## Design System Guidelines

### Color Scheme
- **Primary Yellow:** #FCB426 (used for active states, highlights)
- **Primary Brown:** #352C27 (used for text on light backgrounds)
- **Background Sections:** Alternating between light and dark themes per section

### Typography
- **Headlines:** Encode Sans Condensed Black
- **Body Text:** Libre Franklin (Medium, Regular, Italic variants)
- **Special Elements:** Libre Barcode 39 Text for unique design elements

### Layout Structure
- **Full Viewport Sections:** Each section uses `h-screen` for full-height layouts
- **Consistent Margins:** 6.25% left and right margins for visual alignment
- **Responsive Scaling:** Content containers preserve original design proportions

### Navigation
- **Fixed Elements:** Navigation dots (right side) and communication icon (top right)
- **Scroll Behavior:** Smooth scrolling with native browser implementation
- **Section Detection:** Intersection Observer API with 20% margin for accurate detection

### Interaction Design
- **Hover States:** Subtle scale transformations (1.05x - 1.1x)
- **Click Feedback:** Scale down (0.9x - 0.95x) with spring animations
- **Focus States:** Clear ring indicators using brand yellow (#FCB426)
- **Tooltips:** Contextual information with brand-consistent styling

## Technical Guidelines

### Component Architecture
- Keep components small and focused on single responsibilities
- Use Motion animations within components, not at the layout level
- Implement proper TypeScript types for all props and state
- Follow React best practices with hooks and effect cleanup

### Performance
- Use `useCallback` and `useMemo` for expensive computations
- Implement proper cleanup in `useEffect` for event listeners
- Optimize images and SVGs used in the design
- Use semantic HTML elements for accessibility

### Responsive Design
- Test on multiple screen sizes and devices
- Ensure touch targets are at least 44px for mobile
- Implement proper focus management for keyboard navigation
- Consider reduced motion preferences for accessibility