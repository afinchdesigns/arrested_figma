// Mathematical positioning system for Andrew's image relative to the title
export const ABOUT_POSITIONING = {
  // Title positioning constants (from original Figma design)
  TITLE_PERCENT: 37.5, // 37.5% viewport width
  TITLE_OFFSET: 7.75,   // +7.75px additional offset
  TITLE_LEFT_POSITION: 'calc(37.5% + 7.75px)',
  
  // Perfect "tucked behind" offset found through visual debugging
  TUCKED_BEHIND_OFFSET: -290, // -290px from title position creates perfect tuck
  
  // Image positioning calculation based on title position
  calculateImagePosition: (offsetFromTitle: number = ABOUT_POSITIONING.TUCKED_BEHIND_OFFSET): string => {
    // Formula: Title position + offset
    // -290px offset creates the perfect "tucked behind" effect
    const totalOffset = ABOUT_POSITIONING.TITLE_OFFSET + offsetFromTitle;
    return `calc(${ABOUT_POSITIONING.TITLE_PERCENT}% + ${totalOffset}px)`;
  },
  
  // Final optimized image position
  // calc(37.5% + 7.75px - 290px) = calc(37.5% - 282.25px)
  OPTIMAL_IMAGE_POSITION: 'calc(37.5% - 282.25px)',
  
  // Position explanation:
  // - Title left edge: calc(37.5% + 7.75px)
  // - Image position: calc(37.5% + 7.75px - 290px) = calc(37.5% - 282.25px)
  // - Distance between reference points: 290px
  // - Visual effect: Image appears perfectly "tucked behind" the title
};