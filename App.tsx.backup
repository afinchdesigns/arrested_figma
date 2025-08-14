import { motion } from 'motion/react';
import ArrestedMachineHero1A from './imports/ArrestedMachineHero1A';
import ArrestedMachineCasesVerticalCarousel1A from './imports/ArrestedMachineCasesVerticalCarousel1A';
import ArrestedMachineAbout1A from './imports/ArrestedMachineAbout1A';
import ArrestedMachineProcessAccordian1A from './imports/ArrestedMachineProcessAccordian1A';
import FixedCommunicationIcon from './components/FixedCommunicationIcon';
// Using native navigation dots with Intersection Observer for reliable scroll detection
import NativeNavigationDots from './components/NativeNavigationDots';

export default function App() {
  return (
    <div className="w-full smooth-scroll">
      {/* Fixed UI Elements */}
      <FixedCommunicationIcon />
      {/* Native navigation dots with tooltips and expanded hitbox */}
      <NativeNavigationDots />
      
      {/* Hero Section */}
      <motion.div 
        className="w-full h-screen section-0"
        id="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <ArrestedMachineHero1A />
      </motion.div>
      
      {/* Cases Section */}
      <motion.div 
        className="w-full h-screen section-1"
        id="cases-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ArrestedMachineCasesVerticalCarousel1A />
      </motion.div>
      
      {/* About Section */}
      <motion.div 
        className="w-full h-screen section-2"
        id="about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        <ArrestedMachineAbout1A />
      </motion.div>
      
      {/* Process Section */}
      <motion.div 
        className="w-full h-screen section-3"
        id="process-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <ArrestedMachineProcessAccordian1A />
      </motion.div>
    </div>
  );
}