import { useState } from 'react';
import { Camera, FileText, Plus, RefreshCw, Edit3, Trash2, PlayCircle, Search, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Content() {
  const [activeTab, setActiveTab] = useState<'instagram' | 'blog'>('instagram');

  return (
    <div className="max-w-7xl mx-auto pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-200 font-serif">Gestão de Conteúdo</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 transition-colors duration-200">Gerencie seus artigos do blog e a integração com o feed do Instagram.</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8 transition-colors duration-200">
        <button 
          onClick={() => setActiveTab('instagram')}
          className={`flex items-center gap-2 px-6 py-3 text-sm font-bold border-b-2 transition-colors ${
            activeTab === 'instagram' 
              ? 'border-[#0f7636] text-[#0f7636]' 
              : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
          }`}
        >
          <Camera size={18} />
          Integração Instagram
        </button>
        <button 
          onClick={() => setActiveTab('blog')}
          className={`flex items-center gap-2 px-6 py-3 text-sm font-bold border-b-2 transition-colors ${
            activeTab === 'blog' 
              ? 'border-[#0f7636] text-[#0f7636]' 
              : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
          }`}
        >
          <FileText size={18} />
          Artigos do Blog
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Connection Settings */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 font-serif">Configurações de Conexão</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">Token de Acesso / Link do Perfil</label>
              <div className="flex gap-3">
                <input 
                  type="text" 
                  value="IGQVJYAV9ZAX11ZA..." 
                  readOnly
                  className="flex-1 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 font-mono transition-colors duration-200 focus:outline-none"
                />
                <button className="bg-[#0f7636] hover:bg-[#0c5e2b] text-white px-6 py-2 rounded-lg text-sm font-bold transition-colors">
                  Atualizar
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2 italic">Use um token permanente para sincronização ininterrupta.</p>
            </div>

            <div className="border-t border-gray-100 dark:border-gray-700 pt-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Exibir Reels na Página Inicial</p>
                <p className="text-xs text-gray-400 italic">Ative para mostrar ou ocultar a seção de destaques do Instagram.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 dark:after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0f7636]"></div>
              </label>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white font-serif">Pré-visualização (Últimos 4 Reels)</h2>
                <span className="text-xs text-gray-400 italic">Última sincronização: 10 min atrás</span>
              </div>
              <button className="bg-[#0f7636] hover:bg-[#0c5e2b] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors">
                <RefreshCw size={16} />
                Sincronizar Agora
              </button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c1b?q=80&w=400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1586771107445-d3af2533010b?q=80&w=400&auto=format&fit=crop"
              ].map((img, i) => (
                <div key={i} className="aspect-[9/16] bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden relative group">
                  <img 
                    src={img} 
                    alt="Reel preview" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-gray-900 backdrop-blur-sm">
                      <PlayCircle size={20} className="ml-0.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="space-y-6">
          
          {/* Feed Health */}
          <div className="bg-[#1A3626] p-6 rounded-2xl text-white relative overflow-hidden">
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-white/5 rounded-full border-[20px] border-white/5"></div>
            <h2 className="text-xl font-bold mb-4 font-serif relative z-10">Saúde do Feed</h2>
            
            <div className="flex items-center gap-2 mb-8 relative z-10">
              <div className="w-2 h-2 rounded-full bg-[#17CF17]"></div>
              <span className="text-sm text-[#17CF17]">Conectado e Ativo</span>
            </div>

            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-sm text-green-100/80">Total de Reels</span>
                <span className="font-bold">24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-green-100/80">Total de Visualizações</span>
                <span className="font-bold">3.2M</span>
              </div>
            </div>
          </div>

          {/* Blog Quick Actions */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white font-serif mb-6">Ações Rápidas (Blog)</h2>
            
            <button className="w-full bg-[#0f7636] hover:bg-[#0c5e2b] text-white py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors mb-4">
              <Plus size={18} />
              Publicar Novo Artigo
            </button>
            <p className="text-xs text-gray-400 italic text-center">
              Rascunhos são salvos automaticamente a cada minuto.
            </p>
          </div>

        </div>
      </div>

      {/* Recent Blog Articles */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-serif">Artigos Recentes</h2>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Filtrar artigos..." 
              className="pl-4 pr-10 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-[#0f7636] w-full sm:w-64 transition-colors"
            />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-colors duration-200">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 dark:text-gray-400 uppercase bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-700 font-bold tracking-wider">
                <tr>
                  <th scope="col" className="px-6 py-4">Título do Artigo</th>
                  <th scope="col" className="px-6 py-4">Categoria</th>
                  <th scope="col" className="px-6 py-4">Status</th>
                  <th scope="col" className="px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {[
                  { 
                    title: "Implementando Fertilizantes Biológicos", 
                    cat: "AGRICULTURA", 
                    catColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
                    status: "Publicado", 
                    statusColor: "bg-[#17CF17]",
                    img: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c1b?q=80&w=100&auto=format&fit=crop"
                  },
                  { 
                    title: "Cuidados Avançados para Estresse Pós-Desmame", 
                    cat: "PECUÁRIA", 
                    catColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
                    status: "Publicado", 
                    statusColor: "bg-[#17CF17]",
                    img: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=100&auto=format&fit=crop"
                  },
                  { 
                    title: "Como Sistemas de Irrigação Inteligentes Poupam Água", 
                    cat: "AGRO TECH", 
                    catColor: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
                    status: "Rascunho", 
                    statusColor: "bg-gray-400",
                    img: "https://images.unsplash.com/photo-1586771107445-d3af2533010b?q=80&w=100&auto=format&fit=crop"
                  },
                ].map((post, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                          <img src={post.img} alt="" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white">{post.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded text-[10px] font-bold tracking-wider uppercase ${post.catColor}`}>
                        {post.cat}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${post.statusColor}`}></div>
                        <span className={`text-sm ${post.status === 'Publicado' ? 'text-[#17CF17]' : 'text-gray-500 dark:text-gray-400'}`}>
                          {post.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                          <Edit3 size={18} />
                        </button>
                        <button className="text-gray-400 hover:text-red-500 transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between bg-gray-50 dark:bg-gray-900/50 transition-colors">
            <span className="text-sm text-gray-500 dark:text-gray-400">Mostrando 3 de 15 artigos</span>
            <div className="flex gap-2">
              <button className="w-8 h-8 flex items-center justify-center border border-gray-200 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <ChevronLeft size={16} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center border border-[#0f7636] rounded bg-[#0f7636] text-white font-bold transition-colors">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center border border-gray-200 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-bold">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center border border-gray-200 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
