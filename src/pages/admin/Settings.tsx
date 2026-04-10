import React, { useState } from 'react';
import { Save, Globe, Link as LinkIcon, Mail, Phone, MapPin, Image as ImageIcon, Clock } from 'lucide-react';
import { useSettings } from '../../contexts/SettingsContext';

export default function Settings() {
  const [isSaving, setIsSaving] = useState(false);
  const { 
    phone, email, address, businessHours, siteTitle, copyrightText, seoDescription,
    instagram, facebook, youtube, whatsapp,
    setPhone, setEmail, setAddress, setBusinessHours, setSiteTitle, setCopyrightText, setSeoDescription,
    setInstagram, setFacebook, setYoutube, setWhatsapp
  } = useSettings();

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1000);
  };

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Configurações Gerais</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Gerencie as informações principais do sistema, dados de contato e links sociais.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Informações Principais */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Globe className="text-[#0f7636]" size={20} />
              Informações do Site
            </h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                  Título do Site
                </label>
                <input 
                  type="text" 
                  value={siteTitle}
                  onChange={(e) => setSiteTitle(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#0f7636] focus:border-transparent outline-none transition-all dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                  Texto de Copyright
                </label>
                <input 
                  type="text" 
                  value={copyrightText}
                  onChange={(e) => setCopyrightText(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#0f7636] focus:border-transparent outline-none transition-all dark:text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                Descrição Curta (SEO)
              </label>
              <textarea 
                rows={3}
                value={seoDescription}
                onChange={(e) => setSeoDescription(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#0f7636] focus:border-transparent outline-none transition-all dark:text-white resize-none"
              />
            </div>
          </div>
        </div>

        {/* Desenvolvedor */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <ImageIcon className="text-[#0f7636]" size={20} />
              Créditos do Desenvolvedor
            </h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                  Nome / Logo Texto
                </label>
                <input 
                  type="text" 
                  placeholder="Nome da agência ou desenvolvedor"
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#0f7636] focus:border-transparent outline-none transition-all dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                  Link do Desenvolvedor
                </label>
                <input 
                  type="url" 
                  placeholder="https://"
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#0f7636] focus:border-transparent outline-none transition-all dark:text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                Logo do Desenvolvedor (Opcional)
              </label>
              <input 
                type="file" 
                accept="image/*"
                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#0f7636] focus:border-transparent outline-none transition-all dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 dark:file:bg-green-900/30 dark:file:text-green-400"
              />
            </div>
          </div>
        </div>

        {/* Dados de Contato */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Phone className="text-[#0f7636]" size={20} />
              Dados de Contato
            </h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <Phone size={16} className="text-gray-400" />
                  Telefone Principal
                </label>
                <input 
                  type="text" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#0f7636] focus:border-transparent outline-none transition-all dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <Mail size={16} className="text-gray-400" />
                  E-mail de Contato
                </label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#0f7636] focus:border-transparent outline-none transition-all dark:text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" />
                Endereço Completo
              </label>
              <input 
                type="text" 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#0f7636] focus:border-transparent outline-none transition-all dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <Clock size={16} className="text-gray-400" />
                Horário de Atendimento
              </label>
              <textarea 
                rows={2}
                value={businessHours}
                onChange={(e) => setBusinessHours(e.target.value)}
                placeholder="Ex: Segunda a Sexta: 08h às 18h&#10;Sábado: 08h às 12h"
                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#0f7636] focus:border-transparent outline-none transition-all dark:text-white resize-none"
              />
            </div>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <LinkIcon className="text-[#0f7636]" size={20} />
              Redes Sociais
            </h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                  Instagram (URL)
                </label>
                <input 
                  type="url" 
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  placeholder="https://instagram.com/..."
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#0f7636] focus:border-transparent outline-none transition-all dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                  Facebook (URL)
                </label>
                <input 
                  type="url" 
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                  placeholder="https://facebook.com/..."
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#0f7636] focus:border-transparent outline-none transition-all dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                  YouTube (URL)
                </label>
                <input 
                  type="url" 
                  value={youtube}
                  onChange={(e) => setYoutube(e.target.value)}
                  placeholder="https://youtube.com/c/..."
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#0f7636] focus:border-transparent outline-none transition-all dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                  WhatsApp (Número)
                </label>
                <input 
                  type="text" 
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="Ex: 5511999999999"
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#0f7636] focus:border-transparent outline-none transition-all dark:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button 
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 px-6 py-3 bg-[#0f7636] hover:bg-[#0c5e2b] text-white rounded-xl font-bold transition-colors disabled:opacity-70"
        >
          <Save size={20} />
          {isSaving ? 'Salvando...' : 'Salvar Configurações'}
        </button>
      </div>
    </div>
  );
}
