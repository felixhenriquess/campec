import React, { useState } from 'react';
import { 
  Accessibility, 
  ZoomIn, 
  ZoomOut, 
  Contrast, 
  Underline, 
  Palette, 
  RotateCcw,
  LayoutGrid,
  Shield,
  Command
} from 'lucide-react';
import { useAccessibility } from '../contexts/AccessibilityContext';

export default function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    highContrast, 
    underlineLinks, 
    grayscale, 
    increaseText, 
    decreaseText, 
    toggleHighContrast, 
    toggleUnderlineLinks, 
    toggleGrayscale, 
    reset 
  } = useAccessibility();

  return (
    <div className={`fixed top-1/4 right-0 z-[100] flex transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-[280px]'}`}>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#1a659e] text-white w-[48px] h-[220px] rounded-l-md shadow-[-4px_0_15px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center gap-4 hover:bg-[#155282] transition-colors"
      >
        <Accessibility size={24} />
        <span className="font-bold tracking-widest text-sm writing-vertical-rl rotate-180">
          ACESSIBILIDADE
        </span>
      </button>

      {/* Panel */}
      <div className="w-[280px] bg-[#1a659e] text-white shadow-2xl flex flex-col">
        <div className="p-4 flex-1 overflow-y-auto">
          <ul className="space-y-1">
            <li>
              <button onClick={increaseText} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-md transition-colors text-left">
                <ZoomIn size={18} />
                <span className="text-sm font-medium">Aumentar Texto</span>
              </button>
            </li>
            <li>
              <button onClick={decreaseText} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-md transition-colors text-left">
                <ZoomOut size={18} />
                <span className="text-sm font-medium">Diminuir Texto</span>
              </button>
            </li>
            <li>
              <button onClick={toggleHighContrast} className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-md transition-colors text-left ${highContrast ? 'bg-white/20' : ''}`}>
                <Contrast size={18} />
                <span className="text-sm font-medium">Alto Contraste</span>
              </button>
            </li>
            <li>
              <button onClick={toggleUnderlineLinks} className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-md transition-colors text-left ${underlineLinks ? 'bg-white/20' : ''}`}>
                <Underline size={18} />
                <span className="text-sm font-medium">Sublinhar Links</span>
              </button>
            </li>
            <li>
              <button onClick={toggleGrayscale} className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-md transition-colors text-left ${grayscale ? 'bg-white/20' : ''}`}>
                <Palette size={18} />
                <span className="text-sm font-medium">Tons de Cinza</span>
              </button>
            </li>
            <li>
              <button onClick={reset} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-md transition-colors text-left">
                <RotateCcw size={18} />
                <span className="text-sm font-medium">Redefinir</span>
              </button>
            </li>
          </ul>
          
          <div className="h-px bg-white/20 my-4 mx-4"></div>
          
          <ul className="space-y-1">
            <li>
              <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-md transition-colors text-left">
                <LayoutGrid size={18} />
                <span className="text-sm font-medium">Mapa do Site</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-md transition-colors text-left">
                <Shield size={18} />
                <span className="text-sm font-medium">Política de Privacidade</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-md transition-colors text-left">
                <Command size={18} />
                <span className="text-sm font-medium">Teclas de Atalho</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
