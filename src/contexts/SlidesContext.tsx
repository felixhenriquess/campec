import React, { createContext, useContext, useState, useEffect } from 'react';

export interface SlideData {
  id: string;
  title: string;
  titleHighlight: string;
  slogan: string;
  image: string;
  cardIcon: string;
  cardTitle: string;
  cardDescription: string;
}

interface SlidesContextType {
  slides: SlideData[];
  addSlide: (slide: Omit<SlideData, 'id'>) => void;
  updateSlide: (id: string, slide: Omit<SlideData, 'id'>) => void;
  deleteSlide: (id: string) => void;
}

const defaultSlides: SlideData[] = [
  {
    id: '1',
    title: 'Resultados Reais para a sua',
    titleHighlight: 'Fazenda',
    slogan: 'Consultoria especializada em pecuária de corte e leite. Aumente sua produtividade com tecnologia e gestão eficiente.',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=2073&auto=format&fit=crop',
    cardIcon: 'TrendingUp',
    cardTitle: '+30%',
    cardDescription: 'Aumento médio em produtividade'
  }
];

const SlidesContext = createContext<SlidesContextType | undefined>(undefined);

export function SlidesProvider({ children }: { children: React.ReactNode }) {
  const [slides, setSlides] = useState<SlideData[]>(() => {
    const saved = localStorage.getItem('campec_slides');
    return saved ? JSON.parse(saved) : defaultSlides;
  });

  useEffect(() => {
    localStorage.setItem('campec_slides', JSON.stringify(slides));
  }, [slides]);

  const addSlide = (slide: Omit<SlideData, 'id'>) => {
    const newSlide = { ...slide, id: Date.now().toString() };
    setSlides([...slides, newSlide]);
  };

  const updateSlide = (id: string, updatedSlide: Omit<SlideData, 'id'>) => {
    setSlides(slides.map(s => s.id === id ? { ...updatedSlide, id } : s));
  };

  const deleteSlide = (id: string) => {
    setSlides(slides.filter(s => s.id !== id));
  };

  return (
    <SlidesContext.Provider value={{ slides, addSlide, updateSlide, deleteSlide }}>
      {children}
    </SlidesContext.Provider>
  );
}

export function useSlides() {
  const context = useContext(SlidesContext);
  if (context === undefined) {
    throw new Error('useSlides must be used within a SlidesProvider');
  }
  return context;
}
