import { useState } from 'react';
import { Upload, Edit2, Trash2, Mail, Phone, TrendingUp, UserPlus, Calendar, Star } from 'lucide-react';

export default function Professionals() {
  return (
    <div className="max-w-7xl mx-auto pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-200">Gestão de Profissionais</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 transition-colors duration-200">Administre a rede de especialistas da Campec e cadastre novos consultores de campo.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Left Column - Form */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1.5 h-8 bg-[#0f7636] rounded-full"></div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Cadastrar Novo Profissional</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-900 dark:text-white mb-2 tracking-wider uppercase">Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Ex: Moacir Jaime de Souza"
                  className="w-full bg-gray-100 dark:bg-gray-900 border-none rounded-lg px-4 py-3.5 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0f7636] transition-colors placeholder-gray-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-900 dark:text-white mb-2 tracking-wider uppercase">Especialização</label>
                  <select className="w-full bg-gray-100 dark:bg-gray-900 border-none rounded-lg px-4 py-3.5 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0f7636] transition-colors appearance-none">
                    <option>Veterinário</option>
                    <option>Agrônomo</option>
                    <option>Zootecnista</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-900 dark:text-white mb-2 tracking-wider uppercase">Registro (CRMV/CREA)</label>
                  <input 
                    type="text" 
                    placeholder="000.000-0"
                    className="w-full bg-gray-100 dark:bg-gray-900 border-none rounded-lg px-4 py-3.5 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0f7636] transition-colors placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-900 dark:text-white mb-2 tracking-wider uppercase">E-mail Profissional</label>
                  <input 
                    type="email" 
                    placeholder="moacir@campec.com"
                    className="w-full bg-gray-100 dark:bg-gray-900 border-none rounded-lg px-4 py-3.5 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0f7636] transition-colors placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-900 dark:text-white mb-2 tracking-wider uppercase">Telefone</label>
                  <input 
                    type="text" 
                    placeholder="(00) 00000-0000"
                    className="w-full bg-gray-100 dark:bg-gray-900 border-none rounded-lg px-4 py-3.5 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0f7636] transition-colors placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-900 dark:text-white mb-2 tracking-wider uppercase">Breve Bio</label>
                <textarea 
                  placeholder="Experiência em gado de corte e manejo sustentável..."
                  rows={4}
                  className="w-full bg-gray-100 dark:bg-gray-900 border-none rounded-lg px-4 py-3.5 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0f7636] transition-colors resize-none placeholder-gray-400"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-900 dark:text-white mb-2 tracking-wider uppercase">Foto de Perfil</label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer">
                  <Upload className="text-gray-900 dark:text-white mb-3" size={24} />
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-1"><span className="font-bold text-[#0f7636]">Upload de arquivo</span> ou arraste e solte</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">PNG, JPG até 10MB</p>
                </div>
              </div>

              <button className="w-full bg-[#0f7636] hover:bg-[#0c5e2b] text-white py-4 rounded-lg text-sm font-bold transition-colors mt-4">
                Finalizar Cadastro
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - List */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-6 bg-[#0f7636] rounded-full"></div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Profissionais Ativos</h2>
            </div>
            <button className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-colors">
              Filtros: Todos
            </button>
          </div>

          <div className="space-y-4">
            {[
              {
                name: "Moacir Jaime de Souza",
                role: "Veterinário",
                reg: "CRMV-SP 12.345",
                email: "moacir.jaime@campec.com",
                phone: "(11) 98765-4321",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
                color: "bg-green-800"
              },
              {
                name: "Ana Clara Meireles",
                role: "Agrônoma",
                reg: "CREA-MG 54.321",
                email: "ana.clara@campec.com",
                phone: "(31) 99887-1122",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
                color: "bg-gray-400"
              },
              {
                name: "Ricardo Fontes",
                role: "Zootecnista",
                reg: "CFMV 09.887",
                email: "ricardo.f@campec.com",
                phone: "(21) 97766-5544",
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
                color: "bg-pink-800"
              }
            ].map((prof, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-between transition-colors duration-200 relative overflow-hidden">
                {/* Left accent border */}
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${prof.color}`}></div>
                
                <div className="flex items-center gap-6 pl-4">
                  <div className={`w-20 h-20 rounded-2xl overflow-hidden shrink-0 ${prof.color}`}>
                    <img src={prof.img} alt={prof.name} className="w-full h-full object-cover mix-blend-luminosity opacity-90" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{prof.name}</h3>
                    <div className="flex items-center gap-2 text-sm mb-3">
                      <span className={`font-bold ${prof.color.replace('bg-', 'text-')}`}>{prof.role}</span>
                      <span className="text-gray-300 dark:text-gray-600">•</span>
                      <span className="text-gray-500">{prof.reg}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Mail size={12} />
                        {prof.email}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Phone size={12} />
                        {prof.phone}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <Edit2 size={18} />
                  </button>
                  <button className="p-2 text-red-500 hover:text-red-700 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total de Profissionais */}
        <div className="bg-[#0f7636] p-6 rounded-2xl text-white relative overflow-hidden shadow-sm">
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-white/5 rounded-full border-[20px] border-white/5"></div>
          <h3 className="text-xs font-bold tracking-widest uppercase mb-2 relative z-10 text-white/90">Total de Profissionais</h3>
          <p className="text-4xl font-bold mb-4 relative z-10">124</p>
          <div className="inline-flex items-center gap-1 bg-white/20 px-2.5 py-1 rounded-full text-xs font-bold relative z-10">
            <TrendingUp size={14} />
            +12% vs mês anterior
          </div>
        </div>

        {/* Novos Este Mês */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xs font-bold tracking-widest uppercase text-gray-900 dark:text-white">Novos Este Mês</h3>
            <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-[#0f7636] dark:text-green-400">
              <UserPlus size={20} />
            </div>
          </div>
          <p className="text-4xl font-bold text-gray-900 dark:text-white mb-4">08</p>
          <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 mb-2">
            <div className="bg-gray-900 dark:bg-white h-1.5 rounded-full" style={{ width: '66%' }}></div>
          </div>
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">66% da meta mensal atingida</p>
        </div>

        {/* Taxa de Ocupação */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xs font-bold tracking-widest uppercase text-gray-900 dark:text-white">Taxa de Ocupação</h3>
            <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500">
              <Calendar size={20} />
            </div>
          </div>
          <p className="text-4xl font-bold text-gray-900 dark:text-white mb-4">92<span className="text-2xl">%</span></p>
          <p className="text-xs text-gray-500">Especialistas com agenda ativa hoje.</p>
        </div>

        {/* Avaliação Média */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xs font-bold tracking-widest uppercase text-gray-900 dark:text-white">Avaliação Média</h3>
            <div className="w-10 h-10 rounded-lg bg-green-400 dark:bg-green-500 flex items-center justify-center text-white">
              <Star size={20} fill="currentColor" />
            </div>
          </div>
          <p className="text-4xl font-bold text-gray-900 dark:text-white mb-4">4.9</p>
          <div className="flex gap-1 text-[#0f7636]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={14} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
