import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Accessibility, Menu, Sun, Moon, Instagram, Linkedin, Youtube, LogIn, Facebook, MessageCircle, Lock, Contrast } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { useSettings } from '../contexts/SettingsContext';
import QuoteModal from '../components/QuoteModal';
import AccessibilityPanel from '../components/AccessibilityPanel';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme();
  const { increaseText, decreaseText, resetText, highContrast, toggleHighContrast } = useAccessibility();
  const { phone, email, address, copyrightText, facebook, instagram, youtube, whatsapp } = useSettings();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsQuoteModalOpen(true);
    window.addEventListener('open-quote-modal', handleOpenModal);
    return () => window.removeEventListener('open-quote-modal', handleOpenModal);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <AccessibilityPanel />
      {/* Top Bar */}
      <div className="bg-green-900 dark:bg-green-950 text-white text-sm py-2 px-4 flex justify-between items-center hidden md:flex transition-colors duration-200">
        <div className="flex space-x-6">
          <span className="flex items-center gap-2"><Phone size={16} /> {phone}</span>
          <span className="flex items-center gap-2"><Mail size={16} /> {email}</span>
          <span className="flex items-center gap-2"><MapPin size={16} /> {address}</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            {facebook && <a href={facebook} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors" aria-label="Facebook"><Facebook size={16} /></a>}
            {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors" aria-label="Instagram"><Instagram size={16} /></a>}
            {youtube && <a href={youtube} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors" aria-label="YouTube"><Youtube size={16} /></a>}
            {whatsapp && <a href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors" aria-label="WhatsApp"><MessageCircle size={16} /></a>}
          </div>
          
          <span className="text-green-700 dark:text-green-800">|</span>
          
          <div className="flex items-center space-x-1">
            <button onClick={increaseText} className="w-7 h-7 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded text-sm font-bold transition-colors" aria-label="Aumentar fonte">A+</button>
            <button onClick={resetText} className="w-7 h-7 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded text-sm font-bold transition-colors" aria-label="Fonte normal">A</button>
            <button onClick={decreaseText} className="w-7 h-7 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded text-sm font-bold transition-colors" aria-label="Diminuir fonte">A-</button>
          </div>

          <span className="text-green-700 dark:text-green-800">|</span>

          <div className="flex items-center bg-white/20 rounded-full p-0.5 relative">
            <button 
              onClick={() => { if(highContrast) toggleHighContrast(); if(theme === 'dark') toggleTheme(); }} 
              className={`w-7 h-7 flex items-center justify-center rounded-full transition-colors z-10 ${theme === 'light' && !highContrast ? 'bg-white text-green-900 shadow-sm' : 'text-white/70 hover:text-white'}`}
              aria-label="Modo Claro"
            >
              <Sun size={14} />
            </button>
            <button 
              onClick={() => { if(highContrast) toggleHighContrast(); if(theme === 'light') toggleTheme(); }} 
              className={`w-7 h-7 flex items-center justify-center rounded-full transition-colors z-10 ${theme === 'dark' && !highContrast ? 'bg-gray-800 text-white shadow-sm' : 'text-white/70 hover:text-white'}`}
              aria-label="Modo Escuro"
            >
              <Moon size={14} />
            </button>
            <button 
              onClick={() => { if(!highContrast) toggleHighContrast(); }} 
              className={`w-7 h-7 flex items-center justify-center rounded-full transition-colors z-10 ${highContrast ? 'bg-black text-yellow-400 shadow-sm' : 'text-white/70 hover:text-white'}`}
              aria-label="Alto Contraste"
            >
              <Contrast size={14} />
            </button>
          </div>

          <span className="text-green-700 dark:text-green-800">|</span>

          <Link to="/admin" className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors" aria-label="Login">
            <Lock size={14} />
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-800 dark:bg-green-700 rounded-lg flex items-center justify-center text-white font-bold text-xl transition-colors duration-200">
              C
            </div>
            <span className="text-2xl font-bold text-green-900 dark:text-green-500 transition-colors duration-200">CAMPEC</span>
          </Link>

          <nav className="hidden md:flex space-x-8 items-center font-medium">
            <Link to="/" className="text-green-800 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 transition-colors">Home</Link>
            <Link to="/servicos" className="text-gray-600 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 transition-colors">Serviços</Link>
            <Link to="/equipe" className="text-gray-600 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 transition-colors">Equipe</Link>
            <Link to="/news" className="text-gray-600 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 transition-colors">Notícias</Link>
            <Link to="/sobre" className="text-gray-600 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 transition-colors">Sobre Nós</Link>
            <Link to="/contato" className="text-gray-600 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 transition-colors">Contato</Link>
            
            <div className="flex items-center gap-4 border-l border-gray-200 dark:border-gray-700 pl-6 ml-2">
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-green-950 px-6 py-2 rounded-full font-semibold transition-colors"
              >
                Orçamento
              </button>
            </div>
          </nav>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="text-gray-600 dark:text-gray-300">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-black text-gray-800 dark:text-white pt-16 pb-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-green-800 dark:bg-gray-800 rounded-lg flex items-center justify-center text-white dark:text-green-500 font-bold text-xl transition-colors duration-200">
                C
              </div>
              <span className="text-2xl font-bold text-green-900 dark:text-white">CAMPEC</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-200">
              Consultoria agropecuária especializada em reprodução, nutrição e gestão de fazendas para maximizar seus resultados.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-800 dark:text-yellow-500">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 transition-colors duration-200">
              <li><Link to="/" className="hover:text-green-800 dark:hover:text-white">Home</Link></li>
              <li><Link to="/servicos" className="hover:text-green-800 dark:hover:text-white">Serviços</Link></li>
              <li><Link to="/equipe" className="hover:text-green-800 dark:hover:text-white">Equipe</Link></li>
              <li><Link to="/news" className="hover:text-green-800 dark:hover:text-white">Notícias</Link></li>
              <li><Link to="/sobre" className="hover:text-green-800 dark:hover:text-white">Sobre Nós</Link></li>
              <li><Link to="/contato" className="hover:text-green-800 dark:hover:text-white">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-800 dark:text-yellow-500">Serviços</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 transition-colors duration-200">
              <li><Link to="/servicos" className="hover:text-green-800 dark:hover:text-white">Assessoria Reprodutiva</Link></li>
              <li><Link to="/servicos" className="hover:text-green-800 dark:hover:text-white">Nutrição Animal</Link></li>
              <li><Link to="/servicos" className="hover:text-green-800 dark:hover:text-white">Gestão de Propriedades</Link></li>
              <li><Link to="/servicos" className="hover:text-green-800 dark:hover:text-white">Projetos Agropecuários</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-800 dark:text-yellow-500">Contato</h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400 transition-colors duration-200">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 mt-1" size={20} />
                <span>{address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0" size={20} />
                <span>{phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0" size={20} />
                <span>{email}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center transition-colors duration-200">
          <p>{copyrightText}</p>
          <Link to="/admin" className="mt-4 md:mt-0 hover:text-green-800 dark:hover:text-white underline">Acesso Restrito (Admin)</Link>
        </div>
      </footer>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}
