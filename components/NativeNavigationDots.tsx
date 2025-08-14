import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import svgPaths from '../imports/svg-7grg70023c';

function ProgressDotEmpty() {
  return (
    <motion.div 
      className="relative w-3.5 h-3.5" 
      data-name="toggle--progressDot"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_617)">
          <path d="M8 2H10V0H8H6H4V2H6H8Z" fill="var(--fill-0, #FCB426)" />
          <path d="M2 6V4H0V6V8V10H2V8V6Z" fill="var(--fill-0, #FCB426)" />
          <path d="M4 10H2V12H4V10Z" fill="var(--fill-0, #FCB426)" />
          <path d="M6 12H4V14H6H8H10V12H8H6Z" fill="var(--fill-0, #FCB426)" />
          <path d="M12 10H10V12H12V10Z" fill="var(--fill-0, #FCB426)" />
          <path d="M12 4V6V8V10H14V8V6V4H12Z" fill="var(--fill-0, #FCB426)" />
          <path d="M12 2H10V4H12V2Z" fill="var(--fill-0, #FCB426)" />
          <path d="M4 2H2V4H4V2Z" fill="var(--fill-0, #FCB426)" />
        </g>
        <defs>
          <clipPath id="clip0_1_617">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </motion.div>
  );
}

function ProgressDotFilled() {
  return (
    <motion.div 
      className="relative w-3.5 h-3.5" 
      data-name="toggle--progressDot"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_627)">
          <path d="M8 2H10V0H8H6H4V2H6H8Z" fill="var(--fill-0, #FCB426)" />
          <path d="M2 6V4H0V6V8V10H2V8V6Z" fill="var(--fill-0, #FCB426)" />
          <path d="M4 10H2V12H4V10Z" fill="var(--fill-0, #FCB426)" />
          <path d="M6 12H4V14H6H8H10V12H8H6Z" fill="var(--fill-0, #FCB426)" />
          <path d={svgPaths.p244dec00} fill="var(--fill-0, #FCB426)" />
          <path d="M12 10H10V12H12V10Z" fill="var(--fill-0, #FCB426)" />
          <path d="M12 4V6V8V10H14V8V6V4H12Z" fill="var(--fill-0, #FCB426)" />
          <path d="M12 2H10V4H12V2Z" fill="var(--fill-0, #FCB426)" />
          <path d="M4 2H2V4H4V2Z" fill="var(--fill-0, #FCB426)" />
        </g>
        <defs>
          <clipPath id="clip0_1_627">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </motion.div>
  );
}

const sections = [
  { id: 'hero', label: 'Hero', className: 'section-0', elementId: 'hero-section' },
  { id: 'cases', label: 'Cases', className: 'section-1', elementId: 'cases-section' },
  { id: 'about', label: 'About', className: 'section-2', elementId: 'about-section' },
  { id: 'process', label: 'Process', className: 'section-3', elementId: 'process-section' }
];

export default function NativeNavigationDots() {
  const [activeSection, setActiveSection] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Set up Intersection Observer for section detection
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = sections.findIndex(section => 
              entry.target.classList.contains(section.className)
            );
            if (sectionIndex !== -1) {
              setActiveSection(sectionIndex);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -20% 0px', // Trigger when section is 20% in view
        threshold: 0.1
      }
    );

    // Observe all sections
    sections.forEach(section => {
      const element = document.querySelector(`.${section.className}`);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleDotClick = (sectionIndex: number) => {
    console.log('Navigation dot clicked:', sectionIndex);
    console.log('Available sections:', sections);
    
    const section = sections[sectionIndex];
    if (!section) {
      console.error('Section not found for index:', sectionIndex);
      return;
    }
    
    // Try to find the target section by class first
    let targetSection = document.querySelector(`.${section.className}`);
    console.log('Target section found by class:', targetSection);
    
    // If not found by class, try by ID
    if (!targetSection) {
      targetSection = document.getElementById(section.elementId);
      console.log('Target section found by ID:', targetSection);
    }
    
    if (targetSection) {
      console.log('Scrolling to section:', targetSection);
      // Use scrollIntoView for more reliable scrolling
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    } else {
      console.error(`Section not found: class="${section.className}" id="${section.elementId}"`);
      
      // Debug: log all sections in the DOM
      console.log('All sections in DOM:');
      sections.forEach((sec, idx) => {
        const byClass = document.querySelector(`.${sec.className}`);
        const byId = document.getElementById(sec.elementId);
        console.log(`Section ${idx}: class=${byClass ? 'found' : 'not found'}, id=${byId ? 'found' : 'not found'}`);
      });
      
      // Fallback to manual calculation
      const windowHeight = window.innerHeight;
      const targetScrollY = sectionIndex * windowHeight;
      console.log('Fallback scroll to:', targetScrollY, 'Window height:', windowHeight);
      
      window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth'
      });
    }
    
    // Also manually update active section for immediate feedback
    setActiveSection(sectionIndex);
  };

  return (
    <TooltipProvider>
      <motion.div 
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          duration: 0.6, 
          ease: "easeOut",
          staggerChildren: 0.1,
          delayChildren: 0.3
        }}
      >
        <AnimatePresence>
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: 20, scale: 0.5 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 25
              }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.button
                    onClick={() => handleDotClick(index)}
                    className="cursor-pointer outline-none border-none bg-transparent p-0 m-0
                               px-4 py-2 -mx-4 -my-2" // Expanded hitbox, removed focus styling
                    aria-label={`Navigate to ${section.label} section`}
                    data-active={activeSection === index}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <AnimatePresence mode="wait">
                      {activeSection === index ? (
                        <motion.div
                          key="filled"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ProgressDotFilled />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="empty"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ProgressDotEmpty />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-[#352C27] text-[#FCB426] border-[#FCB426]/20">
                  <motion.p 
                    className="font-['Libre_Franklin:Medium',_sans-serif] font-medium text-sm tracking-[0.56px] uppercase"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {section.label}
                  </motion.p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </TooltipProvider>
  );
}