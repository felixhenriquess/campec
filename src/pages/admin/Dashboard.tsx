import React from 'react';
import { Users, FileText, TrendingUp, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { title: 'Total de Visitas', value: '12.543', change: '+12.5%', isPositive: true, icon: Activity },
    { title: 'Artigos Publicados', value: '45', change: '+3', isPositive: true, icon: FileText },
    { title: 'Leads Gerados', value: '128', change: '-2.4%', isPositive: false, icon: Users },
    { title: 'Taxa de Conversão', value: '3.2%', change: '+1.1%', isPositive: true, icon: TrendingUp },
  ];

  return (
    <div className="max-w-5xl mx-auto pb-12">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 transition-colors duration-200">Visão geral do desempenho e atividades recentes.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-50 dark:bg-green-900/30 flex items-center justify-center">
                <stat.icon className="text-[#14a851]" size={20} />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${stat.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {stat.isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                {stat.change}
              </div>
            </div>
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium transition-colors duration-200">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1 transition-colors duration-200">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-200">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white transition-colors duration-200">Atividades Recentes</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {[
                { title: 'Novo artigo publicado', desc: 'Estratégias de suplementação para o período da seca', time: '2 horas atrás', type: 'blog' },
                { title: 'Novo lead capturado', desc: 'João Silva (Fazenda Boa Esperança)', time: '5 horas atrás', type: 'lead' },
                { title: 'Configurações atualizadas', desc: 'Admin alterou as cores do tema', time: '1 dia atrás', type: 'system' },
                { title: 'Sincronização do Instagram', desc: '12 novos posts sincronizados com sucesso', time: '2 dias atrás', type: 'social' },
              ].map((activity, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#14a851] shrink-0"></div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white transition-colors duration-200">{activity.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 transition-colors duration-200">{activity.desc}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 transition-colors duration-200">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-200">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white transition-colors duration-200">Ações Rápidas</h2>
          </div>
          <div className="p-4 space-y-2">
            <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors text-left group">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Escrever Novo Artigo</span>
              <ArrowUpRight size={16} className="text-gray-400 group-hover:text-[#14a851] transition-colors" />
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors text-left group">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Adicionar Profissional</span>
              <ArrowUpRight size={16} className="text-gray-400 group-hover:text-[#14a851] transition-colors" />
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors text-left group">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Personalizar Tema</span>
              <ArrowUpRight size={16} className="text-gray-400 group-hover:text-[#14a851] transition-colors" />
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors text-left group">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Ver Site Público</span>
              <ArrowUpRight size={16} className="text-gray-400 group-hover:text-[#14a851] transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
