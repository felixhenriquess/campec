import React, { useState, useRef } from 'react';
import { Image as ImageIcon, Save, Upload } from 'lucide-react';
import { useSettings } from '../../contexts/SettingsContext';

export default function Appearance() {
  const { 
    logoHorizontalLight, logoHorizontalDark, logoVerticalLight, logoVerticalDark, favicon,
    setLogoHorizontalLight, setLogoHorizontalDark, setLogoVerticalLight, setLogoVerticalDark, setFavicon
  } = useSettings();

  const [primaryColor, setPrimaryColor] = useState('#14a851');
  const [secondaryColor, setSecondaryColor] = useState('#3e6251');
  const [accentColor, setAccentColor] = useState('#FFFFFF');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, setter: (val: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setter(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const LogoUploadField = ({ 
    title, 
    value, 
    setter, 
    description 
  }: { 
    title: string, 
    value: string, 
    setter: (val: string) => void,
    description: string
  }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="w-32 h-24 bg-[#fdf8e7] dark:bg-gray-700 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center shrink-0 overflow-hidden relative group">
            {value ? (
              <img src={value} alt={title} className="w-full h-full object-contain p-2" />
            ) : (
              <div className="text-[#3e6251] dark:text-gray-400 text-xs font-serif tracking-widest flex flex-col items-center">
                <ImageIcon className="w-6 h-6 mb-1 opacity-50" />
                PREVIEW
              </div>
            )}
            {value && (
              <div className="absolute inset-0 bg-black/50 hidden group-hover:flex items-center justify-center transition-all">
                <button 
                  onClick={() => setter('')}
                  className="text-white text-xs font-bold hover:underline"
                >
                  Remover
                </button>
              </div>
            )}
          </div>
          <div className="flex-1 w-full">
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              ref={fileInputRef}
              onChange={(e) => handleFileUpload(e, setter)}
            />
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="w-full bg-[#0f7636] hover:bg-[#0c5e2b] text-white py-2.5 rounded-lg text-sm font-bold transition-colors mb-2 flex items-center justify-center gap-2"
            >
              <Upload size={16} />
              Upload Logo
            </button>
            <p className="text-xs text-gray-400">{description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-5xl pb-12">
      
      <div className="space-y-10">
        
        {/* Identidade Visual */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Identidade Visual</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Gerencie os logotipos e ícones que representam sua marca no site.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LogoUploadField 
              title="Logo Horizontal (Light)" 
              value={logoHorizontalLight} 
              setter={setLogoHorizontalLight} 
              description="Usado em fundos claros. Recomendado: SVG ou PNG transparente."
            />
            <LogoUploadField 
              title="Logo Horizontal (Dark)" 
              value={logoHorizontalDark} 
              setter={setLogoHorizontalDark} 
              description="Usado em fundos escuros. Recomendado: SVG ou PNG transparente."
            />
            <LogoUploadField 
              title="Logo Vertical (Light)" 
              value={logoVerticalLight} 
              setter={setLogoVerticalLight} 
              description="Usado em fundos claros. Recomendado: SVG ou PNG transparente."
            />
            <LogoUploadField 
              title="Logo Vertical (Dark)" 
              value={logoVerticalDark} 
              setter={setLogoVerticalDark} 
              description="Usado em fundos escuros. Recomendado: SVG ou PNG transparente."
            />
          </div>

          <div className="mt-6">
            {/* Favicon */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Favicon (Ícone do Navegador)</h3>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center shrink-0 overflow-hidden relative group">
                  {favicon ? (
                    <img src={favicon} alt="Favicon" className="w-full h-full object-contain p-1" />
                  ) : (
                    <div className="w-8 h-8 bg-[#0f7636] rounded flex items-center justify-center">
                      <ImageIcon className="text-white" size={16} />
                    </div>
                  )}
                  {favicon && (
                    <div className="absolute inset-0 bg-black/50 hidden group-hover:flex items-center justify-center transition-all">
                      <button 
                        onClick={() => setFavicon('')}
                        className="text-white text-[10px] font-bold hover:underline"
                      >
                        Remover
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex-1 w-full">
                  <input 
                    type="file" 
                    accept=".ico,.png,image/png,image/x-icon" 
                    className="hidden" 
                    id="faviconUpload"
                    onChange={(e) => handleFileUpload(e, setFavicon)}
                  />
                  <button 
                    onClick={() => document.getElementById('faviconUpload')?.click()}
                    className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2.5 rounded-lg text-sm font-bold transition-colors mb-2 flex items-center justify-center gap-2"
                  >
                    <Upload size={16} />
                    Alterar Ícone
                  </button>
                  <p className="text-xs text-gray-400">Recomendado: ICO ou PNG (32x32px).</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Paleta de Cores */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Paleta de Cores</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Defina as cores globais que serão aplicadas em botões, links e destaques.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3">Cor Primária</label>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded border border-gray-200 dark:border-gray-600 shrink-0" style={{ backgroundColor: primaryColor }}></div>
                  <input 
                    type="text" 
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="flex-1 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7636] transition-colors"
                  />
                </div>
                <p className="text-xs text-gray-400">Usada para botões principais e elementos de ação.</p>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3">Cor Secundária</label>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded border border-gray-200 dark:border-gray-600 shrink-0" style={{ backgroundColor: secondaryColor }}></div>
                  <input 
                    type="text" 
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="flex-1 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7636] transition-colors"
                  />
                </div>
                <p className="text-xs text-gray-400">Usada em rodapés e seções secundárias.</p>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3">Cor de Destaque</label>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded border border-gray-200 dark:border-gray-600 shrink-0" style={{ backgroundColor: accentColor }}></div>
                  <input 
                    type="text" 
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="flex-1 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7636] transition-colors"
                  />
                </div>
                <p className="text-xs text-gray-400">Usada para textos em fundos escuros.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Créditos do Desenvolvedor */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Créditos do Desenvolvedor</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Configure o link e os logotipos do desenvolvedor para exibição no rodapé.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3">Link do Desenvolvedor</label>
                <input 
                  type="url" 
                  placeholder="https://"
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f7636] transition-colors"
                />
              </div>
              
              <div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Logo (Modo Light)</h3>
                <div className="flex flex-col gap-4">
                  <div className="w-full h-24 bg-gray-50 dark:bg-gray-700 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
                    <ImageIcon className="text-gray-400" size={24} />
                  </div>
                  <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2.5 rounded-lg text-sm font-bold transition-colors">
                    Upload Logo Light
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Logo (Modo Dark)</h3>
                <div className="flex flex-col gap-4">
                  <div className="w-full h-24 bg-gray-900 rounded-xl border border-dashed border-gray-600 flex items-center justify-center">
                    <ImageIcon className="text-gray-400" size={24} />
                  </div>
                  <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2.5 rounded-lg text-sm font-bold transition-colors">
                    Upload Logo Dark
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Funcionalidades Extras */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Funcionalidades Extras</h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Widget de Acessibilidade</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Ativa o menu de acessibilidade (ajuste de contraste, tamanho de fonte) no site público.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 dark:after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0f7636]"></div>
              </label>
            </div>
          </div>
        </section>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4 pt-4">
          <button className="px-6 py-2.5 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            Descartar Alterações
          </button>
          <button className="bg-[#0f7636] hover:bg-[#0c5e2b] text-white px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors">
            <Save size={18} />
            Salvar Alterações
          </button>
        </div>

      </div>
    </div>
  );
}
