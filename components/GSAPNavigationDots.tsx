import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import svgPaths from '../imports/svg-7grg70023c';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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

const sections = [
  { id: 'hero', label: 'Hero' },
  { id: 'cases', label: 'Cases' },
  { id: 'about', label: 'About' },
  { id: 'process', label: 'Process' }
];

export default function GSAPNavigationDots() {
  const [activeSection, setActiveSection] = useState(0);
  const dotsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    // Create ScrollTrigger instances for each section
    const triggers = sections.map((_, index) => {
      return ScrollTrigger.create({
        trigger: `.section-${index}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(index),
        onEnterBack: () => setActiveSection(index),
      });
    });

    // Animate dots on mount
    if (dotsRef.current) {
      gsap.fromTo(
        dotsRef.current.children,
        { 
          opacity: 0, 
          scale: 0.5,
          x: 20 
        },
        { 
          opacity: 1, 
          scale: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)"
        }
      );
    }

    return () => {
      triggers.forEach(trigger => trigger.kill());
    };
  }, []);

  const handleDotClick = (sectionIndex: number) => {
    const windowHeight = window.innerHeight;
    const targetScrollY = sectionIndex * windowHeight;
    
    // Use GSAP to scroll smoothly
    gsap.to(window, {
      scrollTo: { 
        y: targetScrollY,
        autoKill: false
      },
      duration: 1,
      ease: "power2.inOut"
    });

    // Animate the clicked button
    if (buttonsRef.current[sectionIndex]) {
      gsap.to(buttonsRef.current[sectionIndex], {
        scale: 0.8,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    }
  };

  return (
    <div 
      ref={dotsRef}
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-6"
    >
      {sections.map((section, index) => (
        <button
          key={section.id}
          ref={el => buttonsRef.current[index] = el}
          onClick={() => handleDotClick(index)}
          className="cursor-pointer hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-[#FCB426]/50 focus:ring-offset-2 rounded-full"
          aria-label={`Navigate to ${section.label} section`}
          data-active={activeSection === index}
        >
          {activeSection === index ? <ProgressDotFilled /> : <ProgressDotEmpty />}
        </button>
      ))}
    </div>
  );
}