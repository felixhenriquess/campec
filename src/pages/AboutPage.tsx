import React from 'react';
import PublicLayout from '../layouts/PublicLayout';
import { Target, Eye, Heart, Award, ShieldCheck, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="bg-green-900 dark:bg-green-950 text-white py-20 transition-colors duration-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre a Campec</h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Transformando a pecuária com inovação, ciência e resultados práticos desde a nossa fundação.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Nossa História</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
              A Campec nasceu da paixão pelo agronegócio e da percepção de que a pecuária moderna exige profissionalismo, tecnologia e gestão eficiente. Começamos nossa jornada auxiliando pequenos produtores locais e, com o tempo, expandimos nossa atuação para grandes propriedades em todo o território nacional.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Hoje, somos uma equipe multidisciplinar formada por médicos veterinários, zootecnistas, agrônomos e gestores, todos unidos pelo mesmo propósito: fazer a sua fazenda alcançar o máximo potencial produtivo e financeiro, respeitando o bem-estar animal e o meio ambiente.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Missão</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Entregar soluções tecnológicas e estratégicas que maximizem a rentabilidade e a sustentabilidade das propriedades rurais de nossos clientes.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Visão</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ser a principal referência em consultoria agropecuária no Brasil, reconhecida pela excelência, inovação e resultados comprovados.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Valores</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ética, transparência, compromisso com o resultado, inovação contínua, respeito ao meio ambiente e valorização das pessoas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por que nos escolher */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Por que escolher a Campec?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Experiência Comprovada</h3>
              <p className="text-gray-600 dark:text-gray-400">Anos de atuação no mercado com dezenas de casos de sucesso.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-4">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Atendimento Personalizado</h3>
              <p className="text-gray-600 dark:text-gray-400">Cada fazenda é única. Nossas soluções são feitas sob medida.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-4">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Foco em Resultados</h3>
              <p className="text-gray-600 dark:text-gray-400">Nosso sucesso é medido pelo aumento da sua lucratividade.</p>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
