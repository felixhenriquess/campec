import React, { useState } from 'react';
import { Save, Share2, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Integrations() {
  const [isSaving, setIsSaving] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1000);
  };

  const toggleConnection = () => {
    setIsConnected(!isConnected);
  };

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Integrações</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Conecte serviços externos para expandir as funcionalidades do seu site.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Instagram Integration */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Share2 className="text-[#0f7636]" size={20} />
              Feed do Instagram
            </h3>
            {isConnected ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                <CheckCircle2 size={14} />
                Conectado
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                <AlertCircle size={14} />
                Não Conectado
              </span>
            )}
          </div>
          <div className="p-6 space-y-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Conecte sua conta do Instagram para exibir automaticamente as últimas postagens no seu site. 
              Isso ajuda a manter o conteúdo sempre atualizado e engajar seus visitantes.
            </p>

            <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                    Token de Acesso (Access Token)
                  </label>
                  <input 
                    type="password" 
                    placeholder="Insira o token gerado no painel de desenvolvedor do Facebook/Instagram"
                    className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#0f7636] focus:border-transparent outline-none transition-all dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                    Nome de Usuário (Opcional)
                  </label>
                  <input 
                    type="text" 
                    placeholder="@seuperfil"
                    className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#0f7636] focus:border-transparent outline-none transition-all dark:text-white"
                  />
                </div>
                
                <div className="pt-2 flex items-center gap-4">
                  <button 
                    onClick={toggleConnection}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                      isConnected 
                        ? 'bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/40' 
                        : 'bg-[#0f7636] hover:bg-[#0c5e2b] text-white'
                    }`}
                  >
                    {isConnected ? 'Desconectar Conta' : 'Conectar ao Instagram'}
                  </button>
                  {!isConnected && (
                    <a href="#" className="text-sm text-[#0f7636] hover:underline font-medium">
                      Como obter o token de acesso?
                    </a>
                  )}
                </div>
              </div>
            </div>

            {isConnected && (
              <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">Configurações de Exibição</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                      Número de Posts
                    </label>
                    <select className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#0f7636] focus:border-transparent outline-none transition-all dark:text-white">
                      <option value="4">4 Posts</option>
                      <option value="6">6 Posts</option>
                      <option value="8">8 Posts</option>
                      <option value="12">12 Posts</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                      Layout do Feed
                    </label>
                    <select className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#0f7636] focus:border-transparent outline-none transition-all dark:text-white">
                      <option value="grid">Grade (Grid)</option>
                      <option value="carousel">Carrossel</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
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
