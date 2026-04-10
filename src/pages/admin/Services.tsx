import { useState } from 'react';
import { Plus, Filter, Download, Upload, Edit2, Trash2, Tractor, Syringe, Mountain } from 'lucide-react';

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-200">Gestão de Serviços</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 transition-colors duration-200">Configure e catalogue as ofertas de consultoria agronômica.</p>
        </div>
        <button className="bg-[#0f7636] hover:bg-[#0c5e2b] text-white px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors shrink-0">
          <Plus size={18} />
          Cadastrar Novo Serviço
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Form */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1.5 h-8 bg-[#0f7636] rounded-full"></div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Detalhes do Novo Serviço</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-900 dark:text-white mb-2 tracking-wider uppercase">Nome do Serviço</label>
                <input 
                  type="text" 
                  placeholder="Ex: Análise de Solo Avançada"
                  className="w-full bg-gray-100 dark:bg-gray-900 border-none rounded-lg px-4 py-3.5 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0f7636] transition-colors placeholder-gray-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-900 dark:text-white mb-2 tracking-wider uppercase">Categoria</label>
                  <select className="w-full bg-gray-100 dark:bg-gray-900 border-none rounded-lg px-4 py-3.5 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0f7636] transition-colors appearance-none">
                    <option>Consultoria Agrícola</option>
                    <option>Veterinária</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-900 dark:text-white mb-2 tracking-wider uppercase">Orçamento Estimado</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">R$</span>
                    <input 
                      type="text" 
                      placeholder="0,00"
                      className="w-full bg-gray-100 dark:bg-gray-900 border-none rounded-lg pl-10 pr-4 py-3.5 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0f7636] transition-colors placeholder-gray-400 font-medium"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-900 dark:text-white mb-2 tracking-wider uppercase">Descrição</label>
                <textarea 
                  placeholder="Descreva os entregáveis e escopo do serviço..."
                  rows={4}
                  className="w-full bg-gray-100 dark:bg-gray-900 border-none rounded-lg px-4 py-3.5 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-[#0f7636] transition-colors resize-none placeholder-gray-400"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-900 dark:text-white mb-2 tracking-wider uppercase">Upload de Imagem</label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer">
                  <Upload className="text-gray-500 dark:text-gray-400 mb-3" size={24} />
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Solte o arquivo aqui ou clique para buscar</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">SVG, PNG, JPG (MAX. 5MB)</p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 p-5 rounded-xl flex items-center justify-between border border-gray-100 dark:border-gray-800">
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Status do Serviço</p>
                  <p className="text-xs text-gray-500 mt-0.5">Define se o serviço está visível para clientes</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 dark:after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0f7636]"></div>
                </label>
              </div>

              <button className="w-full bg-[#0f7636] hover:bg-[#0c5e2b] text-white py-3.5 rounded-lg text-sm font-bold transition-colors mt-2">
                Salvar Configuração
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Active Services List */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Serviços Ativos</h2>
              <div className="flex gap-3">
                <button className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Filter size={20} />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Download size={20} />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-separate border-spacing-y-3">
                <thead className="text-xs text-gray-900 dark:text-white uppercase tracking-widest font-bold">
                  <tr>
                    <th scope="col" className="px-4 pb-2">Serviço</th>
                    <th scope="col" className="px-4 pb-2">Categoria</th>
                    <th scope="col" className="px-4 pb-2">Status</th>
                    <th scope="col" className="px-4 pb-2 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { 
                      name: "Análise de Nutrientes", 
                      estimate: "R$ 450,00",
                      cat: "Consultoria", 
                      catColor: "bg-green-100 text-[#0f7636] dark:bg-green-900/30 dark:text-green-400",
                      status: "Ativo", 
                      statusColor: "bg-[#0f7636]",
                      icon: Tractor,
                      iconBg: "bg-[#e8f5e9] dark:bg-[#e8f5e9]/10",
                      iconColor: "text-[#0f7636]"
                    },
                    { 
                      name: "Consultoria Veterinária", 
                      estimate: "R$ 1.200,00",
                      cat: "Veterinária", 
                      catColor: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
                      status: "Ativo", 
                      statusColor: "bg-[#0f7636]",
                      icon: Syringe,
                      iconBg: "bg-[#e8f5e9] dark:bg-[#e8f5e9]/10",
                      iconColor: "text-[#0f7636]"
                    },
                    { 
                      name: "Mapeamento Geográfico", 
                      estimate: "Sob consulta",
                      cat: "Consultoria", 
                      catColor: "bg-green-100 text-[#0f7636] dark:bg-green-900/30 dark:text-green-400",
                      status: "Inativo", 
                      statusColor: "bg-gray-400",
                      icon: Mountain,
                      iconBg: "bg-gray-100 dark:bg-gray-800",
                      iconColor: "text-gray-500",
                      inactive: true
                    },
                  ].map((service, idx) => (
                    <tr key={idx} className={`bg-gray-50/50 dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors rounded-xl ${service.inactive ? 'opacity-60' : ''}`}>
                      <td className="px-4 py-4 rounded-l-xl">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${service.iconBg}`}>
                            <service.icon size={24} className={service.iconColor} />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 dark:text-white text-base">{service.name}</p>
                            <p className="text-xs text-gray-500 mt-0.5">Estimado: {service.estimate}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${service.catColor}`}>
                          {service.cat}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${service.statusColor}`}></div>
                          <span className="font-bold text-gray-900 dark:text-white text-sm">{service.status}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-right rounded-r-xl">
                        <div className="flex items-center justify-end gap-3">
                          <button className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <Edit2 size={18} />
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
            
            <div className="mt-8 flex items-center justify-between">
              <span className="text-sm text-gray-500 font-medium">Mostrando 3 de 12 serviços</span>
              <div className="flex gap-2">
                <button className="w-8 h-8 flex items-center justify-center border border-gray-200 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-[#0f7636] rounded bg-[#0f7636] text-white font-bold transition-colors shadow-sm">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-200 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium">
                  3
                </button>
                <span className="w-8 h-8 flex items-center justify-center text-gray-400 font-medium">...</span>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-200 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  &gt;
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Total Budget Yield */}
            <div className="bg-[#0f7636] p-8 rounded-2xl text-white relative overflow-hidden shadow-sm">
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/5 rounded-full border-[24px] border-white/5"></div>
              <h3 className="text-xs font-bold tracking-widest uppercase mb-4 relative z-10 text-white/90">Rendimento Total Estimado</h3>
              <p className="text-4xl font-bold mb-4 relative z-10">R$ 42.800</p>
              <div className="inline-block bg-white/20 px-2.5 py-1 rounded text-xs font-bold relative z-10">
                +12% vs mês passado
              </div>
            </div>

            {/* Service Engagement */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200">
              <h3 className="text-xs font-bold text-gray-900 dark:text-white tracking-widest uppercase mb-6">Engajamento de Serviços</h3>
              
              <div className="flex items-end gap-2 h-16 mb-4">
                <div className="w-full bg-[#0f7636]/30 rounded-t-sm h-[30%]"></div>
                <div className="w-full bg-[#0f7636]/40 rounded-t-sm h-[50%]"></div>
                <div className="w-full bg-[#0f7636]/40 rounded-t-sm h-[45%]"></div>
                <div className="w-full bg-[#0f7636]/70 rounded-t-sm h-[70%]"></div>
                <div className="w-full bg-[#0f7636] rounded-t-sm h-[100%]"></div>
              </div>
              
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                Crescimento: <span className="text-lg">18.2%</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
