import React from 'react';
import PublicLayout from '../layouts/PublicLayout';
import { Stethoscope, Tractor, LineChart, Sprout, Users, ClipboardCheck, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const openQuoteModal = () => {
    window.dispatchEvent(new CustomEvent('open-quote-modal'));
  };

  const services = [
    {
      icon: <Stethoscope size={32} />,
      title: "Assessoria Reprodutiva",
      description: "Melhore os índices reprodutivos do seu rebanho com protocolos avançados de IATF, TE e FIV, garantindo maior eficiência e lucratividade."
    },
    {
      icon: <Sprout size={32} />,
      title: "Nutrição Animal",
      description: "Formulação de dietas personalizadas para cada fase do animal, otimizando o ganho de peso e a produção de leite com o melhor custo-benefício."
    },
    {
      icon: <LineChart size={32} />,
      title: "Gestão de Propriedades",
      description: "Implementação de sistemas de gestão, controle de custos, planejamento estratégico e análise de indicadores zootécnicos e financeiros."
    },
    {
      icon: <Tractor size={32} />,
      title: "Projetos Agropecuários",
      description: "Elaboração de projetos técnicos para financiamentos, licenciamento ambiental e planejamento de infraestrutura rural."
    },
    {
      icon: <Users size={32} />,
      title: "Treinamento de Equipe",
      description: "Capacitação técnica e comportamental para vaqueiros, capatazes e gerentes, focando em bem-estar animal e eficiência operacional."
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: "Auditoria e Diagnóstico",
      description: "Avaliação completa da fazenda para identificar gargalos produtivos e propor planos de ação focados em resultados rápidos."
    }
  ];

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="bg-green-900 dark:bg-green-950 text-white py-20 transition-colors duration-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Soluções completas e integradas para maximizar a produtividade e a rentabilidade da sua propriedade rural.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Precisa de uma solução personalizada?</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Cada fazenda tem sua realidade. Agende uma conversa com nossos especialistas para montarmos um plano de ação exclusivo para o seu negócio.
          </p>
          <button 
            onClick={openQuoteModal}
            className="bg-green-600 hover:bg-green-700 dark:bg-green-900 dark:hover:bg-green-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Falar com um Especialista
          </button>
        </div>
      </section>
    </PublicLayout>
  );
}
