import React from 'react';
import svgPaths from '../imports/svg-7grg70023c';

function ProgressDotEmpty() {
  return (
    <div className="relative w-3.5 h-3.5" data-name="toggle--progressDot">
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
    </div>
  );
}

function ProgressDotFilled() {
  return (
    <div className="relative w-3.5 h-3.5" data-name="toggle--progressDot">
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
    </div>
  );
}

export default function SimpleNavigationDots() {
  const handleDotClick = (sectionIndex: number) => {
    const windowHeight = window.innerHeight;
    const targetScrollY = sectionIndex * windowHeight;
    
    // Use simple, instant scroll to avoid conflicts with any GSAP animations
    window.scrollTo({
      top: targetScrollY,
      behavior: 'auto' // Use 'auto' instead of 'smooth' to avoid conflicts
    });
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-6">
      {/* Hero Section Dot */}
      <button 
        onClick={() => handleDotClick(0)}
        className="cursor-pointer hover:scale-110 transition-transform duration-200"
        aria-label="Navigate to Hero section"
      >
        <ProgressDotEmpty />
      </button>
      
      {/* Cases Section Dot */}
      <button 
        onClick={() => handleDotClick(1)}
        className="cursor-pointer hover:scale-110 transition-transform duration-200"
        aria-label="Navigate to Cases section"
      >
        <ProgressDotEmpty />
      </button>
      
      {/* About Section Dot */}
      <button 
        onClick={() => handleDotClick(2)}
        className="cursor-pointer hover:scale-110 transition-transform duration-200"
        aria-label="Navigate to About section"
      >
        <ProgressDotEmpty />
      </button>
      
      {/* Process Section Dot */}
      <button 
        onClick={() => handleDotClick(3)}
        className="cursor-pointer hover:scale-110 transition-transform duration-200"
        aria-label="Navigate to Process section"
      >
        <ProgressDotEmpty />
      </button>
    </div>
  );
}