import React, { createContext, useContext, useState, useEffect } from 'react';

interface AccessibilityContextType {
  textSize: number;
  highContrast: boolean;
  underlineLinks: boolean;
  grayscale: boolean;
  increaseText: () => void;
  decreaseText: () => void;
  resetText: () => void;
  toggleHighContrast: () => void;
  setHighContrast: (value: boolean) => void;
  toggleUnderlineLinks: () => void;
  toggleGrayscale: () => void;
  reset: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [textSize, setTextSize] = useState(0); // 0: normal, 1: large, 2: xlarge, -1: small
  const [highContrast, setHighContrast] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [grayscale, setGrayscale] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    
    // Text Size
    html.classList.remove('text-small', 'text-large', 'text-xlarge');
    if (textSize === -1) html.classList.add('text-small');
    if (textSize === 1) html.classList.add('text-large');
    if (textSize === 2) html.classList.add('text-xlarge');

    // High Contrast
    if (highContrast) html.classList.add('high-contrast');
    else html.classList.remove('high-contrast');

    // Underline Links
    if (underlineLinks) html.classList.add('underline-links');
    else html.classList.remove('underline-links');

    // Grayscale
    if (grayscale) html.classList.add('grayscale-mode');
    else html.classList.remove('grayscale-mode');

  }, [textSize, highContrast, underlineLinks, grayscale]);

  const increaseText = () => setTextSize(prev => Math.min(prev + 1, 2));
  const decreaseText = () => setTextSize(prev => Math.max(prev - 1, -1));
  const resetText = () => setTextSize(0);
  const toggleHighContrast = () => setHighContrast(prev => !prev);
  const toggleUnderlineLinks = () => setUnderlineLinks(prev => !prev);
  const toggleGrayscale = () => setGrayscale(prev => !prev);
  
  const reset = () => {
    setTextSize(0);
    setHighContrast(false);
    setUnderlineLinks(false);
    setGrayscale(false);
  };

  return (
    <AccessibilityContext.Provider value={{
      textSize,
      highContrast,
      underlineLinks,
      grayscale,
      increaseText,
      decreaseText,
      resetText,
      toggleHighContrast,
      setHighContrast,
      toggleUnderlineLinks,
      toggleGrayscale,
      reset
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}
