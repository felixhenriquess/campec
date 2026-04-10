import React from 'react';
import PublicLayout from '../layouts/PublicLayout';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext';

export default function ContactPage() {
  const { phone, email, address, businessHours } = useSettings();

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="bg-green-900 dark:bg-green-950 text-white py-20 transition-colors duration-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fale Conosco</h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Estamos prontos para entender as necessidades da sua fazenda e oferecer as melhores soluções em consultoria agropecuária.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Informações de Contato</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Preencha o formulário ao lado ou entre em contato através dos nossos canais de atendimento. Nossa equipe retornará o mais breve possível.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-400 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Endereço</h3>
                    <p className="text-gray-600 dark:text-gray-400">{address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-400 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Telefone / WhatsApp</h3>
                    <p className="text-gray-600 dark:text-gray-400">{phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-400 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">E-mail</h3>
                    <p className="text-gray-600 dark:text-gray-400">{email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-400 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Horário de Atendimento</h3>
                    <div className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                      {businessHours}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envie uma Mensagem</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome Completo</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all dark:text-white"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">E-mail</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all dark:text-white"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Telefone / WhatsApp</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all dark:text-white"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Assunto</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all dark:text-white"
                    placeholder="Ex: Dúvida sobre Assessoria Reprodutiva"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensagem</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all dark:text-white resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-colors mt-4 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Enviar Mensagem
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
