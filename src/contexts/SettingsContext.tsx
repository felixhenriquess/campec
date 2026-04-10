import React, { createContext, useContext, useState, useEffect } from 'react';

interface SettingsContextType {
  phone: string;
  email: string;
  address: string;
  businessHours: string;
  siteTitle: string;
  copyrightText: string;
  seoDescription: string;
  logoHorizontalLight: string;
  logoHorizontalDark: string;
  logoVerticalLight: string;
  logoVerticalDark: string;
  favicon: string;
  instagram: string;
  facebook: string;
  youtube: string;
  whatsapp: string;
  setPhone: (val: string) => void;
  setEmail: (val: string) => void;
  setAddress: (val: string) => void;
  setBusinessHours: (val: string) => void;
  setSiteTitle: (val: string) => void;
  setCopyrightText: (val: string) => void;
  setSeoDescription: (val: string) => void;
  setLogoHorizontalLight: (val: string) => void;
  setLogoHorizontalDark: (val: string) => void;
  setLogoVerticalLight: (val: string) => void;
  setLogoVerticalDark: (val: string) => void;
  setFavicon: (val: string) => void;
  setInstagram: (val: string) => void;
  setFacebook: (val: string) => void;
  setYoutube: (val: string) => void;
  setWhatsapp: (val: string) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [phone, setPhone] = useState('(62) 3333-3333');
  const [email, setEmail] = useState('contato@campec.com.br');
  const [address, setAddress] = useState('Av. T-9, 1234 - Setor Bueno, Goiânia - GO, 74000-000');
  const [businessHours, setBusinessHours] = useState('Segunda a Sexta: 08h às 18h\nSábado: 08h às 12h');
  const [siteTitle, setSiteTitle] = useState('Campec Consultoria');
  const [copyrightText, setCopyrightText] = useState('© 2024 Campec Consultoria. Todos os direitos reservados.');
  const [seoDescription, setSeoDescription] = useState('Consultoria agropecuária especializada em oferecer as melhores soluções para sua fazenda.');
  const [logoHorizontalLight, setLogoHorizontalLight] = useState('');
  const [logoHorizontalDark, setLogoHorizontalDark] = useState('');
  const [logoVerticalLight, setLogoVerticalLight] = useState('');
  const [logoVerticalDark, setLogoVerticalDark] = useState('');
  const [favicon, setFavicon] = useState('');
  const [instagram, setInstagram] = useState('https://instagram.com/campec');
  const [facebook, setFacebook] = useState('https://facebook.com/campec');
  const [youtube, setYoutube] = useState('https://youtube.com/c/campec');
  const [whatsapp, setWhatsapp] = useState('5562999999999');

  useEffect(() => {
    document.title = siteTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = seoDescription;
      document.head.appendChild(meta);
    }
  }, [siteTitle, seoDescription]);

  useEffect(() => {
    if (favicon) {
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = favicon;
    }
  }, [favicon]);

  return (
    <SettingsContext.Provider value={{ 
      phone, email, address, businessHours, siteTitle, copyrightText, seoDescription,
      logoHorizontalLight, logoHorizontalDark, logoVerticalLight, logoVerticalDark, favicon,
      instagram, facebook, youtube, whatsapp,
      setPhone, setEmail, setAddress, setBusinessHours, setSiteTitle, setCopyrightText, setSeoDescription,
      setLogoHorizontalLight, setLogoHorizontalDark, setLogoVerticalLight, setLogoVerticalDark, setFavicon,
      setInstagram, setFacebook, setYoutube, setWhatsapp
    }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
