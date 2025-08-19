import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import svgPaths from '../imports/svg-7grg70023c';

export default function FixedCommunicationIcon() {
  const [currentSection, setCurrentSection] = useState<'hero' | 'cases' | 'about' | 'process'>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Use the same precise section detection as FixedNavigationDots
      const sectionIndex = Math.round(scrollY / windowHeight);
      const clampedIndex = Math.max(0, Math.min(3, sectionIndex));
      
      const sections: ('hero' | 'cases' | 'about' | 'process')[] = ['hero', 'cases', 'about', 'process'];
      setCurrentSection(sections[clampedIndex]);
    };

    // Set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine icon color based on section background
  const getIconColor = () => {
    switch (currentSection) {
      case 'hero':
        return '#FCB426'; // Light yellow for dark background
      case 'cases':
        return '#FCB426'; // Light yellow for dark background
      case 'about':
        return '#352C27'; // Dark brown for light background
      case 'process':
        return '#FCB426'; // Light yellow for dark background (#352c27)
      default:
        return '#352C27';
    }
  };

  return (
    <motion.div 
      className="fixed top-4 right-4 z-50 box-border content-stretch flex flex-row gap-2 h-[42px] items-baseline justify-end pb-4 pt-2.5 px-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
    >
      <motion.button
        className="relative shrink-0 size-4"
        data-name="icon--speech"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        aria-label="Contact"
      >
        <AnimatePresence mode="wait">
          <motion.svg 
            key={currentSection}
            className="block size-full" 
            fill="none" 
            preserveAspectRatio="none" 
            viewBox="0 0 16 16"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <g clipPath="url(#clip0_1_645)" id="icon--speech">
              <path d="M14 0H2V2H14V0Z" fill={getIconColor()} id="Vector" />
              <path d="M2 2H0V10H2V2Z" fill={getIconColor()} id="Vector_2" />
              <path d="M4 10H2V12H4V10Z" fill={getIconColor()} id="Vector_3" />
              <path d="M6 12H4V14H6V12Z" fill={getIconColor()} id="Vector_4" />
              <path d={svgPaths.p230b3d80} fill={getIconColor()} id="Vector_5" />
              <path d="M16 2H14V10H16V2Z" fill={getIconColor()} id="Vector_6" />
            </g>
            <defs>
              <clipPath id="clip0_1_645">
                <rect fill="white" height="16" width="16" />
              </clipPath>
            </defs>
          </motion.svg>
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
}